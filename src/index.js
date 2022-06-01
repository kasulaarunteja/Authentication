const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const {register, login } = require("./controllers/auth.controller")


const app = express();
app.use(express.json());

app.post("./register" , register);

app.post("/login", login);


app.use("/user", userController);




app.listen(2223, async () => {
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("Listening on port 2223");
})