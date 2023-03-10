/* eslint-disable array-callback-return */
import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  isShown: false,
  addItem: (item) => {},
  removeItem: (item) => {},
  showCart: (show) => {},
  incrementCartItem: (item) => {},
  decrementCartItem: (item) => {},
  resetCart: () => {},
});

const ACTIONS = {
  ADD: "add-cart",
  REMOVE: "remove-cart",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  SHOW: "show-cart",
  RESET: "reset-cart",
};

const cartReducer = (cartState, { type, payload = "" }) => {
  const cart = { ...cartState };
  switch (type) {
    case ACTIONS.ADD:
      if (
        !cart.items.find((item) => {
          if (item.id === payload.id) {
            item.count += 1;
            cart.totalAmount = parseInt(cart.totalAmount);
            cart.totalAmount += parseInt(item.price);
            return 1;
          }
        })
      ) {
        cart.items.push(payload);
        cart.totalAmount = parseInt(cart.totalAmount);
        cart.totalAmount += parseInt(payload.price);
      }

      return cart;

    case ACTIONS.REMOVE:
      const newCart = cart.items.filter((item) => item.id !== payload.id);
      cart.items.find((item) => {
        if (item.id === payload.id) {
          /// Remove item's price from total amount
          cart.totalAmount = parseInt(cart.totalAmount);
          cart.totalAmount -= parseInt(item.count) * parseInt(item.price);
          item.count = 1;
        }
      });
      return { ...cart, items: newCart };

    case ACTIONS.INCREMENT:
      cart.items.find((item) => {
        if (item.id === payload.id) {
          item.count += 1;
          cart.totalAmount = parseInt(cart.totalAmount);
          cart.totalAmount += parseInt(item.price);
        }
      });
      return cart;

    case ACTIONS.DECREMENT:
      cart.items.find((item) => {
        if (item.id === payload.id && item.count > 0) {
          item.count -= 1;
          cart.totalAmount = parseInt(cart.totalAmount);
          cart.totalAmount -= parseInt(item.price);
        }
      });
      return cart;

    case ACTIONS.RESET:
      return { ...cart, items: [], totalAmount: 0 };

    case ACTIONS.SHOW:
      return { ...cart, isShown: payload };
    default:
      return cart;
  }
};

function CartContextProvider({ children }) {
  const addItemToCart = (item) => {
    dispatch({ type: "add-cart", payload: item });
  };
  const removeItemFromCart = (item) => {
    dispatch({ type: "remove-cart", payload: item });
  };

  const handleIncrementCartItem = (item) => {
    dispatch({ type: "increment", payload: item });
  };

  const handleDecrementCartItem = (item) => {
    dispatch({ type: "decrement", payload: item });
  };

  const handleShowCart = (isShown) => {
    dispatch({ type: "show-cart", payload: isShown });
  };

  const handleResetCart = () => {
    dispatch({ type: "reset-cart" });
  };

  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    isShown: false,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    showCart: handleShowCart,
    incrementCartItem: handleIncrementCartItem,
    decrementCartItem: handleDecrementCartItem,
    resetCart: handleResetCart,
  });

  const contextValue = {
    ...cartState,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    showCart: handleShowCart,
    incrementCartItem: handleIncrementCartItem,
    decrementCartItem: handleDecrementCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
