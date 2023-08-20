import message from "./data";

export default function Cart() {
  return (
    <div>
      <h1 className="mt-20 text-center"> {message}</h1>
      <h1 className="mt-20 text-center">Cart</h1>
      <CartItem />
      <CartItem />
    </div>
  );
}

const CartItem = () => {
  return (
    <div className="p-2.5 max-w-4xl m-auto flex justify-around border-b-2 border-b-stone-600">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};
