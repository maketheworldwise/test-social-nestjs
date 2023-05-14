import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-naver';

export class NaverDynamicStrategy extends PassportStrategy(
  Strategy,
  'naver-dynamic',
) {
  constructor(clientId, clientSecret, callbackURL) {
    super({
      clientID: clientId,
      clientSecret: clientSecret,
      callbackURL: callbackURL,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { email, nickname, profile_image, age, birthday, id } = profile._json;
    return { email, nickname };
  }
}
