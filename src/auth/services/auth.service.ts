import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from '../entities/auth.entity';
import { Repository } from 'typeorm';
import { SingupDto } from '../dto/singup.dto';
import { SinginDto } from '../dto/singin.dto';
import { UserNotExistException } from '../exceptions/user-not-exist.exception';
import { UserAlreadyExistException } from '../exceptions/user-already-exist.exception';
import { AuthenticationHelper } from '../helpers/auth.helper';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    private jwtService: JwtService,
  ) {}

  async singIn(singinDto: SinginDto): Promise<any> {
    const user = await this.authRepository.findOne({
      where: {
        username: singinDto.username,
      },
    });

    if (!user) {
      throw new UserNotExistException();
    }

    const compareHash = await AuthenticationHelper.compareHash(
      singinDto.password,
      user.password,
    );
    if (!compareHash) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
      expires_in: '1d',
      message: 'Successfully logged in',
      status: true,
    };
  }

  async singUp(singupDto: SingupDto): Promise<any> {
    let user: AuthEntity;

    try {
      singupDto.password = await AuthenticationHelper.generateHash(
        singupDto.password,
      );
      user = new AuthEntity(singupDto);
      await this.authRepository.save(user);
    } catch (error) {
      if (error?.code === '23505') {
        throw new UserAlreadyExistException();
      }

      throw error;
    }

    delete user['password'];
    return user;
  }
}
