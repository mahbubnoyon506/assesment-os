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
    ]
   }
])
export default routes;