import { useContext, useState } from "react";
import { CartContext } from "../store/CartProvider";
import { useForm } from "react-hook-form";

const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";

function Checkout() {
  const { items: cartItems, totalAmount } = useContext(CartContext);

  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
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
        }),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) throw new Error("Unable to complete, please try again");
      else {
        setIsSending(false);
        return response;
      }
    } catch (error) {}
  }
  console.log(isLoading);
  return (
    <section>
      <header className="p-4 text-center bg-primary">
        <h1 className="text-white ">Checkout</h1>
      </header>
      <div className="container mx-auto w-50%">
        <ul className="flex">
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
                {item.count}
                <div className="rounder-full w-16 h-16">
                  <img src="https://picsum.photos/200" alt="img" />
                </div>
              </li>
            );
          })}
        </ul>

        <div className="form-control w-full max-w-xs ">
          <form
            onSubmit={handleSubmit((data) => {
              sendOrder(data);
            })}
          >
            <label className="label font-bold">
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
                required: "Please enter a vlid phone number",
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

            <h2>Total amount: {totalAmount}</h2>

            <button
              className={`btn btn-primary btn-sm mt-5 w-full ${
                isSending && "loading"
              }`}
              type="submit"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
