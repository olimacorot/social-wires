import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
  secret: '0c619614-fdf9-4d65-a811-73bb77e51dfc',
  expiresIn: '1d',
};
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
