import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (restaurantFormData: FormData) => {
    const accessToken = await getAccessTokenSilently();

    console.log("restaurantFormData", restaurantFormData);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/my/restaurant`,
        restaurantFormData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);
        throw new Error(
          `Failed to create restaurant: ${error.response.data.message}`
        );
      } else {
        throw new Error("Failed to create restaurant");
      }
    }
  };

  const {
    mutateAsync: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant created successfully");
  }
  if (error) {
    toast.error("Failed to create restaurant");
  }

  return { createRestaurant, isLoading };
};

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    try {
      const response = await axios.get(`${API_BASE_URL}/api/my/restaurant`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      //console.log(response.data);

      return response.data;
    } catch (error) {
      throw new Error("Failed to get restaurant");
    }
  };

  const {
    data: restaurant,
    isLoading,
    error,
  } = useQuery("getMyrestaurant", getMyRestaurantRequest);

  if (error) {
    toast.error(error.toString());
  }

  return { restaurant, isLoading };
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/my/restaurant`,
        restaurantFormData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);
        throw new Error(
          `Failed to update restaurant: ${error.response.data.message}`
        );
      } else {
        throw new Error("Failed to update restaurant");
      }
    }
  };

  const {
    mutateAsync: updateRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant updated successfully");
  }
  if (error) {
    toast.error("Failed to update restaurant");
  }

  return { updateRestaurant, isLoading };
};
