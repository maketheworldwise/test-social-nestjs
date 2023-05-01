import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NaverUser } from '@features/auth/decorator/current-user.decorator';

@Controller('auth/naver')
@UseGuards(AuthGuard('naver'))
export class NaverController {
  @Get()
  async signIn(@NaverUser() user: any) {
    console.log(user);
    return user;
  }
}
