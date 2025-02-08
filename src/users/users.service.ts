import { Injectable, UnauthorizedException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

import { User, UserDocument } from './shema/users.schema';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as jwt from 'jsonwebtoken';  


@Injectable()
export class UsersService {
	
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async findOne(email: any) {
		const user = await this.userModel.findOne({ email });
	
		if (!user) {
		  throw new Error('Invalid email or password');
		}
		return user
	}


	async getAllusers(){
		const users = await this.userModel.find({});
		return users
	}

	async register(createUserDto: CreateUserDto): Promise<User> {
		const { email, password, ...rest } = createUserDto;
	  
		const existingUser = await this.userModel.findOne({ email });
		if (existingUser) {
		  throw new UnauthorizedException('A user with this email already exists');
		}
	  
		const hashedPassword = await bcrypt.hash(password, 10);
	  
		const user = new this.userModel({
		  ...rest,
		  email,
		  password: hashedPassword,
		});
	  
		return user.save();
	  }
	
	  async login(loginUserDto: LoginUserDto): Promise<any> {
		const { email, password } = loginUserDto;
		const user = await this.userModel.findOne({ email });
	
		if (!user) {
		  throw new Error('Invalid email or password');
		}
	
		const isPasswordValid = await bcrypt.compare(password, user.password);
	
		if (!isPasswordValid) {
		  throw new Error('Invalid email or password');
		}
	        console.log(process.env.JWT_SECRET_KEY)
		const payload = { email: user.email, sub: user._id };
		const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
	
		return { token };
	  }
}
