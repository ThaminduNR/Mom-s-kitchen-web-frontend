import { z } from "zod";

const formSchema = z.object({
  email: z.string().optional(),
  name:z.string().min(1,"Name is required"),
  addressLine1:z.string().min(1,"addressLine1 is required"),
  city:z.string().min(1,"city is required"),
  country:z.string().min(1,"country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave:(userProfileData:UserFormData)=>void;
    isLoading:boolean;
}

const UserProfileForm = ({}:Props) => {
  
}

export default UserProfileForm;