import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../Constants/Products";

function ProductPageTemplate() {
  const navigate = useNavigate();
  const { productIndex, productSubcategory } = useParams();
  const productObj = Products[productSubcategory][productIndex];
  // console.log("productIndex", productIndex);
  // console.log("productSubcategory", productSubcategory);
  // console.log("productObj", productObj);

  return (
    <>
      <button
        onClick={() => {
          navigate("/shopMain");
        }}
      >
        Назад
      </button>
      <div>Product Index {productIndex}</div>
      <div>Product Subcategory {productSubcategory}</div>
      <div>{productObj["Название"]}</div>
      <div>{productObj["Цена"]}</div>
      <img src={productObj["Изображение"]} />
    </>
  );
}

export default ProductPageTemplate;
