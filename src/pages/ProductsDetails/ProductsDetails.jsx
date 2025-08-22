import ProductInfoSection from "./ProductInfoSection/ProductInfoSection";
import ProductsReview from "./ProductsReview/ProductsReview";
const ProductsDetails = () => {
  return (
    <div>
      <div>
        <ProductInfoSection></ProductInfoSection>
      </div>
      <div>
        <ProductsReview></ProductsReview>
      </div>
    </div>
  );
};

export default ProductsDetails;
