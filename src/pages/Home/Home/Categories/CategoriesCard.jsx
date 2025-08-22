import { Link } from "react-router";
const CategoriesCard = ({ item }) => {
  const { name, price, _id, images } = item;
  return (
    <Link to={`/details/${_id}`}>
      <div className="">
        <img src={images[0]} alt="" />
        <div className="text-center font-bold">
          <p className="mb-2">{name}</p>
          <p className="text-skydeep">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;
