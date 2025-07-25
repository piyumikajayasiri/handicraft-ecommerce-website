import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  //when protecting the routes we need the role
  role: { type: String, default: "user" },
  image: { type: String },
  //coming from the auth providers like github and google
  authProviderId: { type: String },
});
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
