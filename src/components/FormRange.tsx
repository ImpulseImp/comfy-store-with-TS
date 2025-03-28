import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { formatAsDollars } from "@/utils";
import { useState } from "react";

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormRange = ({ name, label, defaultValue }: FormRangeProps) => {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="flex justify-between capitalize">
        {label || name}
        <span>{formatAsDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
        className="mt-4"
      />
    </div>
  );
};
export default FormRange;
