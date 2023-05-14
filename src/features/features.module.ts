import { Module, Type } from '@nestjs/common';
import { UsersModule } from '@features/users/users.module';
import { UserSocialKeysModule } from './user-social-keys/user-social-keys.module';
import { AuthModule } from '@features/auth/auth.module';

function modules(): Type[] {
  return [UsersModule, UserSocialKeysModule, AuthModule];
}

@Module({
  imports: [...modules()],
})
export class FeaturesModule {}
