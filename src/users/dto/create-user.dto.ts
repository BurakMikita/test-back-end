import { IsString, IsNotEmpty, IsEmail, IsOptional, IsMongoId } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsOptional()
  @IsMongoId()
  readonly addressId?: string; 

  @IsOptional()
  readonly createdAt?: Date; 
}