import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateUser = ({ username, password }) => {
    if (username && password) {
      setLoading(true);
      toast.success("Login Success", {
        autoClose: 1000,
      });

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 2000);
    }
  };
  return (
    <div className="  flex flex-col justify-center items-center min-h-[calc(100vh_-_10rem)]">
      <div className="  h-96 w-[400px] pt-10 flex flex-col justify-center  items-center shadow-lg rounded-lg ">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <form onSubmit={handleSubmit(validateUser)}>
          <div className="my-3">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-[90%]  p-2 border border-fuchsia-700 rounded-md outline-0 hover:shadow hover:shadow-fuchsia-900  focus:shadow-fuchsia-900 "
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500 block text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="my-3">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[90%] border border-fuchsia-700 p-2 rounded-md outline-0 hover:shadow hover:shadow-fuchsia-900  focus:shadow-fuchsia-900"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm block">
                This field is required
              </span>
            )}
          </div>
          <button
            disabled={loading}
            className={`bg-fuchsia-500 w-[90%] my-4 text-white p-2 rounded-md focus:bg-fuchsia-800 hover:bg-fuchsia-800   ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? (
              <p
                className="animate-spin h-5 w-5 
            border-t-2 border-b-2  border-white rounded-full
            mx-auto
            "
              ></p>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
