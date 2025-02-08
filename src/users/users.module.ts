import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AppModule } from 'src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './shema/users.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';


@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [
		ConfigModule.forRoot(), 

		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
			  secret: configService.get<string>('JWT_SECRET_KEY'), 
			  signOptions: { expiresIn: '1h' },
			}),
		  }),
	],

	exports: [UsersService],

})
export class UsersModule { }
