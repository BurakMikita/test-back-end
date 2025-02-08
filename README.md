
to avoid downloading mongoDB locally, you can open the application via docker with the command

# docker-compose up

## Api

# 1. filter by book title
GET http://localhost:3000/books/?title=string


# 2.  filter by nationality
GET http://localhost:3000/authors/?nationality=string

3. 
price_asc — sort by price ascending.
price_desc — sort by price descending.
stock_asc — sort by stock ascending.
stock_desc — sort by stock descending.

GET http://localhost:3000/books/?sortBy=price_asc

# 4. Pagination is done by default for authors and books but you can also add it in the request

GET http://localhost:3000/authors?page=2&limit=10

# 5.There is also registration and without registration you will not be able to see all users at this link

GET http://localhost:3000/auth/users

You can register using this API

POST http://localhost:3000/auth/register


you definitely need to add it to your body 
example
``` {
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
} ```

and to enter

 POST http://localhost:3000/auth/login

you definitely need to add it to your body 
example
``` {
  "email": "johndoe@example.com",
  "password": "securepassword123"
} ```

after which you will receive a token and with this token you can follow the link

GET http://localhost:3000/auth/users

but the token will definitely need to be added to the authorization!!!
