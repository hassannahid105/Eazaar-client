// import image from "../../assets/Home/products/42-1.png";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard/ProductCard";
const Shop = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <section className=" mt-20 gap-8">
      <div className="grid grid-cols-4 gap-12 col-span-3">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      {/* TODO: paganation comming later...... */}
    </section>
  );
};

export default Shop;
