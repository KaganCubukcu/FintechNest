import { IsString, IsEmail, IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsDate()
  @IsNotEmpty()
  lastLogin: Date;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

