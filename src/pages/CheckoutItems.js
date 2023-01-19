function CheckoutItems({ items }) {
  return (
    <ul className="mt-3 mr-5 rounded-md text-slate-600 border-solid border-2 border-stone-200 p-4">
      {items.map((item) => {
        return (
          <li className="flex mb-4 " key={item.id}>
            <div className="mt-2 text-sm mr-4">
              <p>
                {item.name}{" "}
                <span className="text-secondary">
                  {"  x"}
                  {item.count}
                </span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CheckoutItems;
