import { useContext } from "react";
import { CartContext } from "../store/CartProvider";
function Ceckout() {
  const cartContext = useContext(CartContext);

  return (
    <div className="bg-primary">
      <header className="p-4 text-center">
        <h1 className="text-white ">Checkout</h1>
      </header>
      <div className="container"></div>
    </div>
  );
}

export default Ceckout;
