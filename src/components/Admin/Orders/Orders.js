import React, { useState, useEffect } from "react";
import { SERVER_LOCATION, ORDERS } from "../../Constants/Server";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Simulate data fetching from backend
  useEffect(() => {
    const fetchOrders = () => {
      fetch(SERVER_LOCATION + ORDERS, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(data.data.Orders || []);
        });
    };

    fetchOrders();
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order ID: {order.id}</h2>
          <p>User ID: {order.user_id}</p>
          <p>Order Date: {order.order_date}</p>
          <p>Created At: {order.created_at}</p>
          <p>Updated At: {order.updated_at}</p>
          {order.comment && <p>Comment: {order.comment}</p>}
        </div>
      ))}
    </div>
  );
};
