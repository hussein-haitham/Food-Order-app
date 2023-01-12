import { useRef, useEffect } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

function SideBar({ isShown, showCart, children }) {
  const handleClickOutside = () => {
    showCart(true);
  };
  const pointerRef = useOutsideClick(handleClickOutside);
  return (
    <div
      ref={pointerRef}
      className={`top-0 right-0 w-[60vw] bg-white p-5 fixed h-full z-40 ease-in-out duration-150 ${
        isShown ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      {children}
    </div>
  );
}

export default SideBar;
