import Form from "../components/Form";
import { deleteBook, useBooks } from "../services/api";
import "./Admin.css";

type Books = {
  author: string;
  title: string;
  price: number;
  id?: number;
};

export default function Admin() {
  const { books, setBooks, loading } = useBooks();
  async function addBook(newBook: Books) {
    try {
      const res = await fetch("http://localhost:3001/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      const data = await res.json();

      setBooks((prevBooks) => [...prevBooks, data]);
    } catch (error) {
      console.error("Error while uploading a book:", error);
    }
  }

  function handleDelete(id: number) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    deleteBook(id);
  }

  return (
    <>
      <h3>Admin felület</h3>
      <Form addBook={addBook}></Form>
      {loading ? (
        <p style={{ color: "red" }}>Loading...</p>
      ) : (
        books.map((book) => (
          <div className="editBook" key={book.id}>
            <p>{book.author}</p>
            <p>{book.title}</p>
            <p>{book.price} Ft</p>
            <button onClick={() => handleDelete(book.id!)}>X</button>
          </div>
        ))
      )}
    </>
  );
}
