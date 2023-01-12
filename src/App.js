import NavigationHeader from "./Layout/NavigationHeader";

import Restaurant from "./pages/Restaurant";
import Checkout from "./pages/Checkout";
import CartContextProvider from "./store/CartProvider";

function App() {
  return (
    <div className="w-full">
      <CartContextProvider>
        <NavigationHeader />
        <Checkout />
      </CartContextProvider>
    </div>
  );
}

export default App;
