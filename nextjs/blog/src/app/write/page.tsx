"use client";

export default function Write() {
  return (
    <div className="bg-customBlue p-4">
      <h4 className="text-l p-2.5">글작성 페이지</h4>
      <form action="/api/createPost" method="POST">
        <input
          name="title"
          placeholder="글제목"
          className="p-2.5 block mb-2.5 box-border"
        ></input>
        <input
          name="content"
          placeholder="글내용"
          className="p-2.5 block mb-2.5 box-border"
        ></input>
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            if (e.target.files && e.target.files.length > 0) {
              let file = e.target.files[0];
              let filename = encodeURIComponent(file.name);
              let res = await fetch("api/postImage?file=" + filename);
              res = await res.json();
              console.log(res);
            }
          }}
        ></input>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
