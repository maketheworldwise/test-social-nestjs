import { Controller, Get, UseGuards } from '@nestjs/common';
import { NaverUser } from '@features/auth/decorator/current-user.decorator';
import { NaverDynamicGuard } from '@features/auth/naver-dynamic/naver-dynamic.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/naver/dynamic')
@UseGuards(NaverDynamicGuard, AuthGuard('naver-dynamic'))
export class NaverDynamicController {
  @Get()
  async signInDynamic(@NaverUser() user: any) {
    console.log(user);
    return user;
  }
}
