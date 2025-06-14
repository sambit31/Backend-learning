
# 📘 Node.js Day 1: File Operations and Basics

---

## ✅ 1. What is Node.js?
- Node.js is a runtime environment that allows you to run JavaScript outside the browser.
- Built on Google’s V8 engine (like Chrome) with C++ bindings.
- Used for building fast, scalable server-side apps.

---

## ✅ 2. `npm init`
- Initializes a new Node.js project and creates a `package.json` file.
```bash
npm init -y
```

---

## ✅ 3. Import and Export
Using CommonJS module system:
```js
// export
module.exports = myFunction;

// import
const myFunction = require('./myFile');
```

---

## ✅ 4. Modules in Node.js
- **Built-in modules**: `fs`, `http`, `os`, `path`, etc.
- **User-defined modules**: Your custom files
- **Third-party modules**: Installed via npm (e.g. express)

---

## ✅ 5. Sync vs Async
- **Sync (Blocking)**: Code execution waits for I/O to finish.
- **Async (Non-blocking)**: Uses callbacks, promises, or async/await to continue without waiting.

---

## ✅ 6. File Operations with `fs` Module

### ✏️ `fs.writeFile` – Write file (Async)
```js
fs.writeFile("file.txt", "Hello", (err) => {
  if (err) console.error(err);
});
```

### ✏️ `fs.writeFileSync` – Write file (Sync)
```js
fs.writeFileSync("file.txt", "Hello");
```

### 📖 `fs.readFile` – Read file (Async)
```js
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  console.log(data);
});
```

### 📖 `fs.readFileSync` – Read file (Sync)
```js
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);
```

### ➕ `fs.appendFile` – Append to file (Async)
```js
fs.appendFile("log.txt", "New line\n", (err) => {
  if (err) console.error(err);
});
```

### ➕ `fs.appendFileSync` – Append to file (Sync)
```js
fs.appendFileSync("log.txt", "New entry\n");
```

### ❌ `fs.unlinkSync` – Delete a file
```js
fs.unlinkSync("file.txt");
```

---

### 📊 Summary Table

| Function              | Description                   | Blocking? | Use Case                  |
|-----------------------|-------------------------------|-----------|---------------------------|
| `writeFile`           | Write new file (Async)        | ❌ No      | Save logs, data           |
| `writeFileSync`       | Write new file (Sync)         | ✅ Yes     | Setup scripts             |
| `readFile`            | Read file (Async)             | ❌ No      | API responses             |
| `readFileSync`        | Read file (Sync)              | ✅ Yes     | Configs, init read        |
| `appendFile`          | Add to file (Async)           | ❌ No      | Logging                   |
| `appendFileSync`      | Add to file (Sync)            | ✅ Yes     | Dev logs, fast notes      |
| `unlinkSync`          | Delete file (Sync)            | ✅ Yes     | Delete logs/temp files    |

---

## ✅ 7. Node.js Architecture
- Single-threaded event loop + thread pool (libuv).
- Non-blocking async model via callback/event queue.

---

## ✅ 8. HTTP Module
- Use `http.createServer()` to create backend server.
```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}\n`;
  fs.appendFile("log.txt", log, () => {});
  res.end("Hello from server");
});
```

---

## ✅ 9. Global Objects
- `__dirname`, `__filename`, `console`, `require`, `setTimeout`, `clearInterval`

---
