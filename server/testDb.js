// Run: npm run test-db
// It connects, adds one test user, reads it, then deletes it.
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import User from "./models/User.js";

await connectDB();

const user = await User.create({
  name: "Test User",
  email: "test@example.com",
  password: "not-a-real-password",
});
console.log("Saved:", user.email);

const found = await User.findOne({ email: "test@example.com" });
console.log("Found:", found.name);

await User.deleteOne({ _id: user._id });
console.log("Deleted test user. Database works!");

await mongoose.disconnect();
