import { createBrowserRouter } from "react-router";

import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import ProductsDetails from "../pages/ProductsDetails/ProductsDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import ProductAdd from "../pages/Dashboard/ProductAdd/ProductAdd";
import Test from "../Test/Test";
import Products from "../pages/Dashboard/Products/Products";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";
import Shop from "../pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductsDetails></ProductsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  // ? dashboard route
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/products",
        element: <Products></Products>,
      },
      {
        path: "/dashboard/addproduct",
        element: <ProductAdd></ProductAdd>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
    ],
  },
]);

export default router;
