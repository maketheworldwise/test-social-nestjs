import { Module, Provider, Type } from '@nestjs/common';
import { KakaoController } from './kakao.controller';
import { KakaoStrategy } from '@features/auth/kakao/kakao.strategy';

function controllers(): Type[] {
  return [KakaoController];
}

function services(): Provider[] {
  return [KakaoStrategy];
}

@Module({
  controllers: [...controllers()],
  providers: [...services()],
})
export class KakaoModule {}
