import { Module, Provider, Type } from '@nestjs/common';
import { AppController } from '@root/app.controller';
import { DatabaseModule } from '@database/database.module';
import { FeaturesModule } from '@features/features.module';

function modules(): Type[] {
  return [DatabaseModule, FeaturesModule];
}

function controllers(): Type[] {
  return [AppController];
}

function services(): Provider[] {
  return [];
}

@Module({
  imports: [...modules()],
  controllers: [...controllers()],
  providers: [...services()],
  exports: [...services()],
})
export class AppModule {}
