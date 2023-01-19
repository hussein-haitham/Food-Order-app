function SideBar({ isShown, showCart, children }) {
  return (
    <div
      className={`top-0 right-0 w-[80vw] bg-white p-5 overflow-scroll fixed h-full z-40 ease-in-out duration-150 ${
        isShown ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      {children}
    </div>
  );
}

export default SideBar;
