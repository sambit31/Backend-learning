

## Overview
- Entry point for Day 4's Node.js/Express.js project.
- Handles server setup and routing.

## Key Concepts
- **Express App Initialization:**  
    ```js
    const express = require('express');
    const app = express();
    ```
- **Middleware Usage:**  
    - `express.json()` for parsing JSON bodies.
    - Custom middleware for logging or authentication (if present).

- **Routing:**  
    - Define routes using `app.get()`, `app.post()`, etc.
    - Example:
        ```js
        app.get('/', (req, res) => {
            res.send('Hello, World!');
        });
        ```

- **Server Listening:**  
    ```js
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    ```

## Additional Features (if present)
- Error handling middleware.
- Route modularization (using `require('./routes/xyz')`).
- Environment variable usage with `process.env`.

---

**Tip:**  
Check the file for specific routes and middleware to document further details.