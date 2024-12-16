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

// Ensure that all imported handlers are functions
if (typeof getUsers !== 'function' || 
    typeof postUser !== 'function' || 
    typeof putUser !== 'function' || 
    typeof deleteUser !== 'function' || 
    typeof getOneUser !== 'function' || 
    typeof signIn !== 'function') {
        throw new TypeError('One or more imported handlers are not functions');
}

// Define routes
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", isAuth, isAutho(['user']), getOneUser);
userRoute.post("/users", postUser);
userRoute.put("/users/:id", putUser);
userRoute.delete("/users/:id", isAuth, isAutho(['admin']), deleteUser);
userRoute.post("/signIn", signIn);

module.exports = userRoute;