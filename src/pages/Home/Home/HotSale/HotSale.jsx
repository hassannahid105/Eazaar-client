import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import hot from "../../../../assets/Home/offer/offer_banner_21.jpg";
import watch from "../../../../assets/Home/other/hand_watch1-1-1.png";
import { Link } from "react-router";
const HotSale = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 mr-12">
        {/* TODO: change image later */}
        <div className="border-2 border-red-600 mb-4">
          <Link to="/shop">
            <img src={watch} alt="" />
          </Link>
        </div>
        <div className="border-2 border-red-600">
          <Link to="/shop">
            <img src={watch} alt="" />
          </Link>
        </div>
      </div>
      <div className="md:col-span-2">
        <div>
          <div>
            <Tabs>
              <TabList className="">
                <div className="md:flex justify-between items-center text-center mt-6 md:mt-0">
                  <div className="text-2xl font-semibold mb-4 ">Hot Sale</div>
                  {/* TODO: percentise base product load in data base */}
                  <div>
                    <Tab>16% Off</Tab>
                    <Tab> 25% Off</Tab>
                    <Tab> 32% Off</Tab>
                  </div>
                </div>
              </TabList>
              <div className="border-b-[1px] border-gray-200"></div>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
                  <div className=" relative border-r-[1px] border-gray-200">
                    <figure>
                      <img src={hot} alt="" />
                      <div className="bg-green absolute top-6 right-6 h-20  w-20 flex flex-col items-center justify-center rounded-full text-white">
                        <span className="font-bold text-xl">15%</span>

                        <span className="text-xl">offer</span>
                      </div>
                    </figure>
                    <div className="card-body flex items-center justify-center">
                      <h2 className="card-title">Card Title</h2>
                      <p className="mt-2 text-xl text-gray-600 font-bold dark:text-gray-400 ">
                        <span className="mr-3">
                          <del>$600</del>
                        </span>
                        <span className="text-skydeep"> $900</span>
                      </p>
                      <div>
                        <div className="flex items-center justify-between py-3">
                          <p>Already Sold: 40</p>
                          <p>Available: 60</p>
                        </div>
                        <progress
                          className="progress progress-warning w-56"
                          value="40"
                          max="100"
                        ></progress>
                      </div>
                      <p className="py-3">
                        <span className="text-main text-xl font-semibold ">
                          Hurry Up!
                        </span>{" "}
                        <span className="text-gray">Offers ends in:</span>
                      </p>
                      <div className="flex items-center justify-between gap-4 mt-3">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            0
                          </div>
                          <div>Days</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Hours</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Minutes</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
                  <div className=" relative border-r-[1px] border-gray-200">
                    <figure>
                      <img src={hot} alt="" />
                      <div className="bg-green absolute top-6 right-6 h-20  w-20 flex flex-col items-center justify-center rounded-full text-white">
                        <span className="font-bold text-xl">15%</span>

                        <span className="text-xl">offer</span>
                      </div>
                    </figure>
                    <div className="card-body flex items-center justify-center">
                      <h2 className="card-title">Card Title</h2>
                      <p className="mt-2 text-xl text-gray-600 font-bold dark:text-gray-400 ">
                        <span className="mr-3">
                          <del>$600</del>
                        </span>
                        <span className="text-skydeep"> $900</span>
                      </p>
                      <div>
                        <div className="flex items-center justify-between py-3">
                          <p>Already Sold: 40</p>
                          <p>Available: 60</p>
                        </div>
                        <progress
                          className="progress progress-warning w-56"
                          value="40"
                          max="100"
                        ></progress>
                      </div>
                      <p className="py-3">
                        <span className="text-main text-xl font-semibold ">
                          Hurry Up!
                        </span>{" "}
                        <span className="text-gray">Offers ends in:</span>
                      </p>
                      <div className="flex items-center justify-between gap-4 mt-3">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            0
                          </div>
                          <div>Days</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Hours</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Minutes</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
                  <div className=" relative border-r-[1px] border-gray-200">
                    <figure>
                      <img src={hot} alt="" />
                      <div className="bg-green absolute top-6 right-6 h-20  w-20 flex flex-col items-center justify-center rounded-full text-white">
                        <span className="font-bold text-xl">15%</span>

                        <span className="text-xl">offer</span>
                      </div>
                    </figure>
                    <div className="card-body flex items-center justify-center">
                      <h2 className="card-title">Card Title</h2>
                      <p className="mt-2 text-xl text-gray-600 font-bold dark:text-gray-400 ">
                        <span className="mr-3">
                          <del>$600</del>
                        </span>
                        <span className="text-skydeep"> $900</span>
                      </p>
                      <div>
                        <div className="flex items-center justify-between py-3">
                          <p>Already Sold: 40</p>
                          <p>Available: 60</p>
                        </div>
                        <progress
                          className="progress progress-warning w-56"
                          value="40"
                          max="100"
                        ></progress>
                      </div>
                      <p className="py-3">
                        <span className="text-main text-xl font-semibold ">
                          Hurry Up!
                        </span>{" "}
                        <span className="text-gray">Offers ends in:</span>
                      </p>
                      <div className="flex items-center justify-between gap-4 mt-3">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            0
                          </div>
                          <div>Days</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Hours</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Minutes</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-xl">
                            00
                          </div>
                          <div>Seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          {/* products cards */}
        </div>
      </div>
    </section>
  );
};

export default HotSale;
