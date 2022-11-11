import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

function connect() {
  const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/todo';

  return mongoose
    .connect(dbUri as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as Object)
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
      console.log("db error", error);
      process.exit(1);
    });
}

export default connect;