import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/users");
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
    staleTime: Infinity,
  });
  return { users: data };
};