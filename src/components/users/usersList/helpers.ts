import { GetUser } from "@/types/apiResponse/users";

export const filterList = (searchText: string, list?: GetUser[]): GetUser[] => {
  if (!Array.isArray(list)) {
    return [];
  }

  const searchIgnoreCase = searchText.toLowerCase();

  return list.filter((user) => {
    if (user && user?.email && user?.phone && user?.username) {
      return (
        user.email.toLowerCase().startsWith(searchIgnoreCase) ||
        user.phone.toLowerCase().startsWith(searchIgnoreCase) ||
        user.username.toLowerCase().startsWith(searchIgnoreCase)
      );
    }
  });
};
