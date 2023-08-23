import { connectDB } from "../../utils/database.ts";

export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return <main>{result[0].title}</main>;
}
