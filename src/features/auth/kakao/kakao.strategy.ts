import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { env } from '@root/config/env.config';

export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: env.social.kakao.clientId,
      clientSecret: env.social.kakao.clientSecret,
      callbackURL: env.social.kakao.callbackURL,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const {
      profile: { nickname },
      email,
    } = profile._json.kakao_account;
    return { nickname, email };
  }
}

/*
{
  "provider": "kakao",
  "id": 123,
  "username": "",
  "displayName": "",
  "_raw": "{\"id\":123,\"connected_at\":\"2021-01-01T00:00:00Z\",\"properties\":{\"nickname\":\"\"},\"kakao_account\":{\"profile_nickname_needs_agreement\":false,\"profile\":{\"nickname\":\"\"},\"has_email\":true,\"email_needs_agreement\":false,\"is_email_valid\":true,\"is_email_verified\":true,\"email\":\"@kakao.com\",\"has_age_range\":true,\"age_range_needs_agreement\":false,\"age_range\":\"20~29\",\"has_birthday\":true,\"birthday_needs_agreement\":false,\"birthday\":\"0101\",\"birthday_type\":\"SOLAR\",\"has_gender\":true,\"gender_needs_agreement\":false,\"gender\":\"male\"}}",
  "_json": {
    "id": 123,
    "connected_at": "2021-01-01T00:00:00Z",
    "properties": {
      "nickname": ""
    },
    "kakao_account": {
      "profile_nickname_needs_agreement": false,
      "profile": {
        "nickname": ""
      },
      "has_email": true,
      "email_needs_agreement": false,
      "is_email_valid": true,
      "is_email_verified": true,
      "email": "@kakao.com",
      "has_age_range": true,
      "age_range_needs_agreement": false,
      "age_range": "20~29",
      "has_birthday": true,
      "birthday_needs_agreement": false,
      "birthday": "0101",
      "birthday_type": "SOLAR",
      "has_gender": true,
      "gender_needs_agreement": false,
      "gender": "male"
    }
  }
}
*/
