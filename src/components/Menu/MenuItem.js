import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
function MenuItem({ item }) {
  const { addItem } = useContext(CartContext);

  return (
    <li key={item.id}>
      <div className="rounded-full h-21 w-21 overflow-hidden ">
        <img src="https://picsum.photos/200" alt="Movie" />
      </div>

      <h4 className="font-bold"> {item.name}</h4>
      <p className="text-orange-500 text-bold text-sm">{item.price}.00 EGP</p>

      <button
        onClick={() => {
          addItem(item);
        }}
        className="btn btn-primary btn-xs btn-outline text-xs gap-2"
      >
        Add
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="bi bi-bag-plus-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="currentColor"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
          />
        </svg>
      </button>
    </li>
  );
}

export default MenuItem;
