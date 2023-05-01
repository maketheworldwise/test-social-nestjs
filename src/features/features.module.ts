import { Module, Type } from '@nestjs/common';
import { UsersModule } from '@features/users/users.module';
import { AuthModule } from '@features/auth/auth.module';

function modules(): Type[] {
  return [UsersModule, AuthModule];
}

@Module({
  imports: [...modules()],
})
export class FeaturesModule {}
