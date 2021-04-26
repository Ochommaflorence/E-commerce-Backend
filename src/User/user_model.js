import { Schema, model } from "mongoose";

const userSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  
  location: {
    type: String,
    required: true,
  }
  
});

const UserModel = model("Users", userSchema);

export default UserModel;
