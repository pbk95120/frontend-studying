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

console.log(subject({ subject: ["science", "art", "korean"] }));
