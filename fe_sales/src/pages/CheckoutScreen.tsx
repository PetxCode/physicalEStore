import { AiFillDelete, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  emptyCart,
  removeFromCart,
  removeQTYfromCart,
} from "../global/redux";
import { updateStockProduct } from "../api/API";

const CheckoutScreen = () => {
  let dispatch = useDispatch();
  let cart = useSelector((state: any) => state.cart);

  console.log(cart);
  return (
    <div className="mt-10">
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border rounded-md p-3">
          <div className="my-5">Shopping Cart</div>

          <hr />

          <div>
            {cart?.map((props: any) => (
              <div className="flex items-center">
                <img
                  className="w-[150px] h-[150px] object-cover mr-6"
                  src={props.image[0]}
                />

                <div className="w-[300px]">
                  <div>{props.title}</div>
                  <div>₦{props.cost}</div>
                </div>
                <div className="mr-1">
                  Stock: {props.QTYinStock - props.QTY}
                </div>
                <div className=" mr-12 flex items-center border ">
                  <div className="mx-4">{props.QTY}</div>
                  <div>
                    {props.QTYinStock - props.QTY > 0 ? (
                      <div
                        className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg]"
                        onClick={() => {
                          dispatch(addToCart(props));
                        }}
                      >
                        <AiOutlineRight />
                      </div>
                    ) : (
                      <div
                        className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg] text-gray-300 "
                        onClick={() => {}}
                      >
                        <AiOutlineRight />
                      </div>
                    )}
                    <div
                      className="border-r-0 border-l-2 p-2 rotate-90 border border-t-0 "
                      onClick={() => {
                        dispatch(removeQTYfromCart(props));
                      }}
                    >
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>

                <div className="w-[100px] mr-8 font-bold ">
                  ₦{props.cost * props.QTY}
                </div>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromCart(props));
                  }}
                >
                  <AiFillDelete size={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border rounded-md p-3 ">
          <div className="flex justify-between items-center">
            <div>{cart.length} Items</div>
            <div>
              ₦
              {cart.reduce((a: any, b: any) => a.cost * a.QTY + b.cost * b.QTY)}
            </div>
          </div>

          <button
            className="bg-black text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] "
            onClick={() => {
              for (let i of cart) {
                updateStockProduct(i._id, i.QTY);
                dispatch(emptyCart());
              }
            }}
          >
            Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
