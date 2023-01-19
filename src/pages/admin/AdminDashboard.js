import OrderCard from "./components/OrderCard";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARhIHTDQ9KcnGvHGF2cUwR-cci4x5SbyY",
  authDomain: "food-app-f2704.firebaseapp.com",
  databaseURL: "https://food-app-f2704-default-rtdb.firebaseio.com/",
  projectId: "food-app-f2704",
  storageBucket: "food-app-f2704.appspot.com",
  messagingSenderId: "191508750142",
  appId: "1:191508750142:web:bbb5dbab7d3e4c6c32966f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase:", app);
console.log("Database:", db);

const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";
const orderId = "-NLqTrKd9-E-j7QX2Asc";

function AdminDashboard() {
  async function getOrder() {
    const response = await fetch(`${firebaseUrl}orders/${orderId}.json`);
    const data = await response.json();

    if (response.ok) setOrderState(data);
    return data;
  }

  async function handleAcceptOrder() {
    const response = await fetch(`${firebaseUrl}orders/${orderId}.json`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        orderStatus: "approved",
      }),
    });
    if (response.ok) return true;
    else return false;
    // try {
    //   const response = await db().ref(`orders/${orderId}.json`).update({
    //     "order status": "pending",
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  const [orderState, setOrderState] = useState({});
  const order = { ...orderState };
  useEffect(() => {
    const status = getOrder();
  }, []);
  return (
    <div className="flex">
      <div className="drawer-side">
        <ul className="menu p-4 w-80 bg-white text-base-content">
          <li>
            <Link to="/admin">
              <button>Orders</button>
            </Link>
          </li>
          <li>
            <Link to="/menu-manage">
              <button>Menu Management</button>
            </Link>
          </li>
        </ul>
      </div>

      <OrderCard order={order} handleAcceptOrder={handleAcceptOrder} />
    </div>
  );
}

export default AdminDashboard;
