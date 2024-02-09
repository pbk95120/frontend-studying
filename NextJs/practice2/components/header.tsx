import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <main>
      <Image src={logo} alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
    </main>
  );
}
