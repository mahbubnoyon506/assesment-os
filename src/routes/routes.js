import Cart from "../components/Products/Cart";
import Main from "../layout/Main";
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
        }
    ]
   }
])
export default routes;