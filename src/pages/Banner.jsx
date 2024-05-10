import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto bg-[url('https://images.unsplash.com/photo-1549778399-f94fd24d4697?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-[calc(100svh-4.5rem)] bg-center bg-no-repeat grid place-items-center">
      <Link
        to="/login"
        className=" text-2xl    font-medium px-5 py-3  rounded-md bg-fuchsia-500  text-[#f1f1f1]  hover:bg-fuchsia-700 duration-500"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Banner
