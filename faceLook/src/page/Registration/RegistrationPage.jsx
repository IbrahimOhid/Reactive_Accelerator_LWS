import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-white
          p-6
          sm:p-8
          shadow-xl
        "
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>

          <p className="mt-2 text-slate-500">Register to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
              })}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-200
              "
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
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
            <label className="mb-2 block font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
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

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-200
              "
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-green-600
              py-3
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-green-700
              active:scale-[0.98]
            "
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-slate-300" />

            <span className="text-sm text-slate-400">OR</span>

            <hr className="flex-1 border-slate-300" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-slate-300
              py-3
              transition
              hover:bg-slate-50
            "
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />

            <span className="font-medium text-slate-700">
              Continue with Google
            </span>
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              font-semibold
              text-blue-600
              hover:underline
            "
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegistrationPage;
