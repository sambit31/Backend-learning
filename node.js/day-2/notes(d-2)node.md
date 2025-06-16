

### 📄 `http-server.md`


# 🌐 Simple HTTP Server using Node.js

This is a basic example of an HTTP server using Node.js core modules `http` and `fs`.



## 📁 Files Used

- `server.js` → The main server code.
- `log.txt` → A file where each request is logged.



## 🧠 Modules Used

- `http`: To create the server and handle incoming requests.
- `fs`: To append request logs into a file.

---

````markdown


## 📜 Code

```js
const http = require("http");
const fs = require("fs");
const PORT = 8080;

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: & from ${req.url} NEW REQUEST RECEIVED`;

    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            console.error("error writing", err);
            res.statusCode = 500;
            res.end("internal server error");
            return;
        } else {
            res.end("hello world from server");
        }
    });
});

server.listen(PORT, () => {
    console.log(`server is connected at ${PORT}`);
});
````

---

## ⚙️ How It Works

1. The server listens on port `8080`.
2. For every new request:

   * A log line with timestamp and URL is created.
   * This log is appended to `log.txt`.
   * The server responds with `"hello world from server"` if successful.
   * If there's an error writing to the file, it sends a 500 error response.

---

## 🧪 To Run the Server

```bash
node server.js
```

Then open a browser or use curl:

```bash
curl http://localhost:8080/
```

---

## 📂 Output

* Server logs to console:

  ```
  server is connected at 8080
  ```

* Creates or updates a `log.txt` file like:

  ```
  1718282734882: & from / NEW REQUEST RECEIVED
  ```

---

## ✅ Good Practices

* Use `fs.appendFile` to avoid overwriting logs.
* Always handle errors (e.g., file system failure).
* Use timestamps to track request history.

---

## 🔄 Optional Improvements

* Format the timestamp (use `new Date().toISOString()`).
* Log HTTP method (`req.method`) and headers.
* Create a new log file per day.

---

Happy Coding! 🚀

```
