import historyImg from "../../../assets/AboutUs/about_us_img_11-1.png";
const OurHistory = () => {
  return (
    <section className="grid grid-cols-5 section gap-12 items-center justify-center">
      <div className="col-span-3 w-10/12 py-10">
        <p className="text-skydeep font-medium py-4">OUR HISTORY</p>
        <h3 className="text-4xl font-bold my-6">
          Creative and renovate fashion trends
        </h3>
        <p className="opacity-70 my-4">
          Collaboratively administrate empowered markets via plug-and-play
          maintain networks. Dynamically usable procrastinate B2B users after
          installed base benefits. Dramatically visualize customer directed
          convergence without revolutionary ROI.
        </p>
        <div className="flex gap-8">
          <div>
            <p className="text-4xl font-semibold text-skydeep">12</p>
            <p className="my-1 opacity-80">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-skydeep">20k</p>
            <p className="my-1 opacity-80">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-skydeep">100%</p>
            <p className="my-1 opacity-80">Clients Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <img src={historyImg} alt="" />
      </div>
    </section>
  );
};

export default OurHistory;
