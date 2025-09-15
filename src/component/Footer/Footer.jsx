import { Link } from "react-router";
import { TiLocationOutline } from "react-icons/ti";
import { GrNorton } from "react-icons/gr";
import { SiMcafee } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
          <nav>
            <Link to={"/"} className="text-3xl font-bold tracking-wider">
              Eazaar
              <span className="font-bold text-4xl tracking-normal text-skydeep">
                .
              </span>
            </Link>
            <div className=" ">
              <p className="text-xl opacity-60 text-gray my-2">
                Got Question? Call us 24/7
              </p>
              <p className="text-xl font-bold opacity-80">
                Call Us: [880] 1410 64 62 68
              </p>
            </div>
            <div className="text-sm opacity-60 text-gray my-2">
              <address>
                17 Princess Road, London, <br /> Greater London NW1 8JR, UK
              </address>
            </div>
            <div className="">
              <button className="btn bg-main text-white text-sm">
                <TiLocationOutline size={22} /> <span>View on Map</span>
              </button>
            </div>
          </nav>
          <nav className="my-auto">
            <h6 className="footer-title capitalize">
              We Using <br />
              <span className="text-xl text-skydeep"> Safe Payments</span>
            </h6>
            <div className="flex items-center justify-between gap-4 text-xl text-gray opacity-30 font-medium">
              <Link to="" className="link link-hover">
                Skrill
              </Link>
              <Link to="" className="link link-hover">
                Paypal
              </Link>
              <Link to="" className="link link-hover">
                MasterCard
              </Link>
            </div>
            <div className="">
              <p>Secured by:</p>
              <div className="flex justify-center items-center gap-4 my-4 text-2xl">
                <p className="flex items-center justify-center gap1 text-xl">
                  <GrNorton className="text-main" />
                  <span>Norton</span>
                </p>
                <p className="flex items-center justify-center gap1 text-xl">
                  <SiMcafee className="text-red-500" />
                  <span className="font-bold text-red-500">McAfee</span>
                </p>
              </div>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Our Stores</h6>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Dhaka
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Chattogram
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Khulna
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Rajshahi
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Sylhet
            </Link>

            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Cumilla
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>

            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Support Center
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Term & Conditions
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Shipping
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Help
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              Products Return
            </Link>
            <Link
              to=""
              className="link link-hover text-gray opacity-70 text-sm"
            >
              FAQS
            </Link>
          </nav>
        </footer>
      </div>
      <footer className="footer bg-main text-base-content border-base-300 px-10  md:flex items-center py-6 md:justify-between">
        <aside className="grid-flow-col items-center">
          <p className="text-gray opacity-70 text-sm">
            &copy; 2021 <span className="text-black ">Eazaar</span> All Rights
            Reserved
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div>
              <p className="text-gray  text-sm flex items-center justify-center gap-1">
                <FaFacebookF />
                <span>Facebook</span>
              </p>
            </div>
            <div>
              <p className="text-gray  text-sm flex items-center justify-center gap-1">
                <FaTwitter />
                <span>x</span>
              </p>
            </div>
            <div>
              <p className="text-gray  text-sm flex items-center justify-center gap-1">
                <FaPinterest />
                <span> Pinterest</span>
              </p>
            </div>
            <div>
              <p className="text-gray  text-sm flex items-center justify-center gap-1">
                <FaTiktok />
                <span>Tiktok</span>
              </p>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
