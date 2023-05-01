import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '@features/users/entity/users.entity';
import { Repository } from 'typeorm';
import { UserReadDto } from '@features/users/dto/user-read.dto';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  @Transactional()
  async create(entity: UsersEntity): Promise<UserReadDto> {
    return await this.usersRepository
      .save(entity)
      .then((res) => new UserReadDto(res));
  }

  async read(id: number): Promise<UserReadDto> {
    return await this.usersRepository
      .findOneBy({ id })
      .then((res) => new UserReadDto(res));
  }

  @Transactional()
  async update(id: number, name: string) {
    await this.usersRepository.update(id, {
      name: name,
    });
  }

  @Transactional()
  async delete(id: number) {
    await this.usersRepository.delete(id);
  }
}
