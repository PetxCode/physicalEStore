import { createBrowserRouter } from "react-router-dom";
import ProductScreen from "../pages/ProductScreen";
import DetailProductScreen from "../pages/DetailProductScreen";
import CheckoutScreen from "../pages/CheckoutScreen";
import AddProduct from "../pages/AddProduct";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProductScreen />,
    // element: <CalendarTest />,
  },
  {
    path: "/detail/:productID",
    element: <DetailProductScreen />,
  },
  {
    path: "/check-out",
    element: <CheckoutScreen />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
]);
