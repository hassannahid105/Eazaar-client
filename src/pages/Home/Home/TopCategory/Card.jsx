import { Link } from "react-router";

const Card = ({ item }) => {
  const { _id, name, price, offerPrice, images } = item;
  return (
    <>
      <Link to={`/details/${_id}`}>
        <div className="flex max-w-md overflow-hidden bg-white  h-[150px] border-r-[1px]  border-r-gray-100 mt-10">
          {/* <div
          className="w-1/3 bg-cover"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div> */}
          <div>
            <img src={images[0]} alt="" className="w-40" />
          </div>
          <div className="w-2/3 p-4 md:p-4 flex flex-col  justify-end">
            <h1 className="text-xl">{name}</h1>

            <p className="mt-2 text-xl text-gray-600 font-bold dark:text-gray-400 ">
              <span className="mr-3">
                <del>${price}</del>
              </span>
              <span className="text-skydeep"> ${offerPrice}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
