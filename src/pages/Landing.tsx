import { Hero, FeaturedProducts } from "@/components/index";
import { customFetch, ProductsResponse } from "@/utils/index";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

const Landing = () => {
  const result = useLoaderData();
  console.log(result);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
