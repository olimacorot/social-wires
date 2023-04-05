import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReactionDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public reaction: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public author: string;
}
