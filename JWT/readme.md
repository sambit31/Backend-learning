# JWT Mini Project

This project demonstrates how to implement JSON Web Token (JWT) authentication in a Node.js application.

## Features

- User registration and login
- JWT-based authentication
- Protected routes


## What is JWT?

JWT (JSON Web Token) is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in web applications.

A JWT consists of three parts separated by dots (`.`):
1. **Header**: Contains metadata about the token, such as the signing algorithm.
2. **Payload**: Contains the claims or data you want to transmit (e.g., user ID).
3. **Signature**: Used to verify that the token was not altered.

Example JWT structure:
```
xxxxx.yyyyy.zzzzz
```

JWTs are signed using a secret or a public/private key pair. In this project, JWTs are used to authenticate users and protect API routes.


```
jwt/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   └── authRoutes.js
├── .env
├── app.js
├── package.json
└── readme.md
```

## Installation

1. Clone the repository:
    ```bash
    git clone <repo-url>
    cd jwt
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file:
    ```
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongodb_uri
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. Use Postman or similar tool to test the endpoints.

## API Endpoints

### Register

- **POST** `/api/register`
- Body:
  ```json
  {
     "username": "yourname",
     "password": "yourpassword"
  }
  ```

### Login

- **POST** `/api/login`
- Body:
  ```json
  {
     "username": "yourname",
     "password": "yourpassword"
  }
  ```
- Returns: JWT token

### Protected Route

- **GET** `/api/protected`
- Header: `Authorization: Bearer <token>`

## Example Code Snippets

**Generating JWT:**
```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
```

**Verifying JWT Middleware:**
```js
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
     if (err) return res.sendStatus(403);
     req.user = user;
     next();
  });
};
```

## License

MIT
