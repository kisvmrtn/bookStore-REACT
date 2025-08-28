import { useState } from "react";
import "./Form.css";

type PropsType = {
  addBook: (book: Book) => void;
};

type Book = {
  author: string;
  title: string;
  price: number;
  id?: number;
};

export default function Form({ addBook }: PropsType) {
  const [form, setForm] = useState({ author: "", title: "", price: 0 });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "price" ? Number(value) : value,
    });
  }

  function handleAddBook() {
    addBook(form);
  }

  return (
    <>
      <div className="formField">
        <label>
          Szerző:
          <input type="text" name="author" onChange={handleChange} />
        </label>

        <label>
          Cím:
          <input type="text" name="title" onChange={handleChange} />
        </label>
        <label>
          Ár:
          <input type="number" name="price" onChange={handleChange} />
        </label>
        <button onClick={handleAddBook}>Küldés</button>
      </div>
    </>
  );
}
