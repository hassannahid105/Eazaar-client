import useCarts from "../../hooks/useCarts";
import { RiDeleteBin6Fill } from "react-icons/ri";
const AddToCart = () => {
  const { carts } = useCarts();
  return (
    <div className=" justify-center items-center flex flex-col my-10 scroll-auto">
      <h2 className="text-2xl my-6 text-gray">Total Items: {carts.length}</h2>
      <div className="md:grid grid-cols-12 gap-8 ">
        <div className="overflow-x-auto col-span-8 bg-gray-100">
          <table className="table">
            {/* head */}

            <tbody>
              {carts?.map((cart) => (
                <tr key={cart._id}>
                  <td>
                    <div className="md:grid grid-cols-3 mb-2">
                      <div className="avatar">
                        <div className="w-24 mb-2">
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
                  <td>${cart.price}</td>
                  <td>
                    <RiDeleteBin6Fill size={26} className="text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
        <div className="col-span-4 bg-gray-100 p-4 h-[310px]">
          <p className="text-xl font-medium mb-2">Order Summary</p>
          <p className="flex justify-between items-center text-gray">
            Subtotal (2 items) <span>$100</span>
          </p>
          <p className="flex justify-between items-center text-gray mb-8">
            Shipping Fee <span>$10</span>
          </p>
          <div className="flex items-center mb-6 ">
            <div className="w-full">
              <label className="input validator ">
                <input
                  type="email"
                  placeholder="Enter Voucher Code"
                  required
                  className=""
                />
              </label>
            </div>
            <button className="btn bg-skydeep text-white w-[100px]">
              Apply
            </button>
          </div>
          <p className="flex justify-between items-center mb-4">
            <span>Total</span>
            <span className="text-2xl text-main font-bold">$1,739</span>
          </p>
          <button className="text-center w-full bg-skydeep py-3  rounded-sm text-white uppercase font-medium text-sm">
            Proceed to checkout (2){" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
