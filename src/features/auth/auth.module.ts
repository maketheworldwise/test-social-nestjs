import { Module, Type } from '@nestjs/common';
import { NaverModule } from '@features/auth/naver/naver.module';
import { GoogleModule } from '@features/auth/google/google.module';
import { KakaoModule } from '@features/auth/kakao/kakao.module';

function modules(): Type[] {
  return [NaverModule, GoogleModule, KakaoModule];
}

@Module({
  imports: [...modules()],
})
export class AuthModule {}
