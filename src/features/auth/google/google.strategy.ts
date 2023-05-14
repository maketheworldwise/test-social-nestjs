import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { env } from '@root/config/env.config';

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: env.social.google.clientId,
      clientSecret: env.social.google.clientSecret,
      callbackURL: env.social.google.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { name, email } = profile._json;
    return { name, email };
  }
}

/*
{
  "id": "123",
  "displayName": "",
  "name": {
    "familyName": "",
    "givenName": ""
  },
  "emails": [
    {
    "value": "@gmail.com",
    "verified": true
    }
  ],
  "photos": [
    {
    "value": ""
    }
  ],
  "provider": "google",
  "_raw": "{\n  \"sub\": \"123\",\n  \"name\": \"\",\n  \"given_name\": \"\",\n  \"family_name\": \"\",\n  \"picture\": \"\",\n  \"email\": \"@gmail.com\",\n  \"email_verified\": true,\n  \"locale\": \"ko\"\n}",
  "_json": {
    "sub": "123",
    "name": "",
    "given_name": "",
    "family_name": "",
    "picture": "",
    "email": "@gmail.com",
    "email_verified": true,
    "locale": "ko"
  }
}
*/
