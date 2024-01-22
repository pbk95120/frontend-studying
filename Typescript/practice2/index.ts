let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let school: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];

const getName = (name?: string): string => {
  if (name) {
    return name;
  } else {
    return "no Name";
  }
};

const getLength = (idx: string | number): number => {
  return idx.toString().length;
};

const isMarry = (money: number, house: boolean, charm: string): string | void => {
  let total: number = 0;
  total += money;
  house ? (total += 500) : null;
  charm === "상" ? (total += 100) : null;

  if (total >= 600) {
    return "OK";
  }
};

const cleaning = (x: (string | number)[]): number[] => {
  return x.map(Number);
};

const subject = (x: { subject: string | string[] }): string => {
  if (typeof x.subject === "string") {
    return x.subject;
  } else {
    return x.subject[x.subject.length - 1];
  }
};

type Obj = { x: string };
type Obj2 = { x: string };
type Obj3 = Obj2 & Obj;
let test: Obj3 = { x: "a" };

type Multi = { color?: string; size: number; readonly position: number[] };
type Multi2 = { name: string; phone: number; email: string; adult: boolean };

type User = { name: string; age: number; plusOne: (x: number) => number; changeName: () => void };
type CutZero = (x: string) => string;
const cutZero: CutZero = (x) => {
  return x.replace(/^0+/, "");
};

type removeDash = (x: string) => number;
const removeDash: removeDash = (x) => {
  return Number(x.replace(/-/g, ""));
};

type HardFunc = (phoneNumber: string, cutZero: CutZero, removeDash: removeDash) => void;

const hardFunc: HardFunc = (phoneNumber, CutZero, removeDash) => {
  const result = CutZero(phoneNumber);
  const result2 = removeDash(result);
  console.log(result2);
};

// let image = document.querySelector("#image");
// if (image instanceof HTMLImageElement) {
//   image.src = "https://picsum.photos/200/300";
// }

// let link = document.querySelectorAll(".naver");
// link.forEach((a) => {
//   if (a instanceof HTMLAnchorElement) {
//     a.href = "https://kakao.com";
//   }
// });

class Car {
  carName: string;
  carPrice: number;
  constructor(carName: string, carPrice: number) {
    this.carName = carName;
    this.carPrice = carPrice;
  }

  tax(): number {
    return this.carPrice * 0.1;
  }
}

class Word {
  num: number[];
  str: string[];
  constructor(...param: (number | string)[]) {
    const numbers: number[] = [];
    const strings: string[] = [];
    param.forEach((x) => {
      if (typeof x === "number") {
        numbers.push(x);
      } else {
        strings.push(x);
      }
    });
    this.num = numbers;
    this.str = strings;
  }
}

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

interface Person {
  student: boolean;
  age: number;
}

const getMax = (...n: number[]) => {
  const result = n.sort((a, b) => b - a);
  return result[0];
};

interface Objtest {
  user: string;
  comment: number[];
  admin: boolean;
}

const obj4 = ({ user, comment, admin }: Objtest): void => {
  console.log({ user, comment, admin });
};

console.log(obj4({ user: "kim", comment: [3, 5, 4], admin: false }));
