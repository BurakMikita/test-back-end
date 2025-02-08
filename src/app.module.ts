

import {Module, OnModuleInit} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';
import { AddressModule } from './address/address.module';
import { Book, BookSchema } from "./books/shema/books.schema";
import { Author, AuthorSchema } from "./authors/shema/authors.schema";
import { User, UserSchema } from "./users/shema/users.schema";
import { Address, AddressSchema } from "./address/shema/address.schema";
import { SeederService } from "./seeder/seeder.service";


@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
		MongooseModule.forRoot('mongodb://mongodb:27017/your-database-name'),
		 MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Address.name, schema: AddressSchema },
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
    ]),
        FileModule,
        BooksModule,
        AuthorsModule,
        UsersModule,
        AddressModule,
        
    ],
	
	providers: [SeederService],
	
})
export class AppModule implements OnModuleInit {
	constructor(private readonly seederService: SeederService) {}
  
	// Автоматический запуск seeder при старте приложения
	async onModuleInit() {
	  //await this.seederService.run();
	}
  }