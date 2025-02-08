import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs';


import { faker } from '@faker-js/faker';

import { User } from 'src/users/shema/users.schema';
import { Address } from 'src/address/shema/address.schema';
import { Book } from 'src/books/shema/books.schema';
import { Author } from 'src/authors/shema/authors.schema';

@Injectable()
export class SeederService {
	constructor(
		@InjectModel(User.name) private userModel: Model<User>,
		@InjectModel(Address.name) private addressModel: Model<Address>,
		@InjectModel(Book.name) private bookModel: Model<Book>,
		@InjectModel(Author.name) private authorModel: Model<Author>,
	) { }

	
	async cleanDatabase() {
		await this.userModel.deleteMany({});
		await this.addressModel.deleteMany({});
		await this.bookModel.deleteMany({});
		await this.authorModel.deleteMany({});
		console.log('Database cleared!');
	}

	async seed() {
		for (let i = 0; i < 1000; i++) {
			const address = new this.addressModel({
				street: faker.address.streetAddress(),
				city: faker.address.city(),
				zipCode: faker.address.zipCode(),
			});
			await address.save();


			const password = faker.internet.password();  
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = new this.userModel({
				firstname: faker.internet.username(),
				lastname: faker.internet.username(),
				email: faker.internet.email(),
				password: hashedPassword,
				addressId: address._id,  
				createdAt: faker.date.past(),
			});
			await user.save();


			const author = new this.authorModel({
				firstname: faker.name.firstName(),
				lastname: faker.name.lastName(),
				nationality: faker.address.country(),
			});
			await author.save();


			const book = new this.bookModel({
				title: faker.commerce.productName(),
				authorId: author._id,
				price: parseFloat(faker.commerce.price()),
				publishedDate: faker.date.past(),
				stock: faker.number.int({ max: 100 })
			});
			await book.save();
		}

		console.log('Seeding completed!');
	}


	async run() {
		await this.cleanDatabase();
		await this.seed();
	}
}
