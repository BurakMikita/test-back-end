## Running the Application via Docker

To avoid installing MongoDB locally, you can run the application via Docker using the command:

```sh
docker-compose up
```

## API Endpoints

### 1. Filter by Book Title
```http
GET http://localhost:3000/books/?title=string
```

### 2. Filter by Author's Nationality
```http
GET http://localhost:3000/authors/?nationality=string
```

### 3. Sorting Books

| Parameter    | Description                      |
|-------------|----------------------------------|
| price_asc   | Sort by price (ascending)       |
| price_desc  | Sort by price (descending)      |
| stock_asc   | Sort by stock (ascending)       |
| stock_desc  | Sort by stock (descending)      |

Example request:
```http
GET http://localhost:3000/books/?sortBy=price_asc
```

### 4. Pagination

Pagination is enabled by default for authors and books, but you can also specify it manually:
```http
GET http://localhost:3000/authors?page=2&limit=10
```

### 5. Registration and Authentication

#### Retrieve User List (Registered Users Only)
```http
GET http://localhost:3000/auth/users
```

#### User Registration
```http
POST http://localhost:3000/auth/register
```

Example request body:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

#### User Login
```http
POST http://localhost:3000/auth/login
```

Example request body:
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

Upon successful login, you will receive a **token**. This token must be added to the headers when making requests to protected endpoints.

#### Access User List with Token
```http
GET http://localhost:3000/auth/users
```

**Important:** The token must be included in the request headers:
```http
Authorization: Bearer YOUR_TOKEN_HERE
```
