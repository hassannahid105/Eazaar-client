// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// image import
import bannerCampaign from "../../../../assets/Home/slider/banner-campaign-51-1-1.png";
import bannerCampaign2 from "../../../../assets/Home/slider/banner-campaign-61-1.jpg";
import banner from "../../../../assets/Home/slider/expressive-young-woman-posing.jpg";
import banner2 from "../../../../assets/Home/slider/banner2.jpg";
import banner3 from "../../../../assets/Home/slider/banner3.jpg";
// import required modules
import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
      <div className="col-span-6 md:col-span-4 ">
        {/* TODO: slider  text comming later and slider image compress later*/}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* TODO: slider cover */}
      <div className="col-span-6 md:col-span-2 flex flex-col gap-8 mt-4">
        <div className="border-2 border-amber-600">
          <img src={bannerCampaign} alt="bannerCampaign" />
        </div>
        <div className="border-2 border-amber-600">
          <img src={bannerCampaign2} alt="bannerCampaign2" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
