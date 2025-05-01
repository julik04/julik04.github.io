import React, { useState, useMemo, useEffect } from "react";
import { Products } from "./Constants/Products"; // <-- Укажи правильный путь к файлу с Products
import CardProduct from "./ShopPage/CardProduct";
import { SERVER_LOCATION } from "./Constants/Server";

// Вспомогательная функция для получения плоского списка всех товаров
const getAllProducts = (productsData) => {
  return Object.values(productsData).flat();
};

// Стили можно вынести в отдельный CSS/SCSS файл или использовать CSS-in-JS
const styles = {
  container: {
    margin: "20px 0",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "95%",
    padding: "10px 15px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  resultsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Адаптивная сетка
    gap: "15px",
    marginTop: "10px",
  },
  productCard: {
    border: "1px solid #eee",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  productImage: {
    maxWidth: "100%",
    height: "150px", // Фиксированная высота для единообразия
    objectFit: "contain", // Чтобы изображение помещалось без искажений
    marginBottom: "10px",
  },
  productName: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginBottom: "5px",
    minHeight: "40px", // Чтобы названия разной длины не ломали верстку
  },
  productPrice: {
    fontSize: "1rem",
    color: "#333",
  },
  noResults: {
    color: "#777",
    textAlign: "center",
    padding: "20px",
  },
};

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  // Получаем плоский список всех товаров один раз
  const allProducts = useMemo(() => getAllProducts(products), [products]);

  useEffect(() => {
    fetch("http://localhost:8080/products", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setProducts(data.data.Products);
      });
  }, []);

  // Фильтруем товары на основе поискового запроса
  // useMemo кэширует результат, пока searchTerm или allProducts не изменятся
  const filteredProducts = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    if (!lowerCaseSearchTerm) {
      return []; // Не показываем ничего, если поиск пуст
      // или return allProducts; // если нужно показывать все товары при пустом поиске
    }
    return allProducts.filter((product) =>
      product.Название.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, allProducts]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Поиск по товарам</h2>
      <input
        type="text"
        placeholder="Введите название товара..."
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.input}
      />

      {/* Показываем результаты только если есть ввод */}
      {searchTerm && (
        <div style={styles.resultsContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <CardProduct
                productInfo={JSON.stringify(product)}
                price={product.Цена}
                productSubcategory={"категория"}
                productIndex={index}
                title={product.Название}
                productSRC={SERVER_LOCATION + product.Изображение}
              />
            ))
          ) : (
            <p style={styles.noResults}>Ничего не найдено.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
