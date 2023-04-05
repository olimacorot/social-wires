import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public comment: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public author: string;
}
