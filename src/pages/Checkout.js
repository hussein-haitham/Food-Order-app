import { useContext, useState } from "react";
import { CartContext } from "../store/CartProvider";
import { useForm } from "react-hook-form";
import CheckoutItems from "./CheckoutItems";

const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";

function Checkout() {
  const { items: cartItems, totalAmount, resetCart } = useContext(CartContext);

  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  async function sendOrder({ name, phone, payment }) {
    try {
      setIsSending(true);
      const orderDate = JSON.stringify(new Date());

      const response = await fetch(`${firebaseUrl}orders.json`, {
        method: "POST",
        body: JSON.stringify({
          cartItems: [...cartItems],
          name: name,
          phone: phone,
          totalAmount: totalAmount,
          payment: payment,
          orderDate: orderDate,
          orderStatus: "pending",
        }),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) throw new Error("Unable to complete, please try again");
      else {
        resetCart();
        setIsSending(false);
        reset();
        return response;
      }
    } catch (error) {}
  }

  return (
    <section>
      <header className="p-4 text-center bg-secondary prose">
        <h2 className="text-white ">Checkout</h2>
      </header>
      <div className="flex justify-center">
        <CheckoutItems items={cartItems} />
        <div className="form-control max-w-xs prose  ">
          <form
            className="prose"
            onSubmit={handleSubmit((data) => {
              sendOrder(data);
            })}
          >
            <label className="label font-bold text-slate-600">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Please enter your name",
                pattern: /^[a-zA-Z ]+$/,
              })}
              type="text"
              className={`input input-sm input-bordered w-full max-w-xs ${
                errors.name && "input-error"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-error">Please enter a valid name</p>
            )}
            <label className="label font-bold">
              <span className="label-text">Mobile phone</span>
            </label>
            <input
              {...register("phone", {
                required: "Please enter a valid phone number",
                pattern: /^\d{11}$/,
              })}
              type="text"
              className={`input input-sm input-bordered w-full max-w-xs ${
                errors.phone && "input-error"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-error">Enter a valid phone number</p>
            )}
            <label className="label font-bold">
              <span className="label-text">Payment method</span>
            </label>
            <select
              {...register("payment", {
                required: "PLease choose payment method",
              })}
              className="input input-sm"
            >
              <option value="cash">Cash</option>
              <option value="credit">Credit Card</option>
            </select>
            <p className="text-xs text-error">{errors.payment?.message}</p>

            <h4>
              Total amount{" "}
              <span className="text-secondary">{totalAmount}.00 EGP</span>
            </h4>

            {cartItems.length > 0 && (
              <button
                className={`btn btn-secondary btn-sm mt-5 w-full ${
                  isSending && "loading"
                }`}
                type="submit"
              >
                Pay
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
