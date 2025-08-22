import Card from "./card";

const TabCategory = ({ items }) => {
  return (
    <>
      {items.slice(0, 8).map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
    </>
  );
};

export default TabCategory;
