import { customFetch } from "@/utils";

const url = "/products";

export async function loader() {
  const { data } = await customFetch(url);
  console.log(data);
  return { data };
}

const Products = () => {
  return <div>Products</div>;
};
export default Products;
