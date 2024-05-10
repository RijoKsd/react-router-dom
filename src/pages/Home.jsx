import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
 
  return (
    <>
      {" "}
      <div className="container flex  justify-around items-center shadow-sm  mx-auto bg-purple-50 p-4">
        <p className="text-xl font-bold text-fuchsia-700 ">LOGO</p>
        <nav>
          <ul className="flex gap-x-10">
            <li className="hover:bg-purple-200 p-2 rounded-md transition duration-300 ease-in-out">
               <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-purple-200 p-2 rounded-md transition duration-300 ease-in-out">
              <Link to="/login">Login</Link>
            
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />

      <Footer />
      
    </>
  );
};

export default Home;
