import { Controller, Get,  Query } from '@nestjs/common';
import { AuthorsService } from './authors.service';


@Controller('authors')
export class AuthorsController {
	constructor(private readonly authorsService: AuthorsService) { }

	@Get()
	async searchBooksByNationality(
		@Query('nationality') nationality: string,
		@Query('page') page: number = 1,
		@Query('limit') limit: number = 5,
		) {
		return this.authorsService.findAuthors(nationality, page,limit );
	}
}
