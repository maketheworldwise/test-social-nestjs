import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const NaverUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
