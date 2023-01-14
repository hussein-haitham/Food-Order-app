/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useMemo } from "react";

import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
import FallBack from "../../UI/FallBack";

//////////! FIX ACTIVE TAB BUG && REMOVE DUMMYCATS AND LOAD FROM GET////////////

const dummyCats = [
  { name: "Main dish", isActive: true },
  { name: "Pizzas", isActive: false },
  { name: "Beverages", isActive: false },
  { name: "Desserts", isActive: false },
];
let activeTab = "Main dish";
const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";

function Menu() {
  const [categoryState, setCategoryState] = useState(dummyCats);
  const derivedCategory = [...categoryState];

  const [menuItemsState, setMenuItemsState] = useState([]);
  const menuList = [...menuItemsState];

  const [isLoading, setIsLoading] = useState();

  console.log(categoryState);

  useEffect(() => {
    setIsLoading(true);
    getMenu();
  }, []);

  async function getMenu() {
    const response = await fetch(`${firebaseUrl}/menu.json`);
    const data = await response.json();
    const menuData = [];
    if (response.ok) {
      for (const key in data) {
        const menuObj = {
          id: key,
          ...data[key],
        };
        menuData.push({ ...menuObj });
      }

      setMenuItemsState(menuData);
      setIsLoading(false);
    }
  }

  const activeTabHandler = (event) => {
    const categoryName = event.target.text;
    derivedCategory.find((category) => {
      if (category.name === categoryName) activeTab = category.name;
      category.name === categoryName
        ? (category.isActive = true)
        : (category.isActive = false);
    });

    setCategoryState(derivedCategory);
  };

  return (
    <section className="container mx-auto fade-in">
      <MenuTabs
        activeTabHandler={activeTabHandler}
        categories={derivedCategory}
      />
      <div>
        {isLoading ? (
          <FallBack />
        ) : (
          <MenuList activeTab={activeTab} menuList={menuList} />
        )}
      </div>
      <Link to={"/checkout"}>
        <button className="btn btn-primary ">Checkout</button>
      </Link>
    </section>
  );
}

export default Menu;
