import { UsersEntity } from '@features/users/entity/users.entity';

export class UserReadDto {
  constructor(entity: UsersEntity) {
    this.id = entity.id;
    this.email = entity.email;
    this.name = entity.name;
    this.phone = entity.phone;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }

  id: number;

  email: string;

  name: string;

  phone: string;

  createdAt: Date;

  updatedAt: Date;
}
