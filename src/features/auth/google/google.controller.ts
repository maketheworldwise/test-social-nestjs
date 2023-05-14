import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleUser } from '@features/auth/decorator/current-user.decorator';

@Controller('auth/google')
@UseGuards(AuthGuard('google'))
export class GoogleController {
  @Get()
  async signIn(@GoogleUser() user: any) {
    console.log(user);
    return user;
  }
}
