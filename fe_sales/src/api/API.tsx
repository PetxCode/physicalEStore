import axios from "axios";

let URL: string = "http://localhost:2288/api";

export const createProduct = async (data: any) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return await axios.post(`${URL}/create-product`, data, config);
};

export const readProduct = async () => {
  return await axios.get(`${URL}/view-all-product`).then((res: any) => {
    return res.data.data;
  });
};

export const readOneProduct = async (productID: string) => {
  return await axios
    .get(`${URL}/view-one-product/${productID}`)
    .then((res: any) => {
      return res.data.data;
    });
};

export const updateStockProduct = async (productID: string, data: number) => {
  return await axios
    .patch(`${URL}/update-stock-product/${productID}`, { QTYPurchased: data })
    .then((res: any) => {
      return res.data.data;
    });
};

export const updateToggleProduct = async (productID: string, data: boolean) => {
  return await axios
    .patch(`${URL}/update-toggle-product/${productID}`, { toggle: data })
    .then((res: any) => {
      return res.data.data;
    });
};
