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
import AddToCart from "../pages/AddToCart/AddToCart";
import UserDashboard from "../pages/Dashboard/Dashboard/UserDashboard";
import AdminRoute from "./AdminRoute";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/details/:id",
        element: <ProductsDetails></ProductsDetails>,
      },
      {
        path: "/addtocart",
        element: <AddToCart></AddToCart>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // ? user access
      {
        index: true,
        element: (
          <AdminRoute>
            <UserDashboard></UserDashboard>
          </AdminRoute>
        ),
      },

      // ! Admin access only
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/products",
        element: (
          <AdminRoute>
            <Products></Products>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <AdminRoute>
            <ProductAdd></ProductAdd>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <AdminRoute>
            <UpdateProduct></UpdateProduct>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
