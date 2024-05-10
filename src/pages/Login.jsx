const Login = () => {
  return (
    <div className="  flex flex-col justify-center items-center min-h-[calc(100vh_-_10rem)]">
      <div className="  h-96 w-[400px] pt-10 flex flex-col justify-center  items-center shadow-lg rounded-lg ">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <form className="">
          <div className="my-3">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-[90%]  p-2 border border-fuchsia-700 rounded-md outline-0 hover:shadow hover:shadow-fuchsia-900  focus:shadow-fuchsia-900 "
            />
          </div>
          <div className="my-3">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[90%] border border-fuchsia-700 p-2 rounded-md outline-0 hover:shadow hover:shadow-fuchsia-900  focus:shadow-fuchsia-900"
            />
          </div>
          <button className="bg-fuchsia-500 w-[90%] my-4 text-white p-2 rounded-md focus:bg-fuchsia-800 hover:bg-fuchsia-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
