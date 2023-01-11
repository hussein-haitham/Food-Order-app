import CartIcon from "../components/Cart/CartIcon";
import { useContext } from "react";
import { CartContext } from "../store/CartProvider";

function NavigationHeader() {
  const { items } = useContext(CartContext);

  return (
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
        <a className="btn btn-ghost normal-case text-xl">Bittersweet</a>
      </div>

      <CartIcon count={items.length} />
    </header>
  );
}

export default NavigationHeader;
