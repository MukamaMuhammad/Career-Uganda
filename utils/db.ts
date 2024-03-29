import mongoose from "mongoose";

const connectToDB = async () => {
  const mongodbUrl = process.env.MONGODB_URL;

  if (!mongodbUrl) {
    // Check if it's undefined
    console.error("MONGODB_URL is not defined in the environment variables.");
    throw new Error("Database connection failed!");
  }

  try {
    await mongoose.connect(mongodbUrl);
  } catch (error) {
    console.log(error);
    console.error("Connection failed:", error);
    throw new Error("Database connection failed!");
  }
};

export default connectToDB;
