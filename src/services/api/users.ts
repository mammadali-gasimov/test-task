import { axiosInstance } from "@/utils/axios";
import { GetUser } from "@/types/apiResponse/users";

export const getUsers = async (signal?: AbortSignal) => {
  return axiosInstance.get<GetUser[]>("/users", { signal });
};
