function Cart({
  items,
  handleIncrement,
  handleDecrement,
  handleRemove,
  totalAmount,
  showCart,
}) {
  const cartItems = items.map((item) => {
    return (
      <li
        className="fade-in-down flex p-3 gap-4 border rounded-md transition duration-150 ease-out"
        key={item.id}
      >
        <div className="rounded-full h-16 w-16 overflow-hidden ">
          <img src="https://picsum.photos/200" alt="Movie" />
        </div>
        <div className="text-sm">
          <p className="font-bold">{item.name}</p>
          <span className="text-sm font-bold text-orange-500">
            {item.price}.00 egp
          </span>
          <div className="control-box flex mt-2">
            <input
              className="w-8 bg-stone-100 rounded-full text-center"
              type="text"
              disable={true}
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
              className=" btn-outline rounded-md btn-xs btn-warning text-xs gap-2"
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
      <div className="bg-primary p-2 rounded-md text-white prose">
        <h2 className="text-white drop-shadow-md">Cart</h2>
      </div>
      <ul className="rounded-md ">
        {cartItems}
        <li className="py-3">
          <label className="font-bold">Additional comments</label>

          <textarea name="w3review" rows="2" cols="20"></textarea>
        </li>
        <li className="py-3 font-bold">
          Total amount:{" "}
          <span className="text-orange-500">{totalAmount}.00 EGP</span>
        </li>
      </ul>
      <button className="btn btn-sm mt-2 btn-success text-xs justify-center">
        Proceed to checkout
      </button>
    </div>
  );
}

export default Cart;
