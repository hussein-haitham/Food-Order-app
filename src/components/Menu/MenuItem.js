import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
function MenuItem({ item }) {
  const { addItem } = useContext(CartContext);

  return (
    <li key={item.id} className=" flex flex-row w-full mb-6 px-6 ">
      <div className="pr-2">
        <div className="flex flex-row">
          <h4 className="font-bold mb-1"> {item.name}</h4>
          <button
            onClick={() => {
              addItem(item);
            }}
            className="text-secondary mt-0.5 btn-xs  text-xs gap-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-stone-500 mb-4">
          Sint deserunt ut enim Lorem occaecat officia ex nisi est cillum non
          aute.
        </p>
        <h4 className="text-secondary font-bold text-sm">
          {item.price}.00 EGP
        </h4>
      </div>
      <div className="rounded-lg h-17 w-17 overflow-hidden">
        <img src="https://picsum.photos/200" alt="Movie" />
      </div>
    </li>
  );
}

export default MenuItem;
