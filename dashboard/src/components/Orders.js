import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import {Link} from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get("http://localhost:3002/allOrders", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrders(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch orders");
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3002/cancelOrder/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Refresh orders after cancel
      fetchOrders();
    } catch (err) {
      setError("Failed to cancel order");
      console.error("Error canceling order:", err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="orders">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
          Get Started
          </Link>
          
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <div className="orders-table">
            <div className="orders-header">
              <span>Name</span>
              <span>Qty</span>
              <span>Price</span>
              <span>Mode</span>
              <span>Date</span>
              <span>Action</span>
            </div>
            {orders.map((order) => (
              <div key={order._id} className="order-row">
                <span>{order.name}</span>
                <span>{order.qty}</span>
                <span>₹{order.price}</span>
                <span className={`mode ${order.mode.toLowerCase()}`}>
                  {order.mode}
                </span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                <button
                  className="btn btn-red cancel-btn"
                  onClick={() => handleCancelOrder(order._id)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;