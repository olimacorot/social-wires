import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { SinginDto } from './dto/singin.dto/singin.dto';
import { SingupDto } from './dto/singin.dto/singup.dto';
import { Public } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/singin')
  async singIn(@Body() singinDto: SinginDto) {
    return await this.authService.singIn(singinDto);
  }

  @Public()
  @Post('/singup')
  async singUp(@Body() singupDto: SingupDto) {
    const newUser = await this.authService.singUp(singupDto);
    return newUser;
  }
}
