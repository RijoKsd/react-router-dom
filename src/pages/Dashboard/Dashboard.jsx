import {
  MdDashboard,
  MdReport,
  MdSell,
  MdLogout,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";

import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const navLinks = [
    { to: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/dashboard/reports", label: "Reports", icon: <MdReport /> },
    { to: "/dashboard/reports/sales", label: "Sales", icon: <MdSell /> },
    { to: "/dashboard/reports/orders", label: "Orders", icon: <IoBag /> },
    {
      to: "/dashboard/customers",
      label: "Customers",
      icon: <RiCustomerService2Fill />,
    },
    {
      to: "/dashboard/products",
      label: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
    },
    { to: "/dashboard/settings", label: "Settings", icon: <IoIosSettings /> },
    { to: "/dashboard/settings/profile", label: "Profile", icon: <CgProfile /> },
    { to: "/", label: "Logout", icon: <MdLogout /> },
  ];

  return (
    <div className=" grid grid-cols-6 w  bg-fuchsia-200">
      <div className=" col-start-1 col-end-3 md:col-end-2">
        <nav className="mt-8 ms-2 ">
          <ul className="grid grid-cols-1  gap-6 p-5 ">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-sm   p-2 rounded bg-fuchsia-500 w-min md:w-full duration:500 hover:bg-fuchsia-700 "
              >
                <Link to={link.to} className="flex   items-center gap-4">
                  {link.icon}
                  <span className="hidden md:block">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="col-start-3 col-end-7 md:col-start-2 flex">
        <div className="  h-svh w-1  shadow-inner"></div>
        <div className="mt-8 ms-2   ">
          <div className="md:ms-12 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
