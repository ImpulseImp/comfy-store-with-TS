import { Hero, FeaturedProducts } from "@/components/index";
import { customFetch } from "@/utils/index";

export async function loader() {
  const data = await customFetch("/products");
  return { products: data.data };
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
