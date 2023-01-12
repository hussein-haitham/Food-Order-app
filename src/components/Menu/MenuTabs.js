/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

const dummyCats = [
  { name: "Main dishes", isActive: false },
  { name: "Pizzas", isActive: false },
  { name: "Beverages", isActive: true },
  { name: "Desserts", isActive: false },
];
function MenuTabs() {
  const [categoryState, setCategoryState] = useState(dummyCats);
  const derivedCategory = [...categoryState];

  const activeTabHandler = (event) => {
    const categoryName = event.target.text;
    derivedCategory.find((category) => {
      category.name === categoryName
        ? (category.isActive = true)
        : (category.isActive = false);
    });
    setCategoryState(derivedCategory);
  };
  const categories = categoryState.map((category) => {
    //console.log(category.isActive);
    return (
      <a
        key={category.name}
        onClick={activeTabHandler}
        className={`tab  no-underline ${
          category.isActive ? "tab-active fade-in" : ""
        }`}
      >
        {category.name}
      </a>
    );
  });

  return (
    <div className="mx-auto py-3 sticky top-0 ">
      <h1 className="text-center">Menu</h1>
      <div className="tabs  tabs-boxed place-content-center m-5">
        {categories}
      </div>
    </div>
  );
}

export default MenuTabs;
