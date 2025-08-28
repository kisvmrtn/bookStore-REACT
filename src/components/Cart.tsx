type PropsType = {
  author: string;
  title: string;
  price: number;
};
export default function Cart({ author, title, price }: PropsType) {
  return (
    <>
      <tr>
        <td>{author}</td>
        <td>{title}</td>
        <td>{price} Ft</td>
        <td>1</td>
      </tr>
    </>
  );
}
