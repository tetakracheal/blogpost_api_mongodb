import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: { type: String, required: [true, " email required"] },
    password: { type: String, required: [true, " password required"] },
    gender: { type: String, enum: ["male", "female"] },
    role: { type: String, enum: ["user", " admin"], required: [true, "Role is required"], default: "user" },
    department: String,
    address: { type: String, default: "Rwanda" },
});
const userInfo= mongoose.model('user',userSchema);

export default userInfo;