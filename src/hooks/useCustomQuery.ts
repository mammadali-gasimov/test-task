import { QueryFunction, useQuery } from "react-query";

type QueryOptions = {
  retryOnMount?: boolean;
  retry?: boolean;
  refetchOnWindowFocus?: boolean;
};

export const useCustomQuery = <T>(
  key: string,
  fn: QueryFunction<T, string[]>,
  options?: QueryOptions
) => {
  return useQuery({
    queryKey: [key],
    queryFn: fn,
    retryOnMount: options?.retryOnMount ?? false,
    retry: options?.retry ?? false,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};
