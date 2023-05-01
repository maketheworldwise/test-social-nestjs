import { Module, Provider, Type } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@features/users/entity/users.entity';
import { UsersController } from '@features/users/controller/users.controller';
import { UsersService } from '@features/users/service/users.service';

function controllers(): Type[] {
  return [UsersController];
}

function services(): Provider[] {
  return [UsersService];
}

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [...controllers()],
  providers: [...services()],
  exports: [...services()],
})
export class UsersModule {}
