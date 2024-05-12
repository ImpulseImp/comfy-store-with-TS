import { Hero, FeaturedProducts } from "@/components/index";
import { customFetch } from "@/utils/index";
import { useLoaderData } from "react-router-dom";

const url = "/products?featured=true";

export async function loader() {
  const data = await customFetch(url);
  return { products: data.data };
}

const Landing = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
