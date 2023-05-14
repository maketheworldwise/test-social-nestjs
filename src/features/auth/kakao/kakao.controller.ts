import { Controller, Get, UseGuards } from '@nestjs/common';
import { KakaoUser } from '@features/auth/decorator/current-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/kakao')
@UseGuards(AuthGuard('kakao'))
export class KakaoController {
  @Get()
  async signIn(@KakaoUser() user: any) {
    console.log(user);
    return user;
  }
}
