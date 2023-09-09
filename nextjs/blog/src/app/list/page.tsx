"use clinet";

import { connectDB } from "../../../utils/database.ts";
import Link from "next/link";

export default async function List() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  const handleDeleteClick = (i: number) => {
    fetch("/api/deletePost", {
      method: "DELETE",
      body: JSON.stringify(result[i]._id),
    });
  };

  return (
    <div className="bg-customBlue p-2.5">
      {result.map((a, i) => (
        <div key={i} className="bg-white p-5 mb-1.5 rounded-lg shadow-xl">
          <Link href={`/detail/${i}`}>
            <h4 className="text-xl font-extrabold m-0">{a.title}</h4>
          </Link>
          <p className="my-1.5">{a.content}</p>
          <button type="submit" className="bg-grey-300 rounded-md p-2.5">
            삭제버튼
          </button>
        </div>
      ))}
    </div>
  );
}
