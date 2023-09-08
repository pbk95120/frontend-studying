"use client";

import Image from "next/image";
import food0 from "../../../public/images/food0.png";
import food1 from "../../../public/images/food1.png";
import food2 from "../../../public/images/food2.png";
import { useState } from "react";

export default function ListItem() {
  const product = ["Tamatoes", "Pasta", "Coconut"];
  let foodImages = [food0, food1, food2];
  let [num, setNum] = useState([0, 0, 0]);

  return (
    <>
      {product.map((product, i) => (
        <div
          key={i}
          className="m-auto my-3 w-52 bg-white text-black p-1.5 rounded-md"
        >
          <Image
            src={foodImages[i]}
            alt="에러"
            width={300}
            height={300}
          ></Image>
          <h3 className="text-center">{product} $40</h3>
          <div className="text-center flex justify-around">
            <button
              className="text-rose-600"
              onClick={() => {
                let copy = [...num];
                copy[i] -= 1;
                setNum(copy);
              }}
            >
              -
            </button>
            <span>{num[i]}</span>
            <button
              className="text-rose-600"
              onClick={() => {
                let copy = [...num];
                copy[i] += 1;
                setNum(copy);
              }}
            >
              +
            </button>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white p-2 rounded-md">
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
