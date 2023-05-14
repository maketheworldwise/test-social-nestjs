import { Injectable } from '@nestjs/common';
import {
  ProviderType,
  UserSocialKeysEntity,
} from '@features/user-social-keys/entity/user-social-keys.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '@features/users/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSocialKeysService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    @InjectRepository(UserSocialKeysEntity)
    private repository: Repository<UserSocialKeysEntity>,
  ) {}

  async findByUserIdAndProvider(userId: number, provider: ProviderType) {
    const user = await this.usersRepository.findOneBy({ id: userId });
    // user.socialKeys.map((key) => key.provider === ProviderType.NAVER);
    return await this.repository.findOneBy({ user, provider });
  }
}
