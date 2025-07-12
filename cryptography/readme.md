# Cryptography

This folder contains resources, code samples, and a mini project related to cryptography in Node.js.

## What is Cryptography?

Cryptography is the practice of securing information by transforming it into a format that is unreadable for unauthorized users. It ensures data confidentiality, integrity, and authenticity.

## Key Concepts

### Encryption and Decryption

- **Encryption**: The process of converting plain text into ciphertext using an algorithm and a key. Only authorized parties can decrypt and access the original data.
- **Decryption**: The reverse process of encryption, converting ciphertext back to readable plain text using the appropriate key.

### Keys in Cryptography

- **Private Key**: A secret key used in asymmetric cryptography. It must be kept confidential and is used to decrypt data encrypted with the corresponding public key or to sign data.
- **Public Key**: A key that can be shared openly. It is used to encrypt data or verify signatures created with the private key.

### Types of Cryptography

- **Symmetric Cryptography**: Uses the same key for both encryption and decryption (e.g., AES).
- **Asymmetric Cryptography**: Uses a pair of keys (public and private) for encryption and decryption (e.g., RSA, ECC).

## Mini Project: Secure Message Exchange

This folder includes a mini project demonstrating secure message exchange using Node.js. The project covers:

- Generating public and private key pairs
- Encrypting a message with a public key
- Decrypting the message with a private key
- Signing a message and verifying its signature

You can explore the `mini-project` subfolder for the complete source code and step-by-step instructions.

## Important Code Examples

### Generate RSA Key Pair

```js
const { generateKeyPairSync } = require('crypto');

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
});
```

### Encrypt and Decrypt a Message

```js
const { publicEncrypt, privateDecrypt } = require('crypto');

const encrypted = publicEncrypt(publicKey, Buffer.from('Secret message'));
const decrypted = privateDecrypt(privateKey, encrypted);

console.log(decrypted.toString()); // 'Secret message'
```

### Sign and Verify a Message

```js
const { sign, verify } = require('crypto');

const data = 'Important data';
const signature = sign('sha256', Buffer.from(data), privateKey);

const isVerified = verify('sha256', Buffer.from(data), publicKey, signature);
console.log(isVerified); // true
```

## Common Use Cases

- Securing sensitive data
- Authenticating users and systems
- Ensuring data integrity
- Digital signatures

## Example Libraries

- [crypto](https://nodejs.org/api/crypto.html) (built-in Node.js module)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (for password hashing)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (for JWTs)

---

Explore the code samples and the mini project in this folder to learn more about implementing cryptography in Node.js.