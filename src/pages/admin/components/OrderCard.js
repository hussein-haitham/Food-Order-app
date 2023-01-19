import { useState } from "react";
import sound from "./sounds/alert.mp3";

function OrderCard({ order, handleAcceptOrder }) {
  let cartItems;

  if (order.cartItems) {
    cartItems = order.cartItems.map((item) => {
      return (
        <li key={item.count}>
          {item.name} x <span className="text-secondary">{item.count}</span>
        </li>
      );
    });
  }

  const playSound = () => {
    new Audio(sound).play();
  };

  playSound();

  const [isAccepting, setIsAccepting] = useState(false);
  const [statusBadge, setStatusBadge] = useState(order.orderStatus);

  console.log(statusBadge);

  const handleClick = async () => {
    setIsAccepting(true);
    const response = await handleAcceptOrder();
    const data = JSON.parse(response);

    if (data) {
      setStatusBadge("approved");
      setIsAccepting(false);
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">Order #NLqInz1XvJ</h2>

        <ul className="p-2 bg-white rounded-md shadow-sm">{cartItems}</ul>
        <p className="font-bold">
          Total amount:
          <span className="text-secondary"> {order.totalAmount}.00 EGP</span>
        </p>
        <div
          className={`badge ${
            statusBadge === "pending" ? "badge-accent" : "badge-success"
          }`}
        >
          {statusBadge}
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            className={`btn btn-primary ${isAccepting && "loading"}`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
