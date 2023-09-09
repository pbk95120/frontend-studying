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
      </form>
    </div>
  );
}