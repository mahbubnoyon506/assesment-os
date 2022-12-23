import Cart from "../components/Products/Cart";
import Checkout from "../components/Products/Checkout";
import Main from "../layout/Main";
import AdminsDashboard from "../pages/Dashboard/AdminDashboard/AdminsDashboard";
import Customers from "../pages/Dashboard/AdminDashboard/Customers";
import Orders from "../pages/Dashboard/AdminDashboard/Orders";
import Products from "../pages/Dashboard/AdminDashboard/Products";
import Dashboard from "../pages/Dashboard/Dashboars";


import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


const routes = createBrowserRouter([
   {
    path: '/',
    element: <Main/>,
    children : [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/checkout',
            element: <Checkout/>
        }
    ]
   },
   {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
        {
            path: '/dashboard',
            element: <AdminsDashboard/>
        },
        {
            path: '/dashboard/orders',
            element: <Orders/>
        },
        {
            path: '/dashboard/customers',
            element: <Customers/>
        },
        {
            path: '/dashboard/products',
            element: <Products/>
        },
    ]
   }   


])
export default routes;