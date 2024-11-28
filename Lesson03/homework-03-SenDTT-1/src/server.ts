import mongoose from "mongoose";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import runTestCases from "./test";
const env = dotenv.config();
dotenvExpand.expand(env);

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_CONNECTION_URI as string;
    console.log(dbURI);
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

runTestCases(connectDB).catch((error) =>
  console.error("Error running tests:", error)
);

// runPostTests(connectDB).catch((error) =>
//   console.error("Error running tests:", error)
// );
