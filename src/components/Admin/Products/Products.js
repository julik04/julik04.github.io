import React, { useState, useEffect } from "react";
import { SERVER_LOCATION, PRODUCTS } from "../../Constants/Server";

export const Products = () => {
  const [products, setProducts] = useState({});

  // Simulate data fetching from backend
  useEffect(() => {
    // This would typically be an API call
    const fetchproducts = () => {
      fetch(SERVER_LOCATION + PRODUCTS, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log({ data });
          // setMasterInfo(data.data.MasterInfo[artistIndex]);
          setProducts(data.data.Products);
        });
    };

    fetchproducts();
  }, []);

  return (
    <div>
      {Object.entries(products).map(([category, products]) => {
        console.log({ category, products });
        return (
          <div key={category}>
            <h2>{category}</h2>
            {products.map((product, index) => (
              <div key={index}>
                <img
                  src={SERVER_LOCATION + product.Изображение}
                  alt={product.Название}
                  style={{ maxWidth: "100px" }} // Minimal image sizing
                />
                <div>
                  <h3>{product.Название}</h3>
                  <p>Цена: {product.Цена} руб.</p>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
