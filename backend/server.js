const dotenv = require("dotenv");
const express = require("express");
const userRoute = require("./routes/userRoute");
const connectDb=require('./config/connectDb')
var cors = require('cors')
const app = express();

dotenv.config();
const port = process.env.PORT;
connectDb();
app.use(cors())
app.listen(port, (er) => {
    if (er) {
    console.log(er);
    } else {
    console.log(`server is running on port ${port}`);
    }
    });
    app.use(express.json())
    app.use("/api", userRoute);