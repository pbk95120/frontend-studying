import { connectDB } from "../../utils/database";
import { ObjectId } from "mongodb";

export default async function EditPost(req: any, res: any) {
  if (req.method === "POST") {
    let change = { title: req.body.title, content: req.body.content };
    let db = (await connectDB).db("forum");
    let result = await await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: change });

    return res.status(200).json({ Messag: "저장완료" });
  }
}
