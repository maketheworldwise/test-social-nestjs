import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
