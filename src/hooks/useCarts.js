import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useCarts = (id) => {
  // Access the client

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
      const res = await axios(`${import.meta.env.VITE_URL}/carts`);
      return res.data;
    },
  });
  return { carts, isPending, isLoading, error, refetch };
};

export default useCarts;
