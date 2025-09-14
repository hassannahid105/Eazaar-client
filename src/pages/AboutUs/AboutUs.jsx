import OurHistory from "./OurHistory/OurHistory";
import OurTeam from "./OurTeam/OurTeam";
import OurVision from "./OUrVision/OUrVision";

const AboutUs = () => {
  return (
    <div className="w-10/12 mx-auto">
      <OurHistory></OurHistory>
      <div className="bg-gray-100">
        <OurVision></OurVision>
      </div>
      <OurTeam></OurTeam>
    </div>
  );
};

export default AboutUs;
