import React from "react";
import useProducts from "../../../../hooks/useProducts";
import EasyCard from "./EasyCard";
import bgIMage from "../../../../assets/Home/offer/gadget-feature-bg-1.jpg";

const EasyLife = () => {
  const { products } = useProducts();
  return (
    <div
      className="md:p-20"
      style={{
        backgroundImage: `url(${bgIMage})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "center",
      }}
    >
      <div className="md:w-10/12">
        <div className="md:flex items-center justify-between py-14">
          {/* ! TODO: Change based on website requeirment  */}
          <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-0">
            Gadget Makes Your Life Easy
          </h3>
          <button className="btn bg-green text-white rounded-full font-bold ">
            View Full Collection
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.slice(0, 4).map((product) => (
            <EasyCard key={product._id} product={product}></EasyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EasyLife;
