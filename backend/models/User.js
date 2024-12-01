const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true, // Trim whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        lowercase: true, // Convert to lowercase for uniformity
        trim: true, // Trim whitespace
    },
    age: {
        type: Number, // Use Number type for age
        required: true,
        min: 0, // Ensure age is not negative
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for passwords
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Allowed roles
        default: 'user', // Default role
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the user model
module.exports = mongoose.model('User', userSchema); // Use capital 'User' for model name convention