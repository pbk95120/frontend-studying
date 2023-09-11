"use client";

import Link from "next/link";

export default function ListItem({ result }: any) {
  const handleDeleteClick = (i: number) => {
    fetch("/api/deletePost", {
      method: "DELETE",
      body: result[i]._id,
    });
  };

  return (
    <>
      {result.map((a: any, i: number) => (
        <div key={i} className="bg-white p-5 mb-1.5 rounded-lg shadow-xl">
          <Link href={`/detail/${i}`}>
            <h4 className="text-xl font-extrabold m-0">{a.title}</h4>
          </Link>
          <p className="my-1.5">{a.content}</p>
          <button
            className="bg-grey-300 rounded-md p-2.5"
            onClick={() => {
              handleDeleteClick(i);
            }}
          >
            🗑️
          </button>
        </div>
      ))}
    </>
  );
}
