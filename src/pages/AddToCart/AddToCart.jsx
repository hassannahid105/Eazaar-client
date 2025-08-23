import useCarts from "../../hooks/useCarts";
const AddToCart = () => {
  const { carts } = useCarts();
  return (
    <div>
      <h2>Add to Cart {carts.length}</h2>
      <div className="grid grid-cols-12">
        <div className="overflow-x-auto col-span-8">
          <table className="table">
            {/* head */}

            <tbody>
              {/* row 1 */}
              {carts?.map((cart) => (
                <tr key={cart._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="grid grid-cols-3">
                      <div className="avatar">
                        <div className="mask mask-squircle  w-12 h-24 ">
                          <img
                            src={cart?.images?.[0]}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{cart.name}</div>
                        <div className="text-sm opacity-50">{cart?.brand}</div>
                        <div className="text-sm opacity-50">{cart?.date}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ${cart.price}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {cart.offerprice}
                    </span>
                    <button> delete</button>
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default AddToCart;
