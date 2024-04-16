import { SetMetadata } from '@nestjs/common';

export const NoAuth = () => SetMetadata('no-auth', true);

export const LoginIn = () => SetMetadata('login-in', true);
