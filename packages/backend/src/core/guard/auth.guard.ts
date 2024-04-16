import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';

@Injectable()
export class RoleAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const noAuth = this.reflector.get<boolean>('no-auth', context.getHandler());

    if (noAuth) {
      return true;
    }

    const loginIn = this.reflector.get<boolean>(
      'login-in',
      context.getHandler()
    );

    const guard = RoleAuthGuard.getAuthGuard(loginIn ? 'local' : 'jwt');
    return guard.canActivate(context);
  }

  private static getAuthGuard(mode: 'local' | 'jwt'): IAuthGuard {
    if (mode === 'local') {
      return new (AuthGuard('local'))();
    } else {
      return new (AuthGuard('jwt'))();
    }
  }
}
