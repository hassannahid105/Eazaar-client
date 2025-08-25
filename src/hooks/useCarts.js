import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios/useAxiosSecure";
const useCarts = (id) => {
  // Access the client
  const axiosSecure = useAxiosSecure();
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
      const res = await axiosSecure("/carts");
      return res.data;
    },
  });
  return { carts, isPending, isLoading, error, refetch };
};

export default useCarts;
