import Banner from "../pages/Banner";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
    children:[
      { index:true, element: <Banner/>},
      { path: "login", element: <Login/>}
    ]
  
  },
  {
    path: "/dashboard",
    element:  <Dashboard />
  }
 
];

export default routes;
