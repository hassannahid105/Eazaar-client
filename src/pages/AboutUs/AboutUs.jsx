import Newsletter from "../Newsletter/Newsletter";
import OurHistory from "./OurHistory/OurHistory";
import OurTeam from "./OurTeam/OurTeam";
import OurVision from "./OUrVision/OUrVision";

const AboutUs = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <OurHistory></OurHistory>
      <div className="bg-gray-100">
        <OurVision></OurVision>
      </div>
      <OurTeam></OurTeam>
      <div className="bg-gray-100">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default AboutUs;
