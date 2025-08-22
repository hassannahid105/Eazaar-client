import image from "../../../assets/Home/other/36-2.png";

const ProductsReview = () => {
  return (
    <div className="border-2 border-gray-200 p-10 ">
      {/*  Customer Review */}
      <div className="mb-20">
        <p className="text-xl font-semibold mb-6">Customer Review</p>
        <div className="ml-10">
          <p className=" mb-3 text-lg font-roboto">
            4 reviews for Luxury Watche
          </p>
          <div className="border-2 border-gray-200 flex gap-4 py-8 items-center">
            <img src={image} alt="" className="h-20" />
            <div>
              <p className="flex items-center  gap-2">
                <span> Reating</span>
                <span>name</span>
                <span>{Date()}</span>
              </p>

              <p className="mt-2">
                He really is the cutest little man. Swoooon!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Add Customer  Rewiew*/}
      <div className="ml-10 w-8/12">
        <p className="text-xl font-semibold mb-6">Add a review</p>
        <div>
          <form className="flex flex-col gap-4">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name*</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Customer Name"
                />
              </fieldset>
            </div>
            <div>
              <div className=" flex gap-1">
                <legend className="">Your Rating*</legend>
                <span> *****</span>
              </div>
            </div>
            <div>
              <div>
                <label className="mb-4">Your Review*</label>
                <textarea className="border-2 w-full h-48"></textarea>
              </div>
            </div>
            <button className="btn bg-skydeep w-2/12 text-white " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsReview;
