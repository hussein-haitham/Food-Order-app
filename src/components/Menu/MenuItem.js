import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
function MenuItem({ item }) {
  const { addItem } = useContext(CartContext);

  return (
    <li key={item.id} className=" flex flex-row w-full mb-6">
      <div>
        <h4 className="font-bold mb-1"> {item.name}</h4>
        <p className="text-xs text-stone-500 mb-4">
          Sint deserunt ut enim Lorem occaecat officia ex nisi est cillum non
          aute.
        </p>
        <h4 className="text-orange-500 font-bold text-sm">
          {item.price}.00 EGP
        </h4>
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
            className="bi bi-bag-plus"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </button>
      </div>
      <div className="rounded-full h-16 w-16 overflow-hidden felx">
        <img src="https://picsum.photos/200" alt="Movie" />
      </div>
    </li>
  );
}

export default MenuItem;
