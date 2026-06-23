import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const handleRegistration = ()=>{
    console.log("ci")
    navigate("/registration");
  }

  const onSubmit = (data) => {
    console.log(data);
    navigate("/home")
  };

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600">
            FaceLook
          </h1>

          <p className="mt-4 text-xl md:text-3xl text-slate-700 leading-relaxed">
            FaceLook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
            Log in to FaceLook
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="
                  w-full
                  rounded-xl
                  border border-slate-300
                  px-4 py-3
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-200
                "
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="
                  w-full
                  rounded-xl
                  border border-slate-300
                  px-4 py-3
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-200
                "
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                active:scale-[0.98]
              "
            >
              Log In
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgotten password?
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 pt-6">
              <button onClick={handleRegistration}
                type="button"
                className="
                  mx-auto
                  block
                  rounded-xl
                  bg-green-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-600
                  active:scale-[0.98]
                "
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
