import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import { Checkbox } from "./ui/checkbox";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckBox = ({ cuisine, field }: Props) => {
  return (
    <FormItem className="flex flex-row item-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field?.value?.includes(cuisine)}
          onCheckedChange={(checked) => {
            const fieldValue = field?.value || [];
            if (checked) {
              field?.onChange([...fieldValue, cuisine]);
            } else {
              field?.onChange(
                fieldValue.filter((value: string) => value !== cuisine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckBox;
