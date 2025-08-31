import "./BookAdmin.css";
import { useState } from "react";

type PropsType = {
  author: string;
  title: string;
  price: number;
  id?: number;
  onEdit: (form: FormType) => void;
  onDelete: () => void;
};

type FormType = {
  author: string;
  title: string;
  price: number;
  id?: number;
};

export default function BookAdmin({
  author,
  title,
  price,
  onEdit,
  onDelete,
}: PropsType) {
  const [form, setForm] = useState({ author, title, price });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name);
    // if (e.target.name === "price") {
    //   setForm({ ...form, price: Number(e.target.value) });
    // } else {
    //   setForm({ ...form, [e.target.name]: e.target.value });
    // }
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  }

  function handleEdit() {
    onEdit(form);
  }
  return (
    <>
      <div className="adminBook">
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          id="price"
          value={form.price}
          onChange={handleChange}
        />
        Ft
        <button id="edit" onClick={handleEdit}>
          Szerkesztés
        </button>
        <button onClick={onDelete}>X</button>
      </div>
    </>
  );
}
