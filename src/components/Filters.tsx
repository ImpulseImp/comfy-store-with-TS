import { Form, useLoaderData, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { ProductsResponseWithParams } from "@/utils";

import { FormSelect, FormRange, FormInput, FormCheckbox } from ".";

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="grid items-center gap-x-4 gap-y-4 rounded-md border px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      <FormRange label="Price" defaultValue="10000" name="Price" />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="mb-2 self-end">
        search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="mb-2 self-end"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}
export default Filters;
