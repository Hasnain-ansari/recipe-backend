import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    savedRecipes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipes",
    }]
})

//the first arguement users is the name with which the model is gonna be created in the database collection and we are passing the schema
export const UserModel = mongoose.model("users", UserSchema);