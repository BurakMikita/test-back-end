import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './shema/authors.schema';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {}

  async findAuthors(nationality?: string, page: number = 1, limit: number = 10) {
    const query: any = {}; 

    
    if (nationality) {
      const regex = new RegExp(nationality, 'i'); 
      query.nationality = { $regex: regex }; 
    }

    const skip = (page - 1) * limit; 

    
    const authors = await this.authorModel
      .find(query)
      .skip(skip) 
      .limit(limit) 
      .exec();

    
    const totalAuthors = await this.authorModel.countDocuments(query).exec();

    return {
      authors, 
      totalAuthors, 
    };
  }
}
