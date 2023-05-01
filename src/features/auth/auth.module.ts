import { Module, Provider, Type } from '@nestjs/common';
import { NaverModule } from '@features/auth/naver/naver.module';
import { GoogleModule } from '@features/auth/google/google.module';
import { KakaoModule } from '@features/auth/kakao/kakao.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from '@root/config/env.config';
import { JwtStrategy } from '@features/auth/standard/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

function modules(): Type[] {
  return [GoogleModule, KakaoModule, NaverModule];
}

function services(): Provider[] {
  return [JwtStrategy];
}

@Module({
  imports: [
    ...modules(),

    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: env.token.secret,
      signOptions: { expiresIn: env.token.expire.default },
    }),
  ],
  providers: [...services()],
  exports: [...services()],
})
export class AuthModule {}
