const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1]; // Assuming Bearer token
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add decoded token (user info) to request object
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ msg: "Token expired" });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ msg: "Invalid token" });
        } else {
            console.error(error); // Log the error for debugging
            return res.status(500).json({ msg: "Server error" });
        }
    }
};

module.exports = isAuth;