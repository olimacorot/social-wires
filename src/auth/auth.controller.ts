import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { SinginDto } from './dto/singin.dto';
import { SingupDto } from './dto/singup.dto';
import { Public } from './decorators/public.decorator';
import { singInSchema, singUpSchema } from './schemas/auth.schema';
import { ValidatorPipe } from 'src/pipes/validator.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/singin')
  @Public()
  @UsePipes(new ValidatorPipe(singInSchema))
  async singIn(@Body() singinDto: SinginDto) {
    return await this.authService.singIn(singinDto);
  }

  @Post('/singup')
  @Public()
  @UsePipes(new ValidatorPipe(singUpSchema))
  async singUp(@Body() singupDto: SingupDto) {
    const newUser = await this.authService.singUp(singupDto);
    return newUser;
  }
}
