import { connectDB } from "../../../utils/database.ts";
import ListItem from "./ListItem.tsx";

export default async function List() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="bg-customBlue p-2.5">
      <ListItem result={result}></ListItem>
    </div>
  );
}
