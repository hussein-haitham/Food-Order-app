import MenuItem from "./MenuItem";
import { useState } from "react";

function MenuList() {
  const [menuItemsState, setMenuItemsState] = useState([
    { id: "f1", name: "Shrimp Tempura", price: 120, count: 1 },
    { id: "f2", name: "Pizza Margerita", price: 500, count: 1 },
    { id: "f3", name: "Pasta Alfredo", price: 350, count: 1 },
  ]);

  const menuItems = menuItemsState.map((item) => (
    <MenuItem key={item.id} item={item} />
  ));
  return (
    <ul className="p-7 gap-9 text-center grid grid-cols-3 ">{menuItems}</ul>
  );
}

export default MenuList;
