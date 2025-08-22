import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../../hooks/useProducts";
import TabCategory from "../TopCategory/TabCategory";
const TopCategory = () => {
  const { products, isLoading } = useProducts();
  console.log(products);
  if (isLoading) {
    return;
  }
  // TODO: change filter brand to category
  const projector = products.filter((item) => item.brand === "Google");
  const light = products.filter((item) => item.brand === "Samsung");
  const laptop = products.filter((item) => item.brand === "Xiaomi");
  // console.log(projector);
  return (
    //! TODO:  category based products loaging..........
    <section className="section">
      <div>
        <Tabs>
          <TabList className="md:flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold mb-2">
                Top Categories This Week
              </p>
            </div>
            <div className="">
              <div>
                <Tab>Featured Products</Tab>
                <Tab>Trending Products</Tab>
                <Tab>Hot Sale</Tab>
              </div>
            </div>
          </TabList>
          <div className="border-b-[1px] border-gray-200"></div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={projector}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={light}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={laptop}></TabCategory>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* products cards */}
    </section>
  );
};

export default TopCategory;
