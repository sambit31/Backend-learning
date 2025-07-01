import express from "express";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser)
            return res.status(400).json({ message: "Username already exists" });

        const existingEmail = await User.findOne({ email });
        if (existingEmail)
            return res.status(400).json({ message: "Email already registered" });

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// LOGIN with email
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ message: "User not found" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid email or password" });

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                username: user.username,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || "24h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
