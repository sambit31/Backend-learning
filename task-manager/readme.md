# Task Manager

A simple Node.js mini project for managing tasks.

## Features

- Add, update, and delete tasks
- Mark tasks as completed
- List all tasks
- Persistent storage using a database (e.g., MongoDB)

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- RESTful API

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd task-manager
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file with your MongoDB connection string.

4. **Run the server:**
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint        | Description           |
|--------|----------------|-----------------------|
| GET    | /tasks         | List all tasks        |
| POST   | /tasks         | Create a new task     |
| PATCH  | /tasks/:id     | Update a task         |
| DELETE | /tasks/:id     | Delete a task         |

## License

This project is licensed under the MIT License.