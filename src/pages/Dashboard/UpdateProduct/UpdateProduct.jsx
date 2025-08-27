import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
// import "./style.css";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import useProduct from "../../../hooks/useProduct";
const UpdateProduct = () => {
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);
  console.table(product);
  const {
    name,
    description,
    price,
    offerPrice,
    stock,
    brand,
    color,
    isFeatured,
    tags,
    discountType,
    featureDes,
    category,
    dimensions,
    // pictures,
  } = product;
  const maxNumber = 10;
  const uploadedImageUrls = [];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  //   console.log(req.param.id);
  const imagebbAPIKEY = import.meta.env.VITE_IMAGEBB_KEY;

  const onSubmit = async (data) => {
    // ?  image upload image bb

    for (let i = 0; i < images.length; i++) {
      const formData = { image: images[0]?.file };
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imagebbAPIKEY}`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status) {
        uploadedImageUrls.push(response.data.data.display_url);
      }
    }

    const productObj = {
      name: data.name,
      pictures: data.pictures,
      category: data.category,
      description: data.description,
      price: data.price,
      offerPrice: data.offerPrice,
      // rating: 3.7,
      // reviews: 101,
      discountType: data.discountType,
      brand: data.brand,
      stock: data.stock,
      isFeatured: data.features,
      images: uploadedImageUrls,
      featureDes: data.featureDes,
      color: data.color,
      tags: [data.tags],
      dimensions: {
        weight: data.weight,
        height: data.height,
        width: data.width,
        depth: data.depth,
      },
    };
    const productsResponse = await axios.patch(
      `http://localhost:5000/products/${id}`,
      productObj
    );
    console.log(productsResponse);
    if (productsResponse?.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Product has been saved in Database",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
    // alert add and regericet
  };
  if (isLoading) {
    return <p>loading................................</p>;
  }
  return (
    <div className="text-xl mb-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between mr-10 mb-12">
          <button className="font-semibold">Update Product</button>

          <div className=" flex items-center justify-center gap-4">
            <div className="flex items-center justify-center border-2 border-gray-200 px-4 py-2 rounded-full">
              <MdOutlineRestorePage size={24} />
              <span>save Draf</span>
            </div>
            <button
              className="flex items-center justify-center  px-4 py-2 rounded-full bg-main "
              type="submit"
            >
              <IoCheckmark size={24} />
              <span> Update Product</span>
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-8 gap-8">
          <div className="col-span-5 ">
            {/* section 1 */}
            <div className=" bg-gray-100 p-4 rounded-md">
              <div className="col-span-5 bg-gray-100 rounded-md ">
                <p className=" font-medium mb-2  text-sm">
                  General Information
                </p>
              </div>
              <div className=" ">
                <div>
                  <p className="mb-2 text-sm font-bold">Product Name</p>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    defaultValue={name}
                    placeholder="Wireless Earbuds"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold mt-2">
                    Description Product
                  </p>
                  <textarea
                    {...register("description")}
                    name="description"
                    placeholder="Wireless Earbuds with high-quality performance and modern design. Ideal for daily use"
                    id="description"
                    defaultValue={description}
                    className="border-2 w-full h-40 bg-gray-200 rounded-sm p-4 text-sm"
                  ></textarea>
                </div>
              </div>
            </div>
            {/*Section2:  Price and stock */}
            <div className="bg-gray-100 mt-4 p-4 rounded-md">
              <div>
                <p className=" font-medium mb-2  text-sm"> Price and Stock</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2 text-sm font-bold">Base Price</p>
                  <input
                    {...register("price")}
                    type="number"
                    id="price"
                    placeholder="Price"
                    defaultValue={price}
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Stock</p>
                  <input
                    {...register("stock")}
                    type="number"
                    id="stock"
                    placeholder="Stock"
                    defaultValue={stock}
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Discount</p>
                  <input
                    {...register("offerPrice")}
                    id="offerPrice"
                    type="text"
                    defaultValue={offerPrice}
                    placeholder="offerPrice"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Discount Type</p>
                  <input
                    {...register("discountType")}
                    id="discountType"
                    type="text"
                    defaultValue={discountType}
                    placeholder="Discount Type"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
              </div>
            </div>
            {/*Section3:  Price and stock */}
            <div className="bg-gray-100 mt-4 p-4 rounded-md">
              <div>
                <p className=" font-medium mb-2  text-sm">Brand and Color</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2 text-sm font-bold">Brand</p>
                  <input
                    {...register("brand")}
                    id="brand"
                    type="text"
                    defaultValue={brand}
                    placeholder="Brand Name"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">color</p>
                  <input
                    {...register("color")}
                    id="color"
                    type="color"
                    defaultValue={color}
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                {/* TODO:  */}
                <div>
                  <p className="mb-2 text-sm font-bold">Featured</p>
                  <div className="w-full">
                    <div className="dropdown dropdown-start w-full">
                      <select
                        {...register("features")}
                        defaultValue={isFeatured}
                        className="select w-full"
                        id="features"
                      >
                        <option disabled={true}>Features</option>
                        <option className="" value={"True"}>
                          True
                        </option>
                        <option value={"False"}>False</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Tags</p>
                  <div className="w-full">
                    <div className="dropdown dropdown-start w-full">
                      <select
                        {...register("tags")}
                        className="select w-full"
                        id="tags"
                        //  TODO: CHANGE
                        defaultValue={tags?.[0]}
                      >
                        <option disabled={true}>Tags</option>
                        <option className="" value={" new arrival"}>
                          new arrival
                        </option>
                        <option value={"eco-friendly"}>eco-friendly</option>
                        <option value={"bestseller"}>bestseller</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="mb-2 text-sm font-bold mt-2">
                    Features Description
                  </p>
                  <textarea
                    {...register("featureDes")}
                    id="featureDes"
                    defaultValue={featureDes}
                    name="featureDes"
                    className="border-2  h-40 bg-gray-200 rounded-sm w-full"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* section 4 */}
            <div className="bg-gray-100 mt-4 p-4 rounded-md">
              <div>
                <p className=" font-medium mb-2  text-sm"> Dimensions</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2 text-sm font-bold">Weight</p>
                  <input
                    {...register("weight")}
                    type="number"
                    id="weight"
                    defaultValue={dimensions?.weight}
                    placeholder="Weight"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Height</p>
                  <input
                    {...register("height")}
                    type="number"
                    id="height"
                    defaultValue={dimensions?.height}
                    placeholder="Height"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Width</p>
                  <input
                    {...register("width")}
                    id="width"
                    type="text"
                    defaultValue={dimensions?.width}
                    placeholder="width"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Depth </p>
                  <input
                    {...register("depth")}
                    id="depth"
                    type="text"
                    defaultValue={dimensions?.depth}
                    placeholder="depth"
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* section  right */}
          <div className="col-span-3 mr-8">
            {/* ======================================================================================= */}
            <div className="App">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper" images={images}>
                    <div className="grid grid-cols-7 items-center justify-center mb-10">
                      <input
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                        className="file-input file-input-warning col-span-4"
                        defaultValue={"  Upload your Photo"}
                      ></input>
                      &nbsp;
                      <div
                        onClick={onImageRemoveAll}
                        className="mt-2 bg-green text-sm py-2 px-4 col-span-2 rounded-2xl font-bold text-white"
                      >
                        Remove All
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className={
                            index === 0
                              ? "col-span-3 bg-red-200 mb-6"
                              : "col-span-2 bg-yellow-300"
                          }
                        >
                          <img
                            id="imgList"
                            src={image.data_url}
                            alt=""
                            className={index === 0 ? "w-96" : "w-48"}
                          />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                      {/* TODO: FIXING IMAGE SHOWING LETTER */}
                      {/* {product?.images?.map((item) => (
                        <div key={item._id} className="h-10 border-2">
                          <img
                            src={item?.[0]}
                            alt="image not showing fixing"
                            className="h-10 z-10 w-10"
                          />
                        </div>
                      ))} */}
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>
            {/* ======================================================================================= */}
            <div className="mt-6 p-6 bg-gray-100 rounded-md">
              <p className=" font-medium mb-2  text-sm">Category</p>

              <div className="w-full">
                <select
                  className="select "
                  {...register("category")}
                  id="category"
                  defaultValue={category}
                >
                  <option value={"Men’s Clothing"}>Men’s Clothing</option>
                  <option value={"Women’s Clothing"}>Women’s Clothing</option>
                  <option value={"Watches & Accessories"}>
                    Watches & Accessories
                  </option>
                  <option value={"Bags & Wallets"}>Bags & Wallets</option>
                  <option value={"Exercise & Fitness Equipment"}>
                    Exercise & Fitness Equipment
                  </option>
                  <option value={"Outdoor Gear"}>Outdoor Gear</option>
                  <option value={"Sports Accessories"}>
                    Sports Accessories
                  </option>
                  <option>Car Electronics</option>
                  <option>Educational</option>
                  <option>Toys & Games</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
