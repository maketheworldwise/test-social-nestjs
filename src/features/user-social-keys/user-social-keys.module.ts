import { Module, Provider, Type } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSocialKeysEntity } from '@features/user-social-keys/entity/user-social-keys.entity';
import { UserSocialKeysController } from './controller/user-social-keys.controller';
import { UserSocialKeysService } from './service/user-social-keys.service';
import { UsersEntity } from '@features/users/entity/users.entity';

function modules(): Type[] {
  return [];
}

function controllers(): Type[] {
  return [UserSocialKeysController];
}

function services(): Provider[] {
  return [UserSocialKeysService];
}

@Module({
  imports: [
    ...modules(),
    TypeOrmModule.forFeature([UsersEntity, UserSocialKeysEntity]),
  ],
  controllers: [...controllers()],
  providers: [...services()],
  exports: [...services()],
})
export class UserSocialKeysModule {}
