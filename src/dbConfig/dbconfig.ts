import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export async function connect() {
  try {
    mongoose.connect("mongodb+srv://Shubh:12345@cluster1.jqjvz1t.mongodb.net/");
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDb connection error", err);
    });
  } catch (error) {
    console.log("Something gone wrong", error);
  }
}
