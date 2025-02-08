import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from 'src/guard/JwtAuthGuard';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async registers(@Body() createUserDto: CreateUserDto) {
 
  }


   @Post('register')
   @UsePipes(new ValidationPipe({ transform: true })) 
   async register(@Body() createUserDto: CreateUserDto) {

	
	 return this.usersService.register(createUserDto);
   }
   
   @Get('users')
   @UseGuards(JwtAuthGuard) // Применяем Guard
   getUserInfo() {
	return this.usersService.getAllusers()
   }

   @Post('login')
   @UsePipes(new ValidationPipe({ transform: true })) 
   async login(@Body() loginUserDto: LoginUserDto) {
	 return this.usersService.login(loginUserDto);
   }

 
}
