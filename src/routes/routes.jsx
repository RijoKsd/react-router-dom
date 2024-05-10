import Banner from "../pages/Banner";
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
 
];

export default routes;
