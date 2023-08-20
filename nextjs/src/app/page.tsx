import Link from "next/link";

export default function Home() {
  const name = "park";
  return (
    <div>
      <h1 className="bg-red-500 text-center">Fresh apple</h1>
      <p className="text-center">by dev {name}</p>
    </div>
  );
}
