import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email Already exist!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-z0-9._]+(?<![_.])$/,
            "username invalid,it should contain 8-20 alphanumeric letters!"]
    },
    image: {
        type: String,
    }
})
const User = models.User || model("User", UserSchema);

export default User;