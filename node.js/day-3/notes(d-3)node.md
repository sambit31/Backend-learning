
# Node.js Core Modules: `EventEmitter`, `path`, and `stream`

---

## 1. 📣 EventEmitter (`events` module)

### ✅ What is it?
- A built-in Node.js module to create, listen, and handle custom events.
- Node.js is event-driven; `EventEmitter` is the core of this design.

### 🔧 Use Cases:
- Server emits `request` events.
- Chat app emits `message` event.
- Upload progress emits `progress` event.

### 📦 Example:

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
  console.log('Hello from EventEmitter!');
});

myEmitter.emit('greet');
```

### 📌 Methods:

| Method                    | Description                          |
|---------------------------|--------------------------------------|
| `.on(event, callback)`    | Registers a listener                 |
| `.once(event, callback)`  | Listens only once                    |
| `.emit(event)`            | Fires the event                      |
| `.removeListener()`       | Removes a listener                   |

---

## 2. 📁 Path Module (`path`)

### ✅ What is it?
- A core module for working with file paths.
- Cross-platform compatible (Windows/Linux/macOS).

### 🧩 Use Cases:
- Joining paths, resolving absolute paths, getting filename or extensions.

### 📦 Example:

```js
const path = require('path');

console.log(path.join(__dirname, 'folder', 'file.txt')); // platform-safe path
console.log(path.basename('/home/user/index.js'));       // index.js
console.log(path.extname('index.html'));                 // .html
```

### 📌 Methods:

| Method            | Description                                |
|-------------------|--------------------------------------------|
| `path.join()`     | Joins path segments                        |
| `path.resolve()`  | Resolves absolute path                     |
| `path.basename()` | Gets filename from path                    |
| `path.dirname()`  | Gets directory from path                   |
| `path.extname()`  | Gets file extension                        |
| `path.parse()`    | Returns object with root, dir, base, etc.  |

---

## 3. 🔁 Stream Module (`stream`)

### ✅ What is it?
- Enables handling of data **piece by piece (chunked)** instead of loading all at once.
- Very useful for large files or real-time data transfer.

### 🧩 Use Cases:
- Reading/writing large files.
- Streaming audio/video.
- Real-time data processing.

### 📦 Types of Streams:

| Type     | Description                            | Example              |
|----------|----------------------------------------|----------------------|
| Readable | Reads data                             | `fs.createReadStream()` |
| Writable | Writes data                            | `fs.createWriteStream()` |
| Duplex   | Both read and write                    | `net.Socket`         |
| Transform| Modifies data while streaming          | Compression, etc.    |

### 📦 Example:

```js
const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream); // Stream data from input to output
```

### 📌 Events:

| Event     | Description                          |
|-----------|--------------------------------------|
| `data`    | Data is available                    |
| `end`     | End of readable stream               |
| `error`   | Error occurred                       |
| `finish`  | Finished writing (Writable stream)   |

---

## 🔁 Summary Table

| Module         | Purpose                          | Example Use                              |
|----------------|----------------------------------|-------------------------------------------|
| `EventEmitter` | Event handling                   | `myEmitter.emit("start")`                 |
| `path`         | File system path manipulation    | `path.join(__dirname, 'file.txt')`        |
| `stream`       | Chunked data handling            | `readStream.pipe(writeStream)`            |

---

## 🧠 Real-Life Analogy

| Concept        | Analogy                               |
|----------------|----------------------------------------|
| EventEmitter   | Light switch (fires `on` event)        |
| Path           | Google Maps path to a file             |
| Stream         | Water pipe (data flows in chunks)      |
