import { useNavigate } from "react-router-dom";
import { SERVER_LOCATION } from "../Constants/Server";

function CardProduct({
  title,
  price,
  productSRC,
  productInfo,
  // productIndex,
  // productSubcategory,
}) {
  const navigate = useNavigate();
  function pretifyUrl(url) {
    return url.replace(/\//g, "*");
  }

  console.log("pretifyUrl(productInfo)", pretifyUrl(productInfo));

  console.log("productInfo prop inside CardProduct", productInfo);
  // JSON.parse(productInfo)

  return (
    // <a href={`/категория/подкатегория/${productId}`}>
    <div
      className="card"
      onClick={() => {
        // navigate(`/категория/${productSubcategory}/${productIndex}`);
        navigate(`/категория/${pretifyUrl(productInfo)}`);
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
