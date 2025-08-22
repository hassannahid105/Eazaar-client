import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../../../assets/Home/slider/banner-campaign-51-1-1.png";
import { useParams } from "react-router";
// import { useEffect, useState } from "react";
import useProduct from "../../../hooks/useProduct";

const ProductInfoSection = () => {
  const { id } = useParams();
  const { product } = useProduct(id);
  const {
    name,
    description,
    price,
    offerPrice,
    stock,
    brand,
    // color,
    // isFeatured,
    // tags,
    // discountType,
    // featureDes,
    category,
    // dimensions,
    // pictures,
    images,
  } = product;
  console.log(product);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center ">
      <div>
        <Carousel
          showArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img src={images?.[0]} className="" />
          </div>
          <div>
            <img src={images?.[1]} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
        </Carousel>
      </div>
      <div className="w-5/6 md:mt-32">
        <h3 className="text-2xl font-semibold mb-2 ">{name}</h3>
        <p className="mb-2">
          Categories:
          <span className="text-skydeep "> {category}</span>
        </p>
        <p className="mb-2">
          Brand:
          <span className="text-skydeep "> {brand}</span>
        </p>
        <p className="mb-2 text-black opacity-50">
          {description} ??.
          <br />{" "}
          <span className="text-blue-500">
            et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo
          </span>
        </p>
        <p className="mb-2">
          <span className="">
            <del className="text-gray">${price}</del>
            <br />
            <span className="text-xl text-skydeep font-bold">
              ${offerPrice}
            </span>
          </span>
        </p>
        <p className="text-secondary mb-2 font-bold ">Available: {stock}</p>
        <button className="btn bg-main text-white px-12 text-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfoSection;
