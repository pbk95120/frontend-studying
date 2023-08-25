import { connectDB } from "../../utils/database.ts";

export default async function List(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  return res.status(200).json(result);
}
