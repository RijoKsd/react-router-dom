import { Outlet } from "react-router-dom";

 
const Settings = () => {
  return (
    <div className="p-3">
      <h1 className=" text-2xl md:text-6xl font-extrabold underline my-7">
        Settings
      </h1>
      <p className="text-balance break-all hyphens-auto tracking-wider leading-7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia saepe
        eligendi fuga eos beatae magnam quasi doloremque tempora modi maxime
        debitis laborum consequuntur, odit velit hic! Dolor iure at quos placeat
        blanditiis sed? Labore voluptates culpa reprehenderit laborum quos
        nostrum molestias veritatis debitis asperiores inventore, praesentium
        cumque consequatur. Fuga pariatur accusamus eaque odio itaque.
      </p>

      <hr className="bg-black md:w-96 my-4 h-1" />
      <Outlet />
    </div>
  );
}

export default Settings
