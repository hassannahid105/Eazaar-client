import image from "../../../../assets/Home/offer/Licence-Windows10-13-3-VOYO-VBOOK-V3Pro-Celeron-N3450-Tablet-PC-Laptop-with-8G-RAM-128G-1-1.jpg";
const EasyCard = ({ product }) => {
  console.log(product);
  const { name, price, offerPrice } = product;
  return (
    <div className="flex overflow-hidden bg-white rounded-lg  border-2">
      <div className="w-2/4 bg-cover">
        <img src={image} alt="" />
      </div>

      <div className="w-2/3 p-4 ">
        <div className="flex mt-2 item-center mb-8">Rating</div>

        <p className="mt-2 ">{name}</p>

        <div className="flex justify-between  item-center">
          <p className="mt-2 text-xl text-gray-600 font-bold dark:text-gray-400 ">
            <span className="mr-3">
              <del>${price}</del>
            </span>
            <span className="text-skydeep"> ${offerPrice}</span>
          </p>
        </div>
        <div className="mt-4">
          <button className="px-4 py-3 font-bold text-white uppercase transition-colors duration-300 transform bg-skydeep  hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 md:w-4/6 rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EasyCard;
