import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/my/user`, user, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return { createUser, isLoading, isError, isSuccess };
};

type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (formData: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/my/user`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  };
  const {
    mutateAsync: updateUser,
    isLoading,
    error,
    isSuccess,
    reset,
  } = useMutation(updateMyUserRequest);

  if (isSuccess) {
    toast.success("User updated successfully");
    
  }
  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateUser, isLoading };
};
