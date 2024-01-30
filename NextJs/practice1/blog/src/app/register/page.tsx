export default function Register() {
  return (
    <div className="bg-customBlue p-4">
      <h4 className="text-l p-2.5">글작성 페이지</h4>
      <form action="/api/register" method="POST">
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
        <button type="submit" className="bg-grey-300 rounded-md p-2.5">
          버튼
        </button>
      </form>
    </div>
  );
}
