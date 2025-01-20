import { BookData } from "@/types";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = `http://localhost:12345/books/random`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("서버 에러 발생");
    }

    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchRandomBooks;
