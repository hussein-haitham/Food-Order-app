import { Switch, Route, Redirect } from "react-router-dom";

import NavigationHeader from "./Layout/NavigationHeader";

import AddItem from "./components/Menu/AddItem";
import Restaurant from "./pages/Restaurant";
import Checkout from "./pages/Checkout";
import CartContextProvider from "./store/CartProvider";

function App() {
  return (
    <main className="w-full fade-in">
      <Switch>
        <CartContextProvider>
          <NavigationHeader />
          <Route path="/restaurant/:resId">
            <Restaurant />
          </Route>
          <Route path="/additem">
            <AddItem />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </CartContextProvider>
      </Switch>
    </main>
  );
}

export default App;
