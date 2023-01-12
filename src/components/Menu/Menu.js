/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <section className="container mx-auto">
      <MenuTabs />
      <div className="flex">
        <MenuList />
      </div>
      <Link to={"/checkout"}>
        <button className="btn btn-primary ">Checkout</button>
      </Link>
    </section>
  );
}

export default Menu;
