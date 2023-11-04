import React, { useState } from "react";
import { createProduct } from "../api/API";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [cost, setCost]: any = useState(0);
  const [rating, setRating]: any = useState(0);
  const [QTYinStock, setQTYinStock]: any = useState(0);

  const formData = new FormData();

  formData.append("title", title);
  formData.append("cost", cost);
  formData.append("rating", rating);
  formData.append("QTYinStock", QTYinStock);

  const onhandleImageUpload = (e: any) => {
    let file = e.target.files;
    console.log(file);
    for (let i of file) {
      formData.append("image", i);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 bg-white h-[100vh] w-full justify-center items-center flex z-[2] "
      style={{
        background: " rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 7px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 hover:cursor-pointer " />
      <div className="flex justify-center border p-5 rounded-md absolute z-[3]  ">
        <div className=" ml-4">
          <div className="text-[25px] font-bold capitalize mb-6 "></div>
          <div className="text-[25px] font-bold capitalize mb-6 "></div>

          <div className="flex flex-col mt-3 ">
            <input
              placeholder="add title"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <input
              placeholder="add cost"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              type="number"
              value={cost}
              onChange={(e: any) => setCost(e.target.value)}
            />
            <input
              placeholder="add rating"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              type="number"
              value={rating}
              onChange={(e: any) => setRating(e.target.value)}
            />
            <input
              placeholder="add stock"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              value={QTYinStock}
              type="number"
              onChange={(e: any) => setQTYinStock(e.target.value)}
            />

            <label
              htmlFor="pix"
              className="flex items-center h-[50px] justify-center text-white bg-purple-900 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm mb-4 "
              onClick={() => {
                // setToggle(false);
              }}
            >
              upload images
            </label>
            <input
              id="pix"
              className="hidden"
              onChange={onhandleImageUpload}
              type="file"
              accept=".jpg,.png,.jpeg"
              multiple
            />
            <div
              className="flex items-center h-[50px] justify-center text-white bg-black hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm "
              onClick={() => {
                createProduct(formData).then((res) => {
                  console.log(res);
                });
              }}
            >
              Add Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
