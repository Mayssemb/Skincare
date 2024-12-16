const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Adjust the path as necessary
require('dotenv').config();

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Create a new user
const postUser = async (req, res) => {
    const { email, password, role } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required" });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
            role: role || 'user', // Default role to 'user' if not specified
        });

        await newUser.save();
        res.status(201).json({ msg: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Update user details
const putUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Get one user by ID
const getOneUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Sign in a user
const signIn = async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required" });
    }

    try {
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            return res.status(400).json({ msg: "User not registered" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, foundUser.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Wrong password" });
        }

        // Create JWT token with expiration
        const token = jwt.sign(
            { id: foundUser._id, role: foundUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        res.status(200).json({ user: foundUser, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Exporting all functions
module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getOneUser,
    signIn,
};
