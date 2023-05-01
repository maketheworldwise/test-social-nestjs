import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ExecutionContext } from '@nestjs/common';
import { GlobalException } from '@root/exception/global.exception';
import { env } from '@root/config/env.config';

export class JwtGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;
    if (authorization) {
      throw GlobalException.create('HEADER_ERROR');
    }

    const token = authorization.replace('Bearer ', '');
    request.tokenUser = this.validateToken(token);

    return true;
  }

  validateToken(token: string) {
    try {
      const verify = this.jwtService.verify(token, {
        secret: env.token.secret,
      });
      return verify;
    } catch (e) {
      switch (e.message) {
        case 'INVALID_TOKEN':
        case 'TOKEN_IS_ARRAY':
        case 'NO_USER':
        case 'EXPIRED_TOKEN':
          throw GlobalException.create('INVALID_JWT');
        default:
          throw GlobalException.create('INTERNAL_SERVER_ERROR');
      }
    }
  }
}
