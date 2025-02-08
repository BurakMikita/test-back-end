import { Controller, Get, Post, Body,  Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './shema/books.schema';
import { CreateBookDto } from './dto/create-book.dto';


;


@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UsePipes(new ValidationPipe({ whitelist: true }))  
  @Post()
  async create(@Body() bookData: CreateBookDto): Promise<Book> {
    return this.booksService.create(bookData);
  }


  @Get()
  async findBooks(
    @Query('title') title: string, 
    @Query('sortBy') sortBy: string, 
	@Query('page') page: number = 1, 
    @Query('limit') limit: number = 5, 
  ) {
    return this.booksService.getBooks({ title, sortBy, page, limit });
  }
}