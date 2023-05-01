import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-naver';
import { env } from '@root/config/env.config';

export class NaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      clientID: env.social.naver.clientId,
      clientSecret: env.social.naver.clientSecret,
      callbackURL: env.social.naver.callbackURL,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { email, nickname, profile_image, age, birthday, id } = profile._json;
    return { email, nickname };
  }
}

/*
{
  "provider": "naver",
  "id": "",
  "displayName": "",
  "emails": [
    {
      "value": ""
    }
  ],
  "_json": {
    "email": "",
    "nickname": "",
    "profile_image": "",
    "age": "",
    "birthday": "",
    "id": ""
  }
}
 */
