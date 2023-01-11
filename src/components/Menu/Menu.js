/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";
function Menu() {
  return (
    <section className="container mx-auto">
      <MenuTabs />
      <div className="flex">
        <MenuList />
      </div>
    </section>
  );
}

export default Menu;
