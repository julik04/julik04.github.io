import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_LOCATION, PRODUCTS, PRODUCT } from "../../Constants/Server";

const ProductManager = () => {
  const [products, setProducts] = useState({}); // Initialize as object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category_id: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    price: "",
    category_id: "",
    image: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [categories, setCategories] = useState([]); // New state for categories

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(SERVER_LOCATION + PRODUCTS);

      // Set products as object from API response
      setProducts(response.data.data.Products);

      // Extract categories from the products object
      const extractedCategories = Object.entries(
        response.data.data.Products
      ).map(([categoryName, products]) => ({
        id: products[0]?.category_id, // Use the first product's category_id
        name: categoryName,
      }));

      setCategories(extractedCategories);
      setError(null);
    } catch (err) {
      setError("Failed to fetch products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle file input
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, image: file }));

      // Validate image type
      if (!file.type.startsWith("image/")) {
        setFormErrors((prev) => ({
          ...prev,
          image: "Please select a valid image file",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, image: "" }));
      }
    }
  };

  // Validate form data
  const validateForm = () => {
    const errors = {
      title: !formData.title ? "Title is required" : "",
      price: !formData.price
        ? "Price is required"
        : isNaN(Number(formData.price))
        ? "Price must be a number"
        : "",
      category_id: !formData.category_id ? "Category is required" : "",
      image: !formData.image
        ? "Image is required"
        : formData.image && !formData.image.type.startsWith("image/")
        ? "Invalid image file"
        : "",
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", formData.price);
    data.append("category_id", formData.category_id);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.post(SERVER_LOCATION + PRODUCT, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSubmitStatus({
        success: true,
        message: response.data.data.message,
      });
      resetForm();
      fetchProducts(); // Refresh product list
    } catch (err) {
      setSubmitStatus({
        success: false,
        message:
          err.response?.data?.data?.message || "Failed to create product",
      });
    }
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      title: "",
      price: "",
      category_id: "",
      image: null,
    });
    setFormErrors({
      title: "",
      price: "",
      category_id: "",
      image: "",
    });
  };

  return (
    <div className="product-manager">
      <h1>Product Management</h1>

      {/* Product Creation Form */}
      <div className="product-form">
        <h2>Create New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={formErrors.title ? "error" : ""}
            />
            {formErrors.title && (
              <span className="error-message">{formErrors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={formErrors.price ? "error" : ""}
            />
            {formErrors.price && (
              <span className="error-message">{formErrors.price}</span>
            )}
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleInputChange}
              className={formErrors.category_id ? "error" : ""}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {formErrors.category_id && (
              <span className="error-message">{formErrors.category_id}</span>
            )}
          </div>

          <div className="form-group">
            <label>Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={formErrors.image ? "error" : ""}
            />
            {formErrors.image && (
              <span className="error-message">{formErrors.image}</span>
            )}
          </div>

          {submitStatus && (
            <div
              className={`status ${submitStatus.success ? "success" : "error"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <button type="submit" className="submit-btn">
            Create Product
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="product-list">
        <h2>Product List</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : products &&
          typeof products === "object" &&
          Object.keys(products).length === 0 ? (
          <p>No products found</p>
        ) : (
          Object.entries(products).map(([categoryName, productsInCategory]) => (
            <div key={categoryName} className="category-section">
              <h3>{categoryName}</h3>
              <div className="products-container">
                {productsInCategory.map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-image">
                      {product.Изображение ? (
                        <img
                          src={SERVER_LOCATION + product.Изображение}
                          alt={product.Название}
                          onError={(e) =>
                            (e.currentTarget.src = "/placeholder-image.png")
                          }
                        />
                      ) : (
                        <div className="image-placeholder">No Image</div>
                      )}
                    </div>
                    <div className="product-details">
                      <h4>{product.Название}</h4>
                      <p>Price: ${product.Цена}</p>
                      <p>Category: {categoryName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductManager;
