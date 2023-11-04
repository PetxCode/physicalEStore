import { Request, Response } from "express";
import productModel from "../model/productModel";
import { myStreamifier } from "../utils/stream";

export const createProduct = async (req: any, res: Response) => {
  try {
    const { title, rating, cost, QTYinStock } = req.body;

    const product = await productModel.create({
      title,
      cost: parseInt(cost),
      rating: parseInt(rating),
      image: await myStreamifier(req),
      QTYinStock,
    });

    return res.status(201).json({
      message: "create product",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const findAllProduct = async (req: any, res: Response) => {
  try {
    const product = await productModel.find();

    return res.status(200).json({
      message: "find all product",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const findOneProduct = async (req: any, res: Response) => {
  try {
    const { productID } = req.params;
    const product = await productModel.findById(productID);

    return res.status(200).json({
      message: "find one product",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const updateProductToggle = async (req: any, res: Response) => {
  try {
    const { productID } = req.params;
    const { toggle } = req.body;

    const product = await productModel.findById(productID);

    if (product) {
      let toggledView = await productModel.findByIdAndUpdate(
        productID,
        { toggle },
        { new: true }
      );
      return res.status(200).json({
        message: "update toggle product",
        data: toggledView,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const updateProductStock = async (req: any, res: Response) => {
  try {
    const { productID } = req.params;
    const { QTYPurchased } = req.body;

    const product = await productModel.findById(productID);

    if (product) {
      let viewProduct = await productModel.findByIdAndUpdate(
        productID,
        { QTYinStock: product.QTYinStock - QTYPurchased },
        { new: true }
      );
      return res.status(200).json({
        message: "update one product",
        data: viewProduct,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};
