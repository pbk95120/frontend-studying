import { BookData } from "@/types";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  let url = `http://localhost:12345/books`;

  if (q) {
    url += `/search?q=${q}`;
  }

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

export default fetchBooks;
