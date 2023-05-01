import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from '@features/users/service/users.service';
import { UsersEntity } from '@features/users/entity/users.entity';
import { UserCreateDto } from '@features/users/dto/user-create.dto';
import { UserReadDto } from '@features/users/dto/user-read.dto';
import { UserUpdateDto } from '@features/users/dto/user-update.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: UserCreateDto): Promise<UserReadDto> {
    return await this.usersService.create(UsersEntity.from(dto));
  }

  @Get('/:id')
  async read(@Param('id', ParseIntPipe) id: number): Promise<UserReadDto> {
    return await this.usersService.read(id);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() { name: name }: UserUpdateDto,
  ): Promise<string> {
    await this.usersService.update(id, name);
    return 'ok';
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.usersService.delete(id);
    return 'ok';
  }
}
