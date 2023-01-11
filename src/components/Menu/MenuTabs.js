function MenuTabs() {
  return (
    <div className="mx-auto py-3 sticky top-0 ">
      <h1 className="text-center">Menu</h1>

      <div className="tabs tabs-boxed place-content-center m-5">
        <a className="tab no-underline">Appetizers</a>
        <a className="tab tab-active no-underline">Main Dish</a>
        <a className="tab no-underline">Desserts</a>
        <a className="tab no-underline">Beverages</a>
      </div>
    </div>
  );
}

export default MenuTabs;
