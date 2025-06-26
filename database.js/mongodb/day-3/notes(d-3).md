



### 📄 `mongodb_shell_cheatsheet.md`


# MongoDB Shell Cheatsheet (Correct Commands Only)

This guide includes **valid MongoDB Shell (`mongosh`) commands** for interacting with databases and collections.



## 🗂️ List Databases and Collections

```js
show databases         // Show all available databases
use shop               // Switch to the "shop" database
show collections       // Show all collections in current database
````

---

## 📄 Read Data from Collections

### 🔍 Find All Documents

```js
db.products.find()
```

---

### 📌 Projection (Show Specific Fields)

```js
db.products.find({}, { title: 1, type: 1, price: 1 })
```

This shows only `title`, `type`, and `price` fields (plus `_id` by default).

---

### 🆔 Remove \_id from Results

```js
db.products.find({}, { title: 1, type: 1, price: 1, _id: 0 })
```

---

### ❎ Exclude a Field

```js
db.products.find({}, { description: 0 })
```

This will return all fields **except** `description`.

---

## 🔎 Filtered Queries (Conditions)

### Items with type "fruit"

```js
db.products.find({ type: "fruit" })
```

### Items with price less than 20

```js
db.products.find({ price: { $lt: 20 } })
```

### Items with rating 5 and only show title

```js
db.products.find({ rating: 5 }, { title: 1, _id: 0 })
```

---

## 🎯 Find One Document

```js
db.products.findOne()
```

---

## 📌 Summary Table

| Use Case                    | Command Example                            |
| --------------------------- | ------------------------------------------ |
| Show databases              | `show databases`                           |
| Use a specific database     | `use shop`                                 |
| Show all collections        | `show collections`                         |
| Find all documents          | `db.products.find()`                       |
| Find with condition         | `db.products.find({ price: { $lt: 20 } })` |
| Include fields (projection) | `db.products.find({}, { title: 1 })`       |
| Exclude a field             | `db.products.find({}, { _id: 0 })`         |
| Find one document           | `db.products.findOne()`                    |

---

## ✅ Tips

* **Projections** must use `1` (include) or `0` (exclude), not any other number.
* **Case-sensitive**: `findOne()` not `findone()`.
* You cannot mix `1` and `0` together in projections (except `_id`).

---


