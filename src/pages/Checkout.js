import { useContext, useState, useRef } from "react";
import { CartContext } from "../store/CartProvider";

const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";

function Checkout() {
  const { items: cartItems, totalAmount } = useContext(CartContext);

  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [inValidInput, setInValidInput] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const paymentRef = useRef();

  async function sendOrder() {
    try {
      setIsSending(true);
      const orderDate = JSON.stringify(new Date());

      const response = await fetch(`${firebaseUrl}orders.json`, {
        method: "POST",
        body: JSON.stringify({
          cartItems: [...cartItems],
          name: nameRef.current.value,
          phone: phoneRef.current.value,
          totalAmount: totalAmount,
          payment: paymentRef.current.value,
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
  const changePaymentHandler = (event) => {
    let error = { ...errors };

    if (event.target.value !== "" && error[event.target.name]) {
      delete error[event.target.name];

      setErrors(error);
    }
  };
  const handleBlurInputs = (event) => {
    const validationRules = {
      name: (value) => value.length > 0 && /^[a-zA-Z ]+$/.test(value),
      phone: (value) => !isNaN(value) && value.length > 0,
    };

    const validationResult = validationRules[event.target.name](
      event.target.value
    );

    console.log("I set it invalid", inValidInput);
    const errorMessage = {
      name: "Please enter a valid name ",
      phone: "Please enter a valid phone number",
    };

    const newErorr = validationResult ? "" : errorMessage[event.target.name];
    console.log("I am setting the errors");
    setErrors({ ...errors, [event.target.name]: newErorr });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let error;
    if (!nameRef.current.value) {
      error = { ...error, name: "Please enter your name" };
    }
    if (!phoneRef.current.value) {
      error = { ...error, phone: "Please enter your phone number" };
    }
    if (!paymentRef.current.value) {
      error = { ...error, payment: "Please choose a payment type" };
    }

    if (error) {
      setErrors(error);
      return;
    }

    if (!inValidInput) sendOrder();
  };
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

        <div className="form-control w-full max-w-xs  content-center">
          <form onSubmit={submitHandler}>
            <label className="label font-bold">
              <span className="label-text">Name</span>
            </label>
            <input
              ref={nameRef}
              name="name"
              onBlur={handleBlurInputs}
              type="text"
              className={`input input-sm input-bordered w-full max-w-xs ${
                errors.name && "input-error"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-error"> {errors.name}</p>
            )}

            <label className="label font-bold">
              <span className="label-text">Mobile phone</span>
            </label>
            <input
              ref={phoneRef}
              onBlur={handleBlurInputs}
              name="phone"
              type="text"
              className={`input input-sm input-bordered w-full max-w-xs ${
                errors.phone && "input-error"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-error"> {errors.phone}</p>
            )}

            <label className="label font-bold">
              <span className="label-text">Payment method</span>
            </label>
            <select
              onChange={changePaymentHandler}
              ref={paymentRef}
              className="input input-sm"
              name="payment"
            >
              <option value="">Choose option</option>
              <option value="cash">Cash</option>
              <option value="credit">Credit Card</option>
            </select>
            {errors.payment && (
              <p className="text-xs text-error"> {errors.payment}</p>
            )}
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
