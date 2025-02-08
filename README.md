# API Documentation

## 🚀 Running the Application with Docker
To avoid downloading MongoDB locally, you can run the application via Docker with the following command:

```bash
docker-compose up
📌 API Endpoints
1️⃣ Filter by Book Title
Method: GET
URL:
bash
Копировать
Редактировать
http://localhost:3000/books/?title=string
Description: Filters books by title.
2️⃣ Filter by Nationality
Method: GET
URL:
bash
Копировать
Редактировать
http://localhost:3000/authors/?nationality=string
Description: Filters authors by nationality.
3️⃣ Sorting Books
Method: GET
URL:
bash
Копировать
Редактировать
http://localhost:3000/books/?sortBy=price_asc
Description: Sorts books by different parameters:
price_asc — Sort by price ascending.
price_desc — Sort by price descending.
stock_asc — Sort by stock ascending.
stock_desc — Sort by stock descending.
4️⃣ Pagination
Pagination is enabled by default for authors and books, but you can also customize it in the request.

Method: GET
URL:
bash
Копировать
Редактировать
http://localhost:3000/authors?page=2&limit=10
5️⃣ User Registration & Authentication
Without registration, you cannot access the list of users at:

Method: GET
URL:
bash
Копировать
Редактировать
http://localhost:3000/auth/users
🔹 Register a User
Method: POST
URL:
bash
Копировать
Редактировать
http://localhost:3000/auth/register
Request Body (Example):
json
Копировать
Редактировать
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
🔹 Login a User
Method: POST
URL:
bash
Копировать
Редактировать
http://localhost:3000/auth/login
Request Body (Example):
json
Копировать
Редактировать
{
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
After logging in, you will receive a token. With this token, you can access the user list.

🔹 Get Users (Requires Authorization)
Method: GET
URL:
bash
Копировать
Редактировать
http://localhost:3000/auth/users
Authorization: Add the token to the request headers:
bash
Копировать
Редактировать
Authorization: Bearer <your_token>
