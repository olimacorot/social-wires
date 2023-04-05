import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SingupDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public username: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public password: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public fullname: string;
}
