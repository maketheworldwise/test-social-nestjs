import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super();
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    return profile;
  }
}
