/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */

function MenuTabs({ activeTabHandler, categories }) {
  categories = categories.map((category) => {
    return (
      <a
        key={category.name}
        onClick={activeTabHandler}
        className={`tab no-underline px-4 ${
          category.isActive ? "tab-active fade-in text-secondary" : ""
        }`}
      >
        {category.name}
      </a>
    );
  });

  return (
    <div className=" sticky top-0">
      <div className=" tabs bg-white font-bold shadow-sm  p-1 m-5 overflow-auto touch-pan-x scrollbar-hide rounded-md">
        <div className="flex-none">{categories}</div>
      </div>
    </div>
  );
}

export default MenuTabs;
