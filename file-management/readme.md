# Express.js Mini Project

A simple Express.js project demonstrating public/private routes, authentication middleware, request logging, and token utilities.

## Project Structure

```
mini-project/
├── package.json
├── server.js
├── logs/
│   └── request.logs
├── middleware/
│   ├── auth.middleware.js
│   └── log.middleware.js
├── routes/
│   ├── private.routes.js
│   └── public.routes.js
└── utils/
    └── token.utils.js
```

## Features

- **Public Routes:** Accessible without authentication.
- **Private Routes:** Require a valid token in the `Authorization` header.
- **Authentication Middleware:** Checks for a valid token.
- **Logging Middleware:** Logs all incoming requests to `logs/request.logs`.
- **Token Utilities:** Generate and validate tokens.

## Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the server:**
   ```sh
   npm run dev
   ```
   The server runs on [http://localhost:8080](http://localhost:8080).

3. **Generate a Token:**
   - `GET /public/generate-token`
   - Response: `{ "message": "Token genarated", "token": "<token>" }`

4. **Access Private Route:**
   - `GET /private/dashboard`
   - Add header: `Authorization: <token>`
   - Response: `{ "message": "welcome to the dashboard sambit" }`

5. **Logs:**
   - All requests are logged in `logs/request.logs`.

## Example Requests

**Generate Token**
```sh
curl http://localhost:8080/public/generate-token
```

**Access Private Dashboard**
```sh
curl -H "Authorization: <token>" http://localhost:8080/private/dashboard
```



THANK YOU>>>
