import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../../hooks/useProducts";
import TabCategory from "../TopCategory/TabCategory";
import faImg from "../../../../assets/Home/offer/Licence-Windows10-13-3-VOYO-VBOOK-V3Pro-Celeron-N3450-Tablet-PC-Laptop-with-8G-RAM-128G-1-1.jpg";

const FeatureProduct = () => {
  const { products, isLoading } = useProducts();
  // TODO: change filter brand to category
  const projector = products.filter((item) => item.brand === "Google");
  // const light = products.filter((item) => item.brand === "NovaCore");
  // const laptop = products.filter((item) => item.brand === "TechNova");
  if (isLoading) {
    return;
  }
  return (
    <section className="section md:grid grid-cols-12 gap-8 items-center justify-center">
      <div className="col-span-9">
        <Tabs>
          <TabList className="">
            {/* TODO: Tab base product loading later */}
            <div className="flex justify-between items-center">
              <div>
                <Tab>Projector</Tab>
                <Tab>Light</Tab>
                <Tab>Laptop</Tab>
              </div>
            </div>
          </TabList>
          <div className="divider"></div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TabCategory items={projector}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={projector}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={projector}></TabCategory>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* products cards */}
      <div className="col-span-3">
        <img src={faImg} alt="" />
      </div>
    </section>
  );
};

export default FeatureProduct;
