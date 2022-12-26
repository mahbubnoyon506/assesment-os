import Signin from "../auth/Signin";
import SignUp from "../auth/SignUp";
import Cart from "../components/Products/Cart";
import Checkout from "../components/Products/Checkout";
import Product from "../components/Products/Product";
import Wishlist from "../components/Products/Wishlist";
import Main from "../layout/Main";
import AdminsDashboard from "../pages/Dashboard/AdminDashboard/AdminsDashboard";
import Customers from "../pages/Dashboard/AdminDashboard/Customers";
import Orders from "../pages/Dashboard/AdminDashboard/Orders";
import Products from "../pages/Dashboard/AdminDashboard/Products";
import Dashboard from "../pages/Dashboard/Dashboars";
import FilterPage from "../pages/FilterPage";


import Home from "../pages/Home/Home";
import NotFound from "../pages/notFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products/:category',
                element: <FilterPage />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/product/:id',
                element: <Product />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/*',
                element: <NotFound />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <AdminsDashboard />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            },
            {
                path: '/dashboard/customers',
                element: <Customers />
            },
            {
                path: '/dashboard/products',
                element: <Products />
            },
        ]
    }


])
export default routes;