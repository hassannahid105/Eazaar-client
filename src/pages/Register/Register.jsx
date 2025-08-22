//
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        if (userCredential.user.email) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // console.log(data.email, data.password);
  };
  // if (loading) {
  //   return <p>loading......</p>;
  // }
  return (
    <div className=" border-[1px] border-gray rounded-2xl  w-3/8 mx-auto py-10 my-20">
      <div className="uppercase text-xl flex items-center justify-center mb-4 gap-10  font-medium opacity-50">
        <div className="py-2 px-6 ">
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
            Your name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
            placeholder="Bonnie Green"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
            placeholder="bonniegreen@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="Password"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
            placeholder="2l6&j]m7Pd=_DA("
          />
        </div>
        <div>
          <button className="btn text-white bg-main w-full">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

//  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
//             <span className="font-medium">Oops!</span> Username already taken!
//           </p>
