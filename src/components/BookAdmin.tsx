type PropsType = {
  author: string;
  title: string;
  price: number;
  id: number;
  onDelete: () => void;
};

export default function BookAdmin({
  author,
  title,
  price,
  id,
  onDelete,
}: PropsType) {
  return (
    <>
      <div className="editBook" key={id}>
        <p>{author}</p>
        <p>{title}</p>
        <p>{price} Ft</p>
        <button>Edit</button>
        <button onClick={onDelete}>X</button>
      </div>
    </>
  );
}
