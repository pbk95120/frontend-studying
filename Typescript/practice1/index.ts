import NameSpace from "./types";

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
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

const isMarry = (
  money: number,
  house: boolean,
  charm: string
): string | void => {
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

type Users = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};
type CutZero = (x: string) => string;
const cutZero: CutZero = (x) => {
  return x.replace(/^0+/, "");
};

type removeDash = (x: string) => number;
const removeDash: removeDash = (x) => {
  return Number(x.replace(/-/g, ""));
};

type HardFunc = (
  phoneNumber: string,
  cutZero: CutZero,
  removeDash: removeDash
) => void;

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
class User {
  private static x = 10;
  public static y = 20;

  static addOne = (n: number) => {
    User.x += n;
  };
  static printX = () => {
    console.log(User.x);
  };
}

console.log(User.printX());

// class Square {
//   constructor(
//     public width: number,
//     public height: number,
//     public color: string
//   ) {}
//   draw = () => {
//     let a = Math.random();
//     let square = `<div style="position:relative;
//       top:${a * 400}px;
//       left:${a * 400}px;
//       width:${this.width}px;
//       height : ${this.height}px;
//       background:${this.color}"></div>`;
//     document.body.insertAdjacentHTML("beforeend", square);
//   };
// }

let dog1: NameSpace.ObjectDog = {
  name: "bark",
};

let dog2: NameSpace.StringDog = "bark";

const getLength2 = <T extends string | string[]>(a: T): void => {
  console.log(a.length);
};

getLength2<string>("Hello");
getLength2<string[]>(["kim", "park"]);

let data = '{"name" : "dog", "age" : 1 }';

interface Animal {
  name: string;
  age: number;
}

const getObject = <T>(data: string): T => {
  return JSON.parse(data);
};

const testt = getObject<Animal>(data);
console.log(testt);

class Person2<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}

let a = new Person2("스트링");

type Arr = [string, number, ...boolean[]];
const arr: Arr = ["동서녹차", 4000, true, false, true, true, false, true];

type Tuple = [string, boolean, ...(number | string)[]];

const Omakase = (...a: (number | string)[]) => {
  const result: [number[], string[]] = [[], []];
  a.map((x) => {
    if (typeof x === "number") {
      result[0].push(x);
    } else {
      result[1].push(x);
    }
  });
  return result;
};

interface Obj4 {
  [key: string]: string | number;
}

interface Obj5 {
  "font-size": number | Obj5;
  [key: string]: number | Obj5;
}

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger<T> = {
  [key in keyof T]: string | number;
};
type NewBus = TypeChanger<Bus>;

type TypeChanger2<T, ChangeType> = {
  [key in keyof T]: ChangeType;
};
type NewBus2 = TypeChanger2<Bus, string[]>;
