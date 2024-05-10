import Banner from "../pages/Banner";
import Customers from "../pages/Dashboard/Customers";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardReport from "../pages/Dashboard/DashboardReport";
import Order from "../pages/Dashboard/Order";
import Products from "../pages/Dashboard/Products";
import Profile from "../pages/Dashboard/Profile";
import Sales from "../pages/Dashboard/Sales";
import Settings from "../pages/Dashboard/Settings";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Banner /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardHome /> },
      {
        path: "reports",
        element: <DashboardReport />,
        children: [
          { path: "sales", element: <Sales /> },
          { path: "orders", element: <Order /> },
        ],
      },
      { path: "customers", element: <Customers /> },
      { path: "products", element: <Products /> },
      {
        path: "settings",
        element: <Settings />,
        children: [{ path: "profile", element: <Profile /> }],
      },
    ],
  },
];

export default routes;
