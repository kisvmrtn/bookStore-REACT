import "./Public.css";
import Book from "../components/Book";
import { useState } from "react";
import Cart from "../components/Cart";
import { useBooks } from "../services/api";

type CartItem = {
  author: string;
  title: string;
  price: number;
  id: number;
};

export default function Public() {
  const { books, loading } = useBooks();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleToCart(book: {
    author: string;
    title: string;
    price: number;
    id: number;
  }) {
    setCartItems((prev) => [...prev, book]);
  }
  return (
    <>
      <div className="app">
        <div className="cart">
          <p>A kosár tartalma:</p>
          <p>Darab: {cartItems.length}</p>
          <p>Összár: </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Szerzők </th>
                <th>Cím</th>
                <th>Ár</th>
                <th>Db</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((book) => (
                <Cart
                  key={book.id}
                  author={book.author}
                  title={book.title}
                  price={book.price}
                ></Cart>
              ))}
            </tbody>
          </table>
        </div>
        <div className="books">
          {loading ? (
            <p style={{ color: "red" }}>Loading...</p>
          ) : (
            books.map((book) => (
              <Book
                key={book.id}
                author={book.author}
                title={book.title}
                price={book.price}
                toCart={() => handleToCart(book)}
              ></Book>
            ))
          )}
        </div>
      </div>
    </>
  );
}
