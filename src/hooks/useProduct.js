import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";
const useProduct = (id) => {
  // Access the client
  const axiosPublic = useAxiosPublic();
  const {
    data: product = [],
    isPending,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosPublic(`/products/${id}`);
      return res.data;
    },
  });
  return { product, isPending, isLoading, error, refetch };
};

export default useProduct;
