import { Router } from "express";
import {
  createProduct,
  findAllProduct,
  findOneProduct,
  updateProductStock,
  updateProductToggle,
} from "../controller/productController";
import multer from "multer";
const upload = multer().array("image", 4);

const router: Router = Router();

router.route("/create-product").post(upload, createProduct);

router.route("/view-all-product").get(findAllProduct);
router.route("/view-one-product/:productID").get(findOneProduct);

router.route("/update-stock-product/:productID").patch(updateProductStock);

router.route("/update-toggle-product/:productID").patch(updateProductToggle);

export default router;
