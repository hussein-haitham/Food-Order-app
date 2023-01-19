import CartIcon from "../components/Cart/CartIcon";
import Cart from "../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../store/CartProvider";
import { Link } from "react-router-dom";
import SideBar from "../UI/SideBar";

function NavigationHeader() {
  const {
    items,
    isShown,
    totalAmount,
    showCart,
    incrementCartItem,
    decrementCartItem,
    removeItem,
  } = useContext(CartContext);

  return (
    <>
      <header className="navbar bg-base-100 sticky top-0 shadow-md bg-white z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fillRule="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="text-black" to={"/restaurant/res"}>
            <button className="btn btn-ghost normal-case text-xl">
              Bittersweet
            </button>
          </Link>
        </div>

        <CartIcon showCart={showCart} count={items.length} />
      </header>
      <SideBar showCart={showCart} isShown={isShown}>
        <Cart
          items={items}
          handleDecrement={decrementCartItem}
          handleIncrement={incrementCartItem}
          handleRemove={removeItem}
          totalAmount={totalAmount}
          showCart={showCart}
        />
      </SideBar>
    </>
  );
}

export default NavigationHeader;
