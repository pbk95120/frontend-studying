import { connectDB } from "../../utils/database";

export default async function Createpost(req: any, res: any) {
  if (req.method === "POST") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).json({ Messag: "저장완료" });
  }
}
