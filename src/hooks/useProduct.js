import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useProduct = (id) => {
  // Access the client

  const {
    data: product = [],
    isPending,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      // const res = await axios(`https://eazaar-server.vercel.app/products`);
      const res = await axios(`http://localhost:5000/products/${id}`);
      return res.data;
    },
  });
  return { product, isPending, isLoading, error, refetch };
};

export default useProduct;
