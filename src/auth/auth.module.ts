import { Module } from '@nestjs/common';
import { NaverModule } from './naver/naver.module';
import { GoogleModule } from './google/google.module';
import { KakaoModule } from './kakao/kakao.module';

function modules() {
  return [NaverModule, GoogleModule, KakaoModule];
}

@Module({
  imports: [...modules()],
})
export class AuthModule {}
