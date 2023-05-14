import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GlobalException } from '@root/exception/global.exception';
import { UserSocialKeysService } from '@features/user-social-keys/service/user-social-keys.service';
import { NaverDynamicStrategy } from '@features/auth/naver-dynamic/naver-dynamic.strategy';
import { ProviderType } from '@features/user-social-keys/entity/user-social-keys.entity';

@Injectable()
export class NaverDynamicGuard implements CanActivate {
  constructor(private readonly service: UserSocialKeysService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    /*
     로그인 전: http://127.0.0.1:8080/auth/naver/dynamic?userId={{userId}}
     로그인 후: http://127.0.0.1:8080/auth/naver/dynamic?userId={{userId}}&code=
              -> callbackURL의 경우 userId를 뒤에 붙여서 DB에 저장
     */
    const request = context.switchToHttp().getRequest();
    const query = request.query;
    const userId = query.userId;

    if (!userId) {
      throw GlobalException.create('BAD_REQUEST');
    }

    const isNaverLogined = !!query.code;
    if (isNaverLogined) {
      return true;
    }

    const { clientId, clientSecret, callbackURL } =
      await this.service.findByUserIdAndProvider(userId, ProviderType.NAVER);

    new NaverDynamicStrategy(clientId, clientSecret, callbackURL);
    return true;
  }
}
