const ProductCard = ({ product }) => {
  console.log(product);
  const { images, name, price, brand, offerPrice } = product;
  return (
    <div>
      <div className=" bg-white   rounded-lg shadow-xl dark:bg-white dark:border-gray-700">
        <div>
          <img className="rounded-t-lg" src={images?.[0]} alt="" />
        </div>
        <div className="p-5">
          <div className="text-gray">
            <p>{brand}</p>
          </div>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {name}
            </h5>
          </div>
          <p>Rating comming....</p>
          <p className="mb-3  text-gray-700 text-lg font-semibold">
            <span>
              <del>${price}</del>
            </span>
            <span className="text-skydeep"> ${offerPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
