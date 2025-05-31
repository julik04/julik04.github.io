import React, { useState, useEffect } from "react";
import { SERVER_LOCATION, ORDERS } from "../../Constants/Server";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    user_id: "",
    order_date: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null); // Track which order is being edited

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    fetch(SERVER_LOCATION + ORDERS, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data.Orders || []);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_id) {
      newErrors.user_id = "User ID is required";
    }

    if (!formData.order_date) {
      newErrors.order_date = "Order date is required";
    } else if (new Date(formData.order_date) < new Date()) {
      newErrors.order_date = "Order date cannot be in the past";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      let url, method;
      if (editingOrderId) {
        // UPDATE existing order
        url = SERVER_LOCATION + ORDERS + "/edit";
        method = "POST";
      } else {
        // CREATE new order
        url = SERVER_LOCATION + ORDERS;
        method = "POST";
      }

      const payload = editingOrderId
        ? { ...formData, id: editingOrderId }
        : formData;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.data?.message ||
            (editingOrderId
              ? "Failed to update order"
              : "Failed to create order")
        );
      }

      setMessage(
        editingOrderId
          ? "Order updated successfully!"
          : "Order created successfully!"
      );

      setFormData({ user_id: "", order_date: "", comment: "" });
      setEditingOrderId(null); // Reset edit mode
      fetchOrders(); // Refresh orders list
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEditClick = (order) => {
    setFormData({
      user_id: order.user_id,
      order_date: formatDateTimeLocal(order.order_date),
      comment: order.comment || "",
    });
    setEditingOrderId(order.id);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setFormData({ user_id: "", order_date: "", comment: "" });
    setEditingOrderId(null);
    setMessage("");
  };

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      const response = await fetch(`${SERVER_LOCATION}${ORDERS}/${orderId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.data?.message || "Failed to delete order");
      }

      setMessage("Order deleted successfully!");
      setEditingOrderId(null); // Cancel edit if deleting the edited order
      fetchOrders(); // Refresh orders list
    } catch (error) {
      setMessage(error.message);
    }
  };

  // Helper function to format date for datetime-local input
  const formatDateTimeLocal = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div>
      <h1>Orders Management</h1>

      {/* Create/Edit Order Form */}
      <div className="create-order-form">
        <h2>{editingOrderId ? "Edit Order" : "Create New Order"}</h2>
        {message && (
          <div
            className={`message ${
              message.includes("success") ? "success" : "error"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmitOrder}>
          <div>
            <label>User ID:</label>
            <input
              type="number"
              name="user_id"
              value={formData.user_id}
              onChange={handleInputChange}
              disabled={!!editingOrderId} // Disable when editing
            />
            {errors.user_id && <span className="error">{errors.user_id}</span>}
          </div>

          <div>
            <label>Order Date:</label>
            <input
              type="datetime-local"
              name="order_date"
              value={formData.order_date}
              onChange={handleInputChange}
            />
            {errors.order_date && (
              <span className="error">{errors.order_date}</span>
            )}
          </div>

          <div>
            <label>Comment (Optional):</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-buttons">
            <button type="submit">
              {editingOrderId ? "Update Order" : "Create Order"}
            </button>
            {editingOrderId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="cancel-button"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Orders List */}
      <div className="orders-list">
        <h2>Existing Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <h3>Order ID: {order.id}</h3>
              <p>User ID: {order.user_id}</p>
              <p>Order Date: {new Date(order.order_date).toLocaleString()}</p>
              <p>Created At: {new Date(order.created_at).toLocaleString()}</p>
              <p>Updated At: {new Date(order.updated_at).toLocaleString()}</p>
              {order.comment && <p>Comment: {order.comment}</p>}

              <div className="order-actions">
                <button
                  onClick={() => handleEditClick(order)}
                  className="edit-button"
                >
                  Edit Order
                </button>
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="delete-button"
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
