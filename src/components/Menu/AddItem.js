import { useState } from "react";
import { useForm } from "react-hook-form";

const firebaseUrl = "https://food-app-f2704-default-rtdb.firebaseio.com/";

function AddItem() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm("mode:onBlur");
  const [isSubmiting, setIsSubmiting] = useState(false);

  async function addItemtoStorage(data) {
    const { name, price, description, category } = data;

    const response = await fetch(`${firebaseUrl}menu.json`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        price: price,
        description: description,
        category: category,
        count: 1,
      }),
    });

    response.ok && setIsSubmiting(false);
  }
  return (
    <div className="form-control max-w-xs flex container mx-auto">
      <form
        onSubmit={handleSubmit((data) => {
          setIsSubmiting(true);
          addItemtoStorage(data);
        })}
      >
        <label className="label font-bold">
          <span className="label-text">Name</span>
        </label>
        <input
          className="input input-sm input-bordered w-full max-w-xs"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-error text-sm">Enter a valid name</p>
        )}
        <label className="label font-bold">
          <span className="label-text">Description</span>
        </label>
        <input
          className="input input-sm input-bordered w-full max-w-xs"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="text-error text-sm">Enter a valid description</p>
        )}

        <label className="label font-bold">
          <span className="label-text">Price</span>
        </label>
        <input
          className="input input-sm input-bordered w-full max-w-xs"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <p className="text-error text-sm">Enter a valid price</p>
        )}

        <label className="label font-bold">
          <span className="label-text">Category</span>
        </label>
        <select
          className="input input-sm input-bordered w-full max-w-xs"
          {...register("category", { required: true })}
        >
          {errors.category && (
            <p className="text-error text-sm">Choose a specific category</p>
          )}
          <option>Main dish</option>
          <option>Desserts</option>
          <option>Pizzas</option>
          <option>Beverages</option>
        </select>
        <button
          className={`btn btn-primary w-full mt-3 ${isSubmiting && "loading"}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddItem;
