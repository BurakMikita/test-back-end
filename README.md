# API Documentation

## Docker
To avoid downloading MongoDB locally, you can open the application via Docker with the following command:

```bash
docker-compose up
Endpoints
1. Filter by Book Title
Method: GET
URL: http://localhost:3000/books/?title=string
Description: Filters books by title.
2. Filter by Nationality
Method: GET
URL: http://localhost:3000/authors/?nationality=string
Description: Filters authors by nationality.
3. Sorting Books
Method: GET
URL: http://localhost:3000/books/?sortBy=price_asc
Description: Sorts books by various parameters.
Sort Options:
price_asc: Sort by price ascending.
price_desc: Sort by price descending.
stock_asc: Sort by stock ascending.
stock_desc: Sort by stock descending.
4. Pagination
Method: GET
URL: http://localhost:3000/authors?page=2&limit=10
Description: Default pagination for authors and books. You can manually adjust page and limit.
5. User Registration and Authentication
Register:

Method: POST
URL: http://localhost:3000/auth/register
Request Body:
json
Копировать
Редактировать
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
Login:

Method: POST
URL: http://localhost:3000/auth/login
Request Body:
json
Копировать
Редактировать
{
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
Description: Logs in a user and returns a token.
Get Users:

Method: GET
URL: http://localhost:3000/auth/users
Description: Gets the list of users. Requires authentication with the token.
Authorization:
Add token to Authorization header:
bash
Копировать
Редактировать
Authorization: Bearer <your_token>
