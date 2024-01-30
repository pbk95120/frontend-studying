import { connectDB } from "../../utils/database.ts";
import Link from "next/link";
import LoginBtn from "../components/LoginBtn.tsx";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth].ts";
import DarkMode from "@/components/DarkMode.tsx";
import { cookies } from "next/headers";
export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  let session = await getServerSession(authOptions);
  console.log(session);
  let mode: any = cookies().get("mode");

  return (
    <main
      className={
        mode != undefined && mode.value == "dark"
          ? "bg-black text-white h-screen"
          : ""
      }
    >
      <div className="flex ...">
        <div className="flex-1">
          <Link href="/" className="logo">
            Home
          </Link>
        </div>
        <div className="flex-1">
          <Link href="/list">List</Link>
        </div>
        <div className="flex-1">
          <LoginBtn></LoginBtn>
        </div>
        <div className="flex-1">
          <DarkMode></DarkMode>
        </div>
      </div>
    </main>
  );
}
