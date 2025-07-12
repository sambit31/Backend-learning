import express from "express";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Generate RSA key pair (2048-bit)
const generateKeys = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "pkcs1", 
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs1", // or 'pkcs8'
            format: "pem"
        }
    });
    return { publicKey, privateKey };
};

// Encrypt message with RSA using OAEP + SHA-256
const encrypt = (publicKey, message) => {
    const encrypted = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256"
        },
        Buffer.from(message)
    );
    return encrypted.toString("base64");
};

// Decrypt message with RSA using OAEP + SHA-256
const decrypt = (privateKey, encryptedMessage) => {
    const decrypted = crypto.privateDecrypt(
        {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256"
        },
        Buffer.from(encryptedMessage, "base64")
    );
    return decrypted.toString("utf-8");
};

// Generate keys once on server startup
const { publicKey, privateKey } = generateKeys();

// Routes
app.get("/", (req, res) => {
    res.send("🔐 RSA Encryption/Decryption API is running.");
});

app.post("/encrypt", (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ error: "Message is required" });

        const encryptedData = encrypt(publicKey, message);
        res.json({ encryptedData });
    } catch (err) {
        res.status(500).json({ error: "Encryption failed", details: err.message });
    }
});

app.post("/decrypt", (req, res) => {
    try {
        const { encryptedMessage } = req.body;
        if (!encryptedMessage) return res.status(400).json({ error: "Encrypted message is required" });

        const decrypted = decrypt(privateKey, encryptedMessage);
        res.json({ decrypted });
    } catch (err) {
        res.status(500).json({ error: "Decryption failed", details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
