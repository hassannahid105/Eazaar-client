import Slider from "./Slider/Slider";
import OfferBanner from "./OfferBanner/OfferBanner";
import TopCategory from "./TopCategory/TopCategory";
import Categories from "./Categories/categories";
import men from "../../../assets/Home/categories/man_slider_1_406x628-1.png";
import women from "../../../assets/Home/categories/product-block-slider-women-2-1.jpg";
import watch from "../../../assets/Home/categories/watch_slider_1_406x6281-1.jpg";
import computer from "../../../assets/Home/categories/laptop_slider_2_406x628-1.jpg";
import phone from "../../../assets/Home/categories/phone_slider_2_406x628-1.jpg";
import HotSale from "./HotSale/HotSale";
import EasyLife from "./EasyLife/EasyLife";
import FeatureProduct from "./FeatureProduct/FeatureProduct";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <OfferBanner></OfferBanner>
      <TopCategory></TopCategory>
      {/* Hot seal */}
      <HotSale></HotSale>
      {/* ============== Womens category */}
      {/* TODO: categories based product loading all categories based */}
      <Categories
        name={"Women Clothing"}
        image={women}
        bgImg={women}
        cate={"men"}
      ></Categories>

      {/* ============== Mens category */}

      <Categories
        name={"Mens Clothing"}
        image={men}
        bgImg={men}
        cate={"men"}
      ></Categories>
      {/* ============== Mobile category */}
      <Categories
        name={"Mobile"}
        image={phone}
        bgImg={phone}
        cate={"phone"}
      ></Categories>
      {/* ============== Computer category */}
      <Categories
        name={"Computer"}
        image={computer}
        bgImg={computer}
        cate={"phone"}
      ></Categories>
      {/* ============== Watches category */}
      <Categories
        name={"Watches"}
        image={watch}
        bgImg={watch}
        cate={"phone"}
      ></Categories>
      {/* Gadget Makes Your Life Easy */}
      <EasyLife></EasyLife>
      {/*  */}
      <FeatureProduct></FeatureProduct>
      <p></p>
    </div>
  );
};

export default Home;
