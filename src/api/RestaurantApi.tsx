import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/types";
import axios from "axios";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useRestaurants = (searchState: SearchState, city?: string) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const parems = new URLSearchParams();

    parems.append("searchQuery", searchState.searchQuery);
    parems.append("page", searchState.page.toString());

    try {
      const respose = await axios.get(
        `${API_BASE_URL}/api/restaurent/search/${city}?${parems.toString()}`
      );
      console.log("Response Data------------>>", respose.data);
      return respose.data;
    } catch (error) {
      throw new Error("Failed to search for restaurants");
    }
  };

  const { data: results, isLoading } = useQuery(
    ["searchReataurents"],
    createSearchRequest,
    { enabled: !!city }
  );
  return { results, isLoading };
};
