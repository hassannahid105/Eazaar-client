import historyImg from "../../../assets/AboutUs/about_us_img_21-1.png";
const OurVision = () => {
  return (
    <section className="grid grid-cols-4 section gap-12 items-center justify-center py-20">
      <div className="col-span-2 ml-10">
        <img src={historyImg} alt="" />
      </div>
      <div className="col-span-2 w-10/12 py-10">
        <p className="text-skydeep font-medium py-4">Our vision</p>
        <h3 className="text-4xl font-bold my-6">We are marketpress</h3>
        <p className="opacity-70 my-4">
          Dynamically procrastinate B2C users after installed base benefits.
          Dramatically visualize customer directed convergence without
          revolutionary ROI
        </p>

        <div className="flex flex-col gap-2 mt-6 text-sm font-semibold">
          <p className="">Credibly innovate granular internal</p>
          <p className="">Grantedly underconstructions reloaded</p>
          <p className="">Interactively procrastinate high-payoff</p>
          <p className="">Completely synergize resource taxing relationships</p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
