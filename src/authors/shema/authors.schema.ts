import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthorDocument = Document & Author;

@Schema()
export class Author {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  nationality: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);