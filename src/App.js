import { Switch, Route } from "react-router-dom";

import NavigationHeader from "./Layout/NavigationHeader";

import AddItem from "./components/Menu/AddItem";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MenuManagement from "./pages/admin/MenuManagement";
import Restaurant from "./pages/Restaurant";
import Checkout from "./pages/Checkout";
import CartContextProvider from "./store/CartProvider";

function App() {
  return (
    <main className="w-full fade-in">
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/menu-manage">
          <MenuManagement />
        </Route>
        <CartContextProvider>
          <NavigationHeader />
          <Route path="/" exact>
            <Restaurant />
          </Route>
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
