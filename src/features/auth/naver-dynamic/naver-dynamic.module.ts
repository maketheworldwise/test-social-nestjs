import { Module, Provider, Type } from '@nestjs/common';
import { NaverDynamicController } from './naver-dynamic.controller';
import { UserSocialKeysModule } from '@features/user-social-keys/user-social-keys.module';

function controllers(): Type[] {
  return [NaverDynamicController];
}

function services(): Provider[] {
  return [];
}

@Module({
  imports: [UserSocialKeysModule],
  controllers: [...controllers()],
  providers: [...services()],
})
export class NaverDynamicModule {}
