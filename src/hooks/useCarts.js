import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";
const useCarts = (id) => {
  // Access the client
  const axiosPublic = useAxiosPublic();
  const {
    data: carts = [],
    isPending,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["carts", id],
    queryFn: async () => {
      // const res = await axios(`https://eazaar-server.vercel.app/products`);
      const res = await axiosPublic("/carts");
      return res.data;
    },
  });
  return { carts, isPending, isLoading, error, refetch };
};

export default useCarts;
