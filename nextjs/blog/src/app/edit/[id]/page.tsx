import { connectDB } from "../../../../utils/database";
import { ObjectId } from "mongodb";
export default async function Edit(props: any) {
  const db = (await connectDB).db("forum");
  let result: any = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="bg-customBlue p-4">
      <h4 className="text-l p-2.5">글 수정 페이지</h4>
      <form action="/api/editPost" method="POST">
        <input
          name="title"
          defaultValue={result.title}
          className="p-2.5 block mb-2.5 box-border"
        ></input>
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
          className="p-2.5 block mb-2.5 box-border"
        ></input>
        <button type="submit" className="bg-grey-300 rounded-md p-2.5">
          버튼
        </button>
      </form>
    </div>
  );
}
