import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import DetailProductScreen from "./DetailProductScreen";
import { updateToggleProduct } from "../api/API";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../global/redux";
import AddComp from "./AddComp";

const ProductScreen = () => {
  let { data, mutate }: any = useProduct();
  let dispatch = useDispatch();
  let cartData = useSelector((state: any) => state.cart);

  console.log(cartData);
  return (
    <div>
      <AddComp />
      <div className="flex flex-wrap">
        {data &&
          data.map((props: any) => (
            <div
              key={props._id}
              className="w-[200px] min-h-[100px] border m-2 flex items-center flex-col overflow-hidden "
            >
              <Link to={`/detail/${props._id}`}>
                <img
                  className="w-full h-[200px] object-contain mb-4 hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all"
                  src={props.image[0]}
                  onClick={() => {
                    // console.log(dispatch(updateProductTrue(props._id)).payload);
                  }}
                />
              </Link>

              <div className="flex items-center justify-center w-full ml-0">
                <div
                  className="flex items-center h-[40px] mx-1 text-white bg-purple-600 px-3 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm text-[12px] text-center leading-tight "
                  onClick={() => {
                    //   mutate(`/update-toggle-product/${props._id}`, () =>
                    //     updateToggleProduct(props._id, true)
                    //   );

                    updateToggleProduct(props._id, true);
                  }}
                >
                  View Product
                </div>
                <div
                  className="flex items-center h-[40px] mx-1 text-white bg-black px-3 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm text-[12px] text-center leading-tight"
                  onClick={() => {
                    dispatch(addToCart(props));
                  }}
                >
                  Add to Cart
                </div>
              </div>
              <div>
                {props.title} // {props.QTYinStock}{" "}
              </div>
              <div className="relative w-[100%] h-[20px]   ">
                <div className="text-[12px] absolute top-0 left-0 z-[1] ">
                  {"⭐".repeat(props.rating)}
                </div>
                <div className="text-[12px] absolute top-0 left-0 opacity-[0.2]">
                  {"🐸".repeat(5)}
                </div>
              </div>
              <div>₦{props.cost}</div>
              <div>{props.toggle ? "true" : "false"}</div>

              {props.toggle && <DetailProductScreen props={props} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductScreen;
