import NavigationHeader from "./Layout/NavigationHeader";

import Restaurant from "./pages/Restaurant";
import CartContextProvider from "./store/CartProvider";

function App() {
  return (
    <div className="w-full">
      <CartContextProvider>
        <NavigationHeader />
        <Restaurant />
      </CartContextProvider>
    </div>
  );
}

export default App;
