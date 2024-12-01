const User = require('../models/User'); // Adjust the path according to your structure
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Get one user by ID
exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Create a new user
exports.postUser = async (req, res) => {
    const { userName, email, age, password } = req.body;
    try {
        const newUser = new User({ userName, email, age, password }); // Ensure password is hashed before saving
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Update a user by ID
exports.putUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Sign in function
exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ msg: "User not registered" });
        }
        
        // Compare password (make sure to hash passwords when saving)
        if (password === foundUser.password) { // Replace with bcrypt.compare for security
            const token = jwt.sign(
                { id: foundUser._id, role: foundUser.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' } // Set token expiration
            );
            return res.status(200).json({ user: foundUser, token });
        } else {
            return res.status(400).json({ msg: "Wrong password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server error" });
    }
};