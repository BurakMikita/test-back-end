import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './shema/books.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(bookData: Partial<Book>) {
    const newBook = new this.bookModel(bookData);
    return newBook.save();
  }

 


  async getBooks({
    title,
    sortBy,
    page,
    limit , 
  }: {
    title?: string;
    sortBy?: string;
    page?: number;
    limit?: number;
  }){
    const query: any = {};

    if (title) {
      const regex = new RegExp(title, 'i');
      query.title = { $regex: regex }; 
    }

    const sortQuery: any = {};

    if (sortBy === 'price_asc') {
      sortQuery.price = 1;
    } else if (sortBy === 'price_desc') {
      sortQuery.price = -1; 
    } else if (sortBy === 'stock_asc') {
      sortQuery.stock = 1;
    } else if (sortBy === 'stock_desc') {
      sortQuery.stock = -1;
    }

	const skip = (page - 1) * limit;

	const total = await this.bookModel.countDocuments(query).exec();

    const books = await this.bookModel
      .find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(limit)
      .exec();

    return { books, total };
  }
}