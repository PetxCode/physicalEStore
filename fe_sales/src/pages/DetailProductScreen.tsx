import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateToggleProduct } from "../api/API";

interface iProps {
  props?: any;
}

const DetailProductScreen: React.FC<iProps> = ({ props }) => {
  const { productID } = useParams();

  console.log(props);

  const data = useSelector((state: any) => state.product).find((el: any) => {
    return el._id === productID;
  });

  const [state, setState] = useState<number>(0);

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
      <div
        className="w-full h-full absolute top-0 left-0 hover:cursor-pointer "
        onClick={() => {
          updateToggleProduct(props._id, false);
        }}
      />
      <div className="flex justify-center border p-5 rounded-md absolute z-[3]  ">
        <div className="">
          <div className="flex items-center mb-3">
            <AiOutlineRight
              className="rotate-180 text-white bg-gray-400 p-1 rounded-full text-[30px] hover:cursor-pointer duration-300 transition-all hover:scale-[1.09] "
              onClick={() => {
                if (state < 1) {
                  setState(props?.image.length - 1);
                } else {
                  setState((el) => el - 1);
                }
              }}
            />

            <img
              src={props?.image[state % props?.image.length]}
              className="w-[300px] h-[200px] object-cover mx-2"
              loading="lazy"
            />
            <AiOutlineRight
              className=" text-white bg-gray-400 p-1 rounded-full text-[30px] hover:cursor-pointer duration-300 transition-all hover:scale-[1.09] "
              onClick={() => {
                setState((el) => el + 1);

                console.log(props?.image.length);
              }}
            />
          </div>
          <div className="flex items-center">
            {props?.image.map((props: any, i: number) => {
              return (
                <img
                  key={i}
                  className={`
                  w-[60px] h-[60px] bg-slate-50 object-cover m-2
                  border-[${state === i ? "1px solid silver" : "0px"}]
                  hover:cursor-pointer
                  `}
                  src={props}
                  onClick={() => {
                    setState(i);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className=" ml-4">
          <div className="text-[25px] font-bold capitalize mb-6 ">
            {props?.title}
          </div>
          <div className="text-[25px] font-bold capitalize mb-6 ">
            Stock: {props?.QTYinStock}
          </div>
          <div className="font-bold">₦{props?.cost}</div>

          <div className="flex mt-3 ">
            <div className="flex items-center h-[50px] border">
              <div className="w-[40px] h-full flex items-center justify-center hover:cursor-pointer duration-300 transition-all hover:scale-[1.06]">
                -
              </div>
              <div className="mx-4">{}</div>
              <div className="w-[40px] h-full flex items-center justify-center hover:cursor-pointer duration-300 transition-all hover:scale-[1.06]">
                +
              </div>
            </div>
            <div
              className="flex items-center h-[50px] ml-3 text-white bg-black px-4 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm "
              onClick={() => {
                // setToggle(false);
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductScreen;
