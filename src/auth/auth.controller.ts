import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { SinginDto } from './dto/singin.dto/singin.dto';
import { SingupDto } from './dto/singin.dto/singup.dto';
import { Public } from './constants';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("/singin")
    async singIn(@Body() singinDto: SinginDto) {
        return await this.authService.singIn(singinDto);
    }

    @Public()
    @Post("/singUp")
    async singUp(@Body() singupDto: SingupDto) {
        const newUser = await this.authService.singUp(singupDto)
        return newUser;
    }
}
