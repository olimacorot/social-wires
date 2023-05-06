import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from './entities/auth.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRED },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
