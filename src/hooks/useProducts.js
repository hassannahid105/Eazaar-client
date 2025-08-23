import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";
const useProducts = () => {
  // Access the client
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    isPending,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // const res = await axios(`https://eazaar-server.vercel.app/products`);
      const res = await axiosPublic(`/products`);
      return res.data;
    },
  });
  return { products, isPending, isLoading, error, refetch };
};

export default useProducts;
