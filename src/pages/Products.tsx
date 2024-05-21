import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import { customFetch, type ProductsResponse } from "../utils";
import { type LoaderFunction } from "react-router-dom";
const url = "/products";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  console.log(response.data);
  return { ...response.data };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};
export default Products;
