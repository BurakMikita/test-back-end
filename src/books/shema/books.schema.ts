import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Author } from 'src/authors/shema/authors.schema';

export type BookDocument = Document & Book;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  // Связь один ко многим с автором
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Author', required: true })
  authorId: Author;

  @Prop({ required: true })
  price: number;

  @Prop({ default: Date.now })
  publishedDate: Date;

  @Prop({ default: 0 })
  stock: number;
}




export const BookSchema = SchemaFactory.createForClass(Book);




