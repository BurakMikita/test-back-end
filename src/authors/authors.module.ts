import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { AppModule } from 'src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './shema/authors.schema';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
   imports: [
	  MongooseModule.forFeature([	{ name: Author.name, schema: AuthorSchema },]), 
	],
})
export class AuthorsModule {}
