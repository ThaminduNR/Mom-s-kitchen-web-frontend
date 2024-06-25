import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@radix-ui/react-separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "Restaurant name is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
  country: z.string({
    required_error: "Country is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery price is required",
    invalid_type_error: "Delivery price must be a number",
  }),
  estimatesDeliveryTime: z.coerce.number({
    required_error: "Estimated Delivery time is required",
    invalid_type_error: "Delivery time must be a number",
  }),
  cuisine: z.array(z.string()).nonempty({
    message: "please select at least one cuisine type",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Please upload an image file" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisine: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {
    const formData = new FormData();
    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
    formData.append(
      "estimatesDeliveryTime",
      formDataJson.estimatesDeliveryTime.toString()
    );
    formData.append("cuisine", JSON.stringify(formDataJson.cuisine));
    formData.append("menuItems", JSON.stringify(formDataJson.menuItems));
    formData.append("imageFile", formDataJson.imageFile);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="w-[120px]">
            Save
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
