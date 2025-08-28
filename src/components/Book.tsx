import "./Book.css";
type PropsType = {
  author: string;
  title: string;
  price: number;
  toCart: () => void;
};
export default function Book({ author, title, price, toCart }: PropsType) {
  function handleToCart() {
    toCart();
  }
  return (
    <>
      <div className="book">
        <h4>{author}</h4>
        <p>{title}</p>
        <p>{price} Ft</p>
        <button onClick={handleToCart}>Kosárba</button>
      </div>
    </>
  );
}
