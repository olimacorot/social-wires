import { BadRequestException } from "@nestjs/common";

export class UserNotExistException extends BadRequestException {
  constructor(error?: string) {
    super("Incorrect username or password", error);
  }
}