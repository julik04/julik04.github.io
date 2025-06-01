import React, { useState, useEffect } from "react";
import { SERVER_LOCATION, ORDERS } from "../Constants/Server";

function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve user data from sessionStorage
    const userData = JSON.parse(sessionStorage.getItem("user"));

    if (userData && userData.id) {
      setUserId(userData.id);
    } else {
      setError("User not found in session storage");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!userId) return; // Don't fetch if userId isn't available

    const fetchOrders = async () => {
      try {
        const response = await fetch(`${SERVER_LOCATION}${ORDERS}/${userId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch orders: ${response.status}`);
        }

        const result = await response.json();
        setOrders(result.data.Orders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Orders for User #{userId}</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Comment</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.order_date).toLocaleString()}</td>
                <td>{order.comment || "-"}</td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserOrders;
