import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/data";

type Books = {
  author: string;
  title: string;
  price: number;
  id: number;
};
export function useBooks() {
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .finally(() => setLoading(false));
    }, 800);
  }, []);

  return { books, setBooks, loading };
}

export async function deleteBook(id: number) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error while deleting a book: ", error);
  }
}
