import axios from "axios";
import useProducts from "../../../hooks/useProducts";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Products = () => {
  //   const { _id, name, images, price, offerPrice, brand, stock } = useProducts();
  const { products, refetch } = useProducts();
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:5000/products/${id}`
        );

        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name & Id</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Stock</th>
              <th>Crud</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50"> {item._id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  ${item.price}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    ${item.offerPrice}
                  </span>
                </td>
                <td>{item.brand} </td>
                <td>{item.stock}</td>
                <th>
                  <Link to={`/dashboard/update/${item._id}`}>
                    <button className="btn btn-ghost btn-xs">
                      <GrUpdate size={24} />
                    </button>
                  </Link>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(item._id)}
                  >
                    <MdDeleteOutline size={24} />
                  </button>
                </th>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Products;
