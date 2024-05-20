import SiteRoot from "../Pages/Site/SiteRoot";
import Home from "../Pages/Site/Home/Home";
import Shop from "../Pages/Site/Shop/Shop";
import Basket from "../Pages/Site/Basket/Basket";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Products from "../Pages/Admin/Products/Products";
import Add from "../Pages/Admin/Add/Add";
import Details from "../Pages/Site/Details/Details";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path:"details/:id",
        element:<Details/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
];

export default ROUTES