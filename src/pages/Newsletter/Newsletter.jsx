const Newsletter = () => {
  return (
    <div className="md:flex justify-between items-center py-20 mx-10 my-10 md:my-40">
      <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
        <h3 className=" text-xl md:text-3xl opacity-90 md:mb-2">
          Newsletter & Get Updates
        </h3>
        <p>Sign up for our newsletter to get up-to-date from us</p>
      </div>
      <div>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral join-item">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
