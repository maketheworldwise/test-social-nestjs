import { Module, Provider } from '@nestjs/common';
import { AppController } from '@root/app.controller';
import { UsersModule } from '@root/users/users.module';
import { AuthModule } from '@root/auth/auth.module';

function modules(): any[] {
  return [UsersModule, AuthModule];
}

function controllers(): any[] {
  return [AppController];
}

function services(): Provider[] {
  return [];
}

@Module({
  imports: [...modules()],
  controllers: [...controllers()],
  providers: [...services()],
})
export class AppModule {}
