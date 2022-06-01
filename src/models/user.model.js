const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {

    name:{type: String, required: true, unique: true},
    email:{type:String, requires:true, unique:true},
    password:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true,
}
);


const User = mongoose.model("user", userSchema);

userSchema.pre("save", ()=>{
    
})

module.exports = User;