// import { useForm } from "react-hook-form";
// import axios from "axios";
const Test = () => {
  // const { register, handleSubmit } = useForm();
  // const imagebbAPIKEY = "12fe59870d89fdf8de64d64941aac3bf";
  // const url = `https://api.imgbb.com/1/upload?&key=${API_KEY}`;

  // const onSubmit = async (data) => {
  //   //
  //   const formData = { image: data.image[0] };

  //   const response = await axios.post(
  //     `https://api.imgbb.com/1/upload?key=${imagebbAPIKEY}`,
  //     formData,
  //     {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     }
  //   );
  //   console.log(response);
  // };
  return (
    <form className="max-w-lg mx-auto">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-black bg-gray-50 rounded-e-lg border-s-gray-200  border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-gray-200  dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500 py-4"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-main rounded-e-lg border border-blue-700 hover:bg-main focus:ring-4 focus:outline-none focus:ring-skydeep dark:bg-main dark:hover:bg-skydeep dark:focus:ring-skydeep"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
            <span className="sr-only">Search</span>
            <span className="sr-only">Search</span>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Test;
