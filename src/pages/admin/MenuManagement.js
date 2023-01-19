import { Link } from "react-router-dom";

import MenuTable from "./components/MenuTable";

import { useState, useEffect } from "react";

const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";

function MenuManagement() {
  const [menuItemsState, setMenuItemsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const menuItems = [...menuItemsState];

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
  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div className="flex">
      <div className="drawer-side">
        <ul className="menu p-4 w-80 bg-white text-base-content">
          <li>
            <Link to="/admin">
              <button>Orders</button>
            </Link>
          </li>
          <li>
            <Link to="/menu-manage">
              <button>Menu Management</button>
            </Link>
          </li>
        </ul>
      </div>
      {!isLoading && <MenuTable menu={menuItems} />}
    </div>
  );
}

export default MenuManagement;
