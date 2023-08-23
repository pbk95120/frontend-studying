import { connectDB } from "../../../../utils/database.ts";

export default async function Detail(props: number) {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(props);
  return (
    <div className="bg-customBlue p-2.5">
      {result.map((a, i) => (
        <div key={i} className="bg-white p-5 mb-1.5 rounded-lg shadow-xl">
          <h4 className="text-xl font-extrabold m-0">{a.title}</h4>
          <p className="my-1.5">{a.content}</p>
        </div>
      ))}
    </div>
  );
}
