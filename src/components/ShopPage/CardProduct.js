import { useNavigate } from "react-router-dom";

function CardProduct({
  title,
  price,
  productSRC,
  productIndex,
  productSubcategory,
}) {
  const navigate = useNavigate();

  return (
    // <a href={`/категория/подкатегория/${productId}`}>
    <div
      className="card"
      onClick={() => {
        navigate(`/категория/${productSubcategory}/${productIndex}`);
      }}
    >
      <img src={productSRC} alt={title} />
      <div class="content">
        <h2 class="title">{title}</h2>
        <p class="price">{price}₽ </p>
      </div>
    </div>
    // </a>
  );
}
export default CardProduct;
