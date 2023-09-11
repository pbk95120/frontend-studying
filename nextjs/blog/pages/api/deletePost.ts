import { connectDB } from "../../utils/database";
import { ObjectId } from "mongodb";

export default async function Createpost(req: any, res: any) {
  if (req.method === "DELETE") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
    return res.status(200).json({ Messag: "삭제완료" });
  }
}
