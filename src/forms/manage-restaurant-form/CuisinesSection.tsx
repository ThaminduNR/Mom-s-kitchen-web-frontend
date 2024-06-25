import CuisineCheckBox from "@/components/CuisineCheckBox";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { cuisinesList } from "@/config/restaurant-optios-config";
import { useFormContext } from "react-hook-form";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl text-bold">Cuisines</h2>
        <FormDescription>
          Please select the cuisines that your restaurant serves.
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {cuisinesList.map((cuisineItem, key) => (
                <CuisineCheckBox
                  cuisine={cuisineItem}
                  key={key}
                  field={field}
                  
                />
              ))}
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;
