import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserSocialKeysEntity } from '@features/user-social-keys/entity/user-social-keys.entity';

@Index('idx_email', ['email'])
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: false,
    onUpdate: 'CURRENT_TIMESTAMP',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => UserSocialKeysEntity, (entity) => entity.user, {
    lazy: true,
  })
  socialKeys: UserSocialKeysEntity[];

  static from(dto: any): UsersEntity {
    const entity = new UsersEntity();
    entity.email = dto.email;
    entity.password = dto.password;
    entity.name = dto.name;
    entity.phone = dto.phone;
    return entity;
  }
}
