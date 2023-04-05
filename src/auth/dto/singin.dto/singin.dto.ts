import { IsNotEmpty, IsString } from 'class-validator';

export class SinginDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public username: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public password: string;
}
