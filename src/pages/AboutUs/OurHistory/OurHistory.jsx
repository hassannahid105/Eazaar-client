import historyImg from "../../../assets/AboutUs/about_us_img_11-1.png";
const OurHistory = () => {
  return (
    <section className="grid md:grid-cols-5 grid-cols-1 section gap-12 items-center justify-center">
      <div className="col-span-3 md:w-10/12 md:py-10  order-2">
        <p className="text-skydeep font-medium py-4">OUR HISTORY</p>
        <h3 className="text-xl md:text-4xl font-bold md:my-6">
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
      <div className="col-span-2 sm:order-1 md:order-2 w-full">
        <img src={historyImg} alt="" className="" />
      </div>
    </section>
  );
};
export default OurHistory;
