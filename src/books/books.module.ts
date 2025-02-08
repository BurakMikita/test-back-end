import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './shema/books.schema';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
	
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]), 
  ],
})
export class BooksModule {}
