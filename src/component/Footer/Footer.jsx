import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="container ">
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
          <nav>
            <Link to={"/"} className="text-3xl font-bold tracking-wider">
              Eazaar
              <span className="font-bold text-4xl tracking-normal text-skydeep">
                .
              </span>
            </Link>
            <div className=" ">
              <p>Got Question? Call us 24/7</p>
              <p>[880] 1410 64 62 68</p>
            </div>
            <div className="">
              <address>
                17 Princess Road, London, <br /> Greater London NW1 8JR, UK
              </address>
            </div>
            <div className="">
              <button className="btn bg-main">View on Map</button>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">We Using Safe Payments</h6>
            <div className="flex items-center justify-between gap-4">
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
            <div className="link link-hover">
              <p>Secured by:</p>
              <div>1: todo 2. todo</div>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Our Stores</h6>
            <Link to="" className="link link-hover">
              Dhaka
            </Link>
            <Link to="" className="link link-hover">
              Chattogram
            </Link>
            <Link to="" className="link link-hover">
              Khulna
            </Link>
            <Link to="" className="link link-hover">
              Rajshahi
            </Link>
            <Link to="" className="link link-hover">
              Sylhet
            </Link>
            <Link to="" className="link link-hover">
              Barishal
            </Link>
            <Link to="" className="link link-hover">
              Rangpur
            </Link>
            <Link to="" className="link link-hover">
              Mymensingh
            </Link>
            <Link to="" className="link link-hover">
              Cumilla
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>

            <Link to="" className="link link-hover">
              Support Center
            </Link>
            <Link to="" className="link link-hover">
              Term & Conditions
            </Link>
            <Link to="" className="link link-hover">
              Shipping
            </Link>
            <Link to="" className="link link-hover">
              Privacy Policy
            </Link>
            <Link to="" className="link link-hover">
              Help
            </Link>
            <Link to="" className="link link-hover">
              Products Return
            </Link>
            <Link to="" className="link link-hover">
              FAQS
            </Link>
          </nav>
        </footer>
      </div>
      <footer className="footer bg-main text-base-content border-base-300 border-t px-10  flex items-center py-12 justify-between">
        <aside className="grid-flow-col items-center">
          <p>© 2021 XpeedStudio All Rights Reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
