import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Products } from "../Constants/Products";
import "./ProductPageTemplate.css";

function ProductPageTemplate() {
  const navigate = useNavigate();
  const { productInfo } = useParams();
  const [isProductVerified, setIsProductVerified] = useState(true);
  // const productObj = Products[productSubcategory][productIndex];

  const productObj = JSON.parse(productInfo.replace(/\*/g, "/"));

  console.log("productObj[Изображение]", productObj["Изображение"]);

  useEffect(() => {
    const allProducts = [];

    Object.values(Products).forEach((arr) => allProducts.push(...arr));

    console.log("allProducts", allProducts);

    setIsProductVerified(
      allProducts.some((value) => {
        return (
          value["Название"] === productObj["Название"] &&
          value["Цена"] === productObj["Цена"] &&
          value["Изображение"] === productObj["Изображение"]
        );
      })
    );
  }, []);

  return (
    <div className="product-page">
      {isProductVerified ? (
        <>
          <div className="product-container">
            <button className="back-button" onClick={() => navigate("/shopMain")}>
              ← Назад в каталог
            </button>
            
            <div className="product-content">
              <div className="product-image-container">
                <img 
                  src={productObj["Изображение"]} 
                  alt={productObj["Название"]}
                  className="product-image"
                />
              </div>
              
              <div className="product-info">
                <h1 className="product-title">{productObj["Название"]}</h1>
                <div className="product-price">{productObj["Цена"]} ₽</div>
                <div className="product-category">{productObj["Категория"]}</div>
                
                <div className="product-description">
                  <h2>Описание товара</h2>
                  <p>{productObj["Описание"] || "Описание товара отсутствует"}</p>
                </div>

                <button className="buy-button">
                  Купить
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="error-container">
          <h2>Товар не найден</h2>
          <p>Извините, но запрашиваемый товар не существует.</p>
          <button className="back-button" onClick={() => navigate("/shopMain")}>
            Вернуться в каталог
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductPageTemplate;
