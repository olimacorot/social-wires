import * as bcrypt from "bcrypt";

export class AuthenticationHelper {
  static async generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  static async compareHash(password: string, hash: string): Promise<string> {
    return bcrypt.compare(password, hash);
  }
}