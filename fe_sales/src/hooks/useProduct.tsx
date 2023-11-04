import useSWR from "swr";
import { readProduct } from "../api/API";

export const useProduct = () => {
  const { data, mutate } = useSWR("/view-all-product", readProduct, {
    refreshInterval: 1000,
  });

  return { data, mutate };
};
