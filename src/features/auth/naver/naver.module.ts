import { Module, Provider, Type } from '@nestjs/common';
import { NaverController } from '@features/auth/naver/naver.controller';
import { NaverStrategy } from '@features/auth/naver/naver.strategy';

function controllers(): Type[] {
  return [NaverController];
}

function services(): Provider[] {
  return [NaverStrategy];
}

@Module({
  controllers: [...controllers()],
  providers: [...services()],
})
export class NaverModule {}
