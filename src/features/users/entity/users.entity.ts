import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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

  static from(dto: any): UsersEntity {
    const entity = new UsersEntity();
    entity.email = dto.email;
    entity.password = dto.password;
    entity.name = dto.name;
    entity.phone = dto.phone;
    return entity;
  }
}
