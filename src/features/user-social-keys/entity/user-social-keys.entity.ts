import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '@features/users/entity/users.entity';

export enum ProviderType {
  NAVER = 'naver',
  KAKAO = 'kakao',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}

@Index('idx_user_provider_key', ['user', 'provider'])
@Entity('user_social_keys')
export class UserSocialKeysEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (entity) => entity.socialKeys, {
    createForeignKeyConstraints: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @Column({
    name: 'provider',
    type: 'enum',
    enum: [
      ProviderType.NAVER,
      ProviderType.KAKAO,
      ProviderType.GOOGLE,
      ProviderType.FACEBOOK,
      ProviderType.APPLE,
    ],
    nullable: false,
  })
  provider: ProviderType;

  @Column({ name: 'client_id' })
  clientId: string;

  @Column({ name: 'client_secret' })
  clientSecret: string;

  @Column({ name: 'callback_url' })
  callbackURL: string;

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
}
