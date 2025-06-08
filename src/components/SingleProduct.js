import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVER_LOCATION } from "./Constants/Server";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(SERVER_LOCATION + `/product/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Product not found");
          }
          throw new Error("Failed to fetch product");
        }

        const result = await response.json();
        setProduct(result.data.Product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
        <div>Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>
          <strong>Error! </strong>
          <span>{error}</span>
        </div>
        <button onClick={() => navigate("/shopMain")}>Back to Home</button>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <h2>Product Not Available</h2>
        <button onClick={() => navigate("/shopMain")}>Browse Products</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <img src={product.image} alt={product.title} />
        </div>

        <div>
          <div>
            <h1>{product.title}</h1>
            <div>
              <span>{product.price}₽</span>
            </div>

            <div>
              <h3>Description</h3>
              <p>
                {product.description ||
                  "No description available for this product."}
              </p>
            </div>
          </div>

          <button onClick={() => navigate(-1)}>Back to Products</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
