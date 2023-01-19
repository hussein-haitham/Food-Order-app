import { Link } from "react-router-dom";

function Cart({
  items,
  handleIncrement,
  handleDecrement,
  handleRemove,
  totalAmount,
  showCart,
}) {
  console.log(showCart);
  const cartItems = items.map((item) => {
    return (
      <li
        className="fade-in-down flex p-3 gap-4 border rounded-md transition duration-150 ease-out"
        key={item.id}
      >
        <div className="rounded-lg h-16 w-16 overflow-hidden ">
          <img src="https://picsum.photos/200" alt="Movie" />
        </div>
        <div className="text-sm">
          <p className="font-bold">{item.name}</p>
          <span className="text-sm  text-secondary">{item.price}.00 egp</span>
          <div className="control-box flex mt-2">
            <input
              className="w-8 bg-stone-100 rounded-full text-center"
              type="text"
              readOnly
              value={item.count}
            />
            <button
              onClick={() => {
                handleIncrement(item);
              }}
              className="btn btn-xs btn-circle btn-outline mx-1"
            >
              +
            </button>
            <button
              onClick={() => {
                handleDecrement(item);
              }}
              className="btn btn-xs btn-circle btn-outline mx-1"
            >
              -
            </button>
            <button
              onClick={() => {
                handleRemove(item);
              }}
              className=" btn-outline rounded-md btn-xs btn-secondary text-xs gap-2"
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      <div className="bg-secondary p-2 rounded-md text-white prose relative">
        <h2 className="text-white drop-shadow-md">Cart</h2>
        <button
          onClick={() => {
            showCart(false);
          }}
          className="absolute top-0 right-0 flex p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
      <ul className="rounded-md text-slate-600 ">
        {cartItems}
        <li key="cmr1" className="py-3">
          <label className="font-bold">Additional comments</label>

          <textarea
            className="input"
            name="w3review"
            rows="2"
            cols="20"
          ></textarea>
        </li>
        <li key="tamount1" className="py-3 font-bold">
          Total amount:{" "}
          <span className="text-secondary">{totalAmount}.00 EGP</span>
        </li>
      </ul>
      <Link to="/checkout">
        <button
          onClick={() => {
            showCart(false);
          }}
          className="btn btn-sm mt-2 btn-success text-xs text-white w-full"
        >
          Proceed to payment
        </button>
      </Link>
    </div>
  );
}

export default Cart;
