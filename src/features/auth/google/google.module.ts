import { Module, Provider, Type } from '@nestjs/common';
import { GoogleStrategy } from '@features/auth/google/google.strategy';
import { GoogleController } from './google.controller';

function controllers(): Type[] {
  return [GoogleController];
}

function services(): Provider[] {
  return [GoogleStrategy];
}

@Module({
  controllers: [...controllers()],
  providers: [...services()],
})
export class GoogleModule {}
