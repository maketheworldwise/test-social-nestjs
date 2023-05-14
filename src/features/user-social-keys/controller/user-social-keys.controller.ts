import { Controller, Get, Query } from '@nestjs/common';
import { UserSocialKeysService } from '@features/user-social-keys/service/user-social-keys.service';
import { ProviderType } from '@features/user-social-keys/entity/user-social-keys.entity';

@Controller('keys')
export class UserSocialKeysController {
  constructor(private readonly service: UserSocialKeysService) {}

  @Get('naver')
  async getSocialKeys(@Query('userId') userId: number) {
    return await this.service.findByUserIdAndProvider(
      userId,
      ProviderType.NAVER,
    );
  }
}
