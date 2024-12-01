const express = require("express");
const userRoute = express.Router();
const {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getOneUser,
    signIn,
} = require("../Controllers/userController"); 

const isAuth = require("../middleware/isAuth"); 
const isAutho = require('../middleware/isAutho'); 

userRoute.get("/users", getUsers); // Get all users
userRoute.get("/users/:id", isAuth, isAutho(['user']), getOneUser); // Get one user by ID with auth checks
userRoute.post("/users", postUser); // Create a new user
userRoute.put("/users/:id", putUser); // Update a user by ID
userRoute.delete("/users/:id", isAuth, isAutho(['admin']), deleteUser); // Delete a user by ID with auth checks
userRoute.post("/signIn", signIn); // User sign-in

module.exports = userRoute; // Export the router