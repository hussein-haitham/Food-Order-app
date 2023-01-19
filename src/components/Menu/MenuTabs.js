/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */

function MenuTabs({ activeTabHandler, categories }) {
  categories = categories.map((category) => {
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
      <div className="tabs tabs-boxed place-content-center m-5 overflow-x-scroll">
        {categories}
      </div>
    </div>
  );
}

export default MenuTabs;
