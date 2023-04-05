import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public title: string;

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public text: string;
}
