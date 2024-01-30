import { MongoClient } from "mongodb";
// Connect MongoDB
const url =
  "mongodb+srv://admin:admin@cluster0.scqwt57.mongodb.net/?retryWrites=true&w=majority";

// 환경변수 설정하지 않으면 에러 발생
if (!url) {
  throw new Error("The MONGODB_URL environment variable is not defined");
}
let connectDB: Promise<MongoClient>;
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
