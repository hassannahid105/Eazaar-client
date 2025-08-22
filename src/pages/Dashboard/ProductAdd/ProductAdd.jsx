import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
// import "./style.css";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
const ProductAdd = () => {
  const [images, setImages] = useState([]);
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

  const imagebbAPIKEY = import.meta.env.VITE_IMAGEBB_KEY;
  const onSubmit = async (data) => {
    const productObj = {
      name: data.name,
      // categories: ["Audio"],
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
      if (response.status) {
        uploadedImageUrls.push(response.data.data.display_url);
      }
    }

    const productsResponse = await axios.post(
      "http://localhost:5000/products",
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
  return (
    <div className="text-xl mb-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex items-center justify-between mr-10 mb-12">
          <div className="font-semibold mb-4 md:mb-0">Add New Product</div>

          <div className="md:flex items-center justify-center gap-4">
            <div className="flex items-center justify-center border-2 border-gray-200 px-4 py-2 rounded-full mb-6 md:mb-0">
              <MdOutlineRestorePage size={24} />
              <span>save Draf</span>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center  px-4 py-2 rounded-full bg-main w-full"
            >
              <IoCheckmark size={24} />
              <span> Add Product</span>
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
                    className="input input-neutral w-full bg-gray-200 rounded-sm "
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">Discount</p>
                  <input
                    {...register("offerPrice")}
                    id="offerPrice"
                    type="text"
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
                    // placeholder="Color"
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
                        defaultValue="Pick a color"
                        className="select w-full"
                        id="features"
                      >
                        <option disabled={true}>Features</option>
                        <option className="" value={true}>
                          True
                        </option>
                        <option>False</option>
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
                        defaultValue="Pick a color"
                        className="select w-full"
                        id="tags"
                      >
                        <option disabled={true}>Tags</option>
                        <option className="" value={true}>
                          new arrival
                        </option>
                        <option>eco-friendly</option>
                        <option>bestseller</option>
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
                  <div className="upload__image-wrapper " images={images}>
                    <div className="grid grid-cols-7 items-center justify-center mb-10">
                      <input
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                        className="file-input file-input-warning col-span-4"
                        defaultValue={"  Upload your Photo"}
                        // type="file"
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
                >
                  <option>Men’s Clothing</option>
                  <option>Women’s Clothing</option>
                  <option>Watches & Accessories</option>
                  <option>Bags & Wallets</option>
                  <option>Exercise & Fitness Equipment</option>
                  <option>Outdoor Gear</option>
                  <option>Sports Accessories</option>
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

export default ProductAdd;
