import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

 

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsDate()
  publishedDate?: Date;

  @IsOptional()
  @IsNumber()
  stock?: number;
}