import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_LOCATION, PRODUCTS, PRODUCT } from "../../Constants/Server";

const ProductManager = () => {
  // Existing state variables
  const [products, setProducts] = useState({});
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
  const [categories, setCategories] = useState([]);

  // New state variables for edit/delete
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [existingImage, setExistingImage] = useState(null);

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
        id: products[0]?.category_id,
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
      // Image is not required when editing
      image:
        !isEditing && !formData.image
          ? "Image is required"
          : formData.image && !formData.image.type?.startsWith("image/")
          ? "Invalid image file"
          : "",
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  // Handle form submission (create and update)
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
      let response;
      if (isEditing) {
        // Update existing product
        response = await axios.put(
          `${SERVER_LOCATION}${PRODUCT}/${editingProductId}`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        // Create new product
        response = await axios.post(SERVER_LOCATION + PRODUCT, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

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
          err.response?.data?.data?.message ||
          `Failed to ${isEditing ? "update" : "create"} product`,
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
    setIsEditing(false);
    setEditingProductId(null);
    setExistingImage(null);
  };

  // Handle edit button click
  const handleEdit = (product, categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);

    if (!category) {
      setSubmitStatus({
        success: false,
        message: "Category not found for this product",
      });
      return;
    }

    setIsEditing(true);
    setEditingProductId(product.id);
    setExistingImage(product.Изображение);

    setFormData({
      title: product.Название,
      price: product.Цена,
      category_id: category.id,
      image: null, // Don't pre-fill image file input
    });

    // Scroll to form
    document
      .querySelector(".product-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle delete button click
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`${SERVER_LOCATION}${PRODUCT}/${productId}`);

      // If deleting the product currently being edited, reset form
      if (isEditing && productId === editingProductId) {
        resetForm();
      }

      setSubmitStatus({
        success: true,
        message: "Product deleted successfully",
      });
      fetchProducts(); // Refresh product list
    } catch (err) {
      setSubmitStatus({
        success: false,
        message:
          err.response?.data?.data?.message || "Failed to delete product",
      });
    }
  };

  return (
    <div className="product-manager">
      <h1>Product Management</h1>

      {/* Product Creation/Edit Form */}
      <div className="product-form">
        <h2>{isEditing ? "Edit Product" : "Create New Product"}</h2>
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

            {/* Show existing image when editing */}
            {isEditing && existingImage && (
              <div className="existing-image">
                <p>Current Image:</p>
                <img
                  src={SERVER_LOCATION + existingImage}
                  alt="Current product"
                  style={{ maxWidth: "100px", marginTop: "10px" }}
                />
              </div>
            )}
          </div>

          {submitStatus && (
            <div
              className={`status ${submitStatus.success ? "success" : "error"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {isEditing ? "Update Product" : "Create Product"}
            </button>

            {isEditing && (
              <button type="button" className="cancel-btn" onClick={resetForm}>
                Cancel Edit
              </button>
            )}
          </div>
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

                      <div className="product-actions">
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(product, categoryName)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </div>
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
