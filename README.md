## Запуск приложения через Docker

Чтобы избежать локальной установки MongoDB, можно запустить приложение через Docker с помощью команды:

```sh
docker-compose up
```

## API Эндпоинты

### 1. Фильтрация по названию книги
```http
GET http://localhost:3000/books/?title=string
```

### 2. Фильтрация по национальности автора
```http
GET http://localhost:3000/authors/?nationality=string
```

### 3. Сортировка книг

| Параметр    | Описание                      |
|------------|--------------------------------|
| price_asc  | Сортировка по цене (возрастание)  |
| price_desc | Сортировка по цене (убывание)    |
| stock_asc  | Сортировка по наличию (возрастание) |
| stock_desc | Сортировка по наличию (убывание)   |

Пример запроса:
```http
GET http://localhost:3000/books/?sortBy=price_asc
```

### 4. Пагинация

По умолчанию пагинация включена для авторов и книг, но можно управлять ею вручную:
```http
GET http://localhost:3000/authors?page=2&limit=10
```

### 5. Регистрация и аутентификация

#### Получение списка пользователей (только для зарегистрированных)
```http
GET http://localhost:3000/auth/users
```

#### Регистрация пользователя
```http
POST http://localhost:3000/auth/register
```

Пример тела запроса:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

#### Вход в систему
```http
POST http://localhost:3000/auth/login
```

Пример тела запроса:
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

После успешного входа в систему вы получите **токен**. Этот токен необходимо добавить в заголовки при запросе к защищённым эндпоинтам.

#### Доступ к списку пользователей с токеном
```http
GET http://localhost:3000/auth/users
```

**Важно:** Токен необходимо добавить в заголовки запроса:
```http
Authorization: Bearer YOUR_TOKEN_HERE
