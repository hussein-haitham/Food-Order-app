function MenuTable({ menu }) {
  console.log(menu);

  const menuData = menu.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
      </tr>
    );
  });
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>

            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;
