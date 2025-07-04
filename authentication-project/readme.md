# Authentication Mini Projects

This repository contains several mini projects focused on implementing authentication in Node.js applications. Each project demonstrates different authentication strategies and best practices.

---

## 1. **Basic JWT Authentication API**

**Description:**  
A RESTful API using Node.js, Express, and MongoDB that implements user registration and login with JSON Web Tokens (JWT).

**Features:**
- User registration with hashed passwords (bcrypt)
- User login with JWT token generation
- Protected routes requiring valid JWT
- Token verification middleware

**Tech Stack:**  
Node.js, Express, MongoDB, Mongoose, bcrypt, jsonwebtoken

**How to Run:**
1. Clone the repo and install dependencies.
2. Set up a `.env` file with your MongoDB URI and JWT secret.
3. Run `npm start`.
4. Use Postman to test registration, login, and protected routes.

---

## 2. **Google OAuth2 Authentication**

**Description:**  
A Node.js app that allows users to log in using their Google account via OAuth2.

**Features:**
- Google OAuth2 login using Passport.js
- User profile creation on first login
- Session management with express-session
- Logout functionality

**Tech Stack:**  
Node.js, Express, Passport.js, MongoDB, Google OAuth2

**How to Run:**
1. Register your app with Google Developers Console to get client credentials.
2. Add credentials to `.env`.
3. Install dependencies and run the app.
4. Visit `/auth/google` to log in.

---

## 3. **Email Verification System**

**Description:**  
A user registration system where users must verify their email before accessing protected resources.

**Features:**
- Registration with email and password
- Sends verification email with unique token
- Email verification endpoint
- Login only after email is verified

**Tech Stack:**  
Node.js, Express, MongoDB, Nodemailer, JWT

**How to Run:**
1. Configure SMTP settings in `.env`.
2. Register a new user and check your email for the verification link.
3. Click the link to verify and then log in.

---

## 4. **Role-Based Access Control (RBAC)**

**Description:**  
An API demonstrating role-based permissions for different user types (e.g., admin, user).

**Features:**
- User roles assigned at registration or by admin
- Middleware to restrict access based on roles
- Example: Admin-only and user-only routes

**Tech Stack:**  
Node.js, Express, MongoDB, JWT

**How to Run:**
1. Register users with different roles.
2. Access routes with appropriate JWT and observe access control.

---

## 5. **Password Reset Functionality**

**Description:**  
A secure password reset workflow for users who forgot their password.

**Features:**
- Request password reset via email
- Generates and emails a secure reset token
- Reset password using the token
- Token expires after a set time

**Tech Stack:**  
Node.js, Express, MongoDB, Nodemailer, JWT

**How to Run:**
1. Request a password reset with your email.
2. Check your email for the reset link.
3. Submit a new password using the link.

---

## Getting Started

1. Clone this repository.
2. Navigate to each project folder for specific instructions.
3. Install dependencies: `npm install`
4. Set up environment variables as described in each project.
5. Run the project: `npm start`

---

## License

This repository is for educational purposes.
