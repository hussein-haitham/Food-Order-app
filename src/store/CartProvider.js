import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

const ACTIONS = { ADD: "add-cart", REMOVE: "remove-cart" };

const cartReducer = (cartState, { type, payload }) => {
  const cart = { ...cartState };
  switch (type) {
    case ACTIONS.ADD:
      if (
        !cart.items.find((item) => {
          if (item.id === payload.id) {
            item.count += 1;
            cart.totalAmount += item.price;
            return 1;
          }
        })
      ) {
        cart.items.push(payload);
        cart.totalAmount += payload.price;
      }

      return cart;

    case ACTIONS.REMOVE:
      const newCart = cart.filter((item) => item.id === payload.id);
      return newCart;
    default:
      return cart;
  }
};

function CartContextProvider({ children }) {
  const addItemToCart = (item) => {
    dispatch({ type: "add-cart", payload: item });
  };
  const removeItemFromCart = (item) => {
    console.log("Why are we  here");
  };

  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  });

  const contextValue = {
    ...cartState,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
