import MenuItem from "./MenuItem";
import { useState } from "react";

function MenuList() {
  const [menuItemsState, setMenuItemsState] = useState([
    { id: "f1", name: "mushroom", price: 120, count: 0 },
    { id: "f2", name: "Pizza", price: 500, count: 0 },
    { id: "f3", name: "Pasta", price: 350, count: 0 },
  ]);

  const menuItems = menuItemsState.map((item) => (
    <MenuItem key={item.id} item={item} />
  ));
  return (
    <ul className="p-7 gap-9 text-center grid grid-cols-3 ">{menuItems}</ul>
  );
}

export default MenuList;
