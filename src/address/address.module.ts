import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AppModule } from 'src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from './shema/address.schema';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  imports: [
	  MongooseModule.forFeature([	{ name: Address.name, schema: AddressSchema },]), 
	],
})
export class AddressModule {}
