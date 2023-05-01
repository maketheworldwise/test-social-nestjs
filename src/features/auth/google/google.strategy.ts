import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super();
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    return profile;
  }
}
