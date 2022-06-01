const User = require("../models/user.model")

const register = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email}).lean().exec();

        if(user)
        return res.status(400).send({message: "Please try another email"})

        user = await User.create(req.body);

        res.send(user)
    } catch (error) {
       res.status(500).send.log(error)
    }
}


const login = async (req, res) => {
    try {
       res.send(login);
    } catch (error) {
       res.status(500).send.log(error)
    }
}


module.exports = {register, login}