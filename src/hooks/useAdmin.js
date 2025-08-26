import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios/useAxiosSecure";
import useAuth from "./useAuth";
const useAdmin = () => {
  // Access the client
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: isAdmin,
    isPending,
    isLoading: isAdminLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      // const res = await axios(`https://eazaar-server.vercel.app/products`);
      const res = await axiosSecure(`/users/admin/${user.email}`);
      console.log(res);
      return res.data.isAdmin;
    },
  });
  return { isAdmin, isPending, isAdminLoading, error, refetch };
};

export default useAdmin;
