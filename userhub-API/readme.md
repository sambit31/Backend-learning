# UserHub API

A lightweight RESTful API for user management built with Node.js, Express, and MongoDB using Mongoose ODM. This project demonstrates complete CRUD operations with a clean, modular architecture.

## 🚀 Features

- **Complete CRUD Operations**: Create, Read, Update, and Delete users
- **MongoDB Integration**: Seamless database operations with Mongoose ODM
- **RESTful API Design**: Well-structured endpoints following REST principles
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Modular Architecture**: Clean separation of concerns with organized file structure
- **JSON Responses**: Consistent JSON response format for all endpoints
- **Input Validation**: Built-in Mongoose schema validation

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd userhub-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure your MongoDB service is running on your local machine or update the connection string in `config/db.js`.

4. **Run the application**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Verify installation**
   Open your browser and navigate to `http://localhost:8080` to see the welcome message.

## 📁 Project Structure

```
userhub-api/
├── config/
│   └── db.js              # Database connection configuration
├── models/
│   └── user.models.js     # User schema and model definition
├── routes/
│   └── user.routes.js     # User API routes and controllers
├── index.js               # Application entry point
├── package.json           # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🗄️ Database Schema

The User model includes the following fields:

```javascript
{
  name: {
    type: String,
    required: true,
    maxLength: 50
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    optional: true
  },
  createdate: {
    type: Date,
    default: Date.now
  }
}
```

## 🔌 API Endpoints

### Base URL: `http://localhost:8080/api`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/users` | Get all users | None |
| POST | `/users` | Create a new user | `{ "name": "string", "age": number, "weight": number }` |
| PUT | `/update-user/:id` | Update user by ID | `{ "name": "string", "age": number, "weight": number }` |
| DELETE | `/delete-user/:id` | Delete user by ID | None |

### API Examples

#### 1. Get All Users
```bash
curl -X GET http://localhost:8080/api/users
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
      "name": "John Doe",
      "age": 25,
      "weight": 70,
      "createdate": "2024-01-15T10:30:00.000Z"
    }
  ],
  "message": "data accessed"
}
```

#### 2. Create New User
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Smith", "age": 28, "weight": 65}'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e9",
    "name": "Jane Smith",
    "age": 28,
    "weight": 65,
    "createdate": "2024-01-15T10:35:00.000Z"
  },
  "message": "new user created"
}
```

#### 3. Update User
```bash
curl -X PUT http://localhost:8080/api/update-user/64a7b8c9d1e2f3a4b5c6d7e8 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated", "age": 26, "weight": 72}'
```

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "name": "John Updated",
    "age": 26,
    "weight": 72,
    "createdate": "2024-01-15T10:30:00.000Z"
  }
}
```

#### 4. Delete User
```bash
curl -X DELETE http://localhost:8080/api/delete-user/64a7b8c9d1e2f3a4b5c6d7e8
```

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "name": "John Updated",
    "age": 26,
    "weight": 72,
    "createdate": "2024-01-15T10:30:00.000Z"
  }
}
```

## 🛡️ Error Handling

The API provides consistent error responses:

```json
{
  "success": false,
  "message": "Error description here"
}
```

Common HTTP status codes used:
- `200` - Success (GET, PUT, DELETE)
- `201` - Created (POST)
- `404` - Not Found
- `500` - Internal Server Error

## 🔧 Configuration

### Database Configuration
Update the MongoDB connection string in `config/db.js`:

```javascript
const connect = await mongoose.connect("mongodb://localhost:27017/products")
```

For production, consider using environment variables:

```javascript
const connect = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/products")
```

### Environment Variables
Create a `.env` file in the root directory:

```env
PORT=8080
MONGODB_URI=mongodb://localhost:27017/products
NODE_ENV=development
```

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## 🧪 Testing

You can test the API using:

- **Postman**: Import the endpoints and test manually
- **curl**: Use the command-line examples provided above
- **Thunder Client**: VS Code extension for API testing
- **Insomnia**: Desktop API client

## 📚 Dependencies

### Production Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB ODM for Node.js

### Development Dependencies
- **nodemon**: Auto-restart server during development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.


## 👨‍💻 Author

Created with ❤️ for learning and practicing Node.js, Express, and MongoDB.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Provide code examples and error messages

---

**Happy Coding! 🚀**