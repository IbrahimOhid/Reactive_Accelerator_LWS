import React from "react";

const LoginPage = () => {
  return (
    <section className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        
        {/* LEFT SIDE */}
        <div
          className="relative hidden lg:flex lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col justify-end p-10 text-white">
            <h2 className="text-4xl font-bold leading-tight">
              Welcome Back
            </h2>

            <p className="mt-4 max-w-md text-slate-200">
              Access your account and continue your premium shopping experience.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-1/2">
          <div className="w-full max-w-md">
            
            {/* HEADER */}
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Sign In
              </h1>

              <p className="mt-3 text-sm text-slate-500 sm:text-base">
                Welcome back! Please login to your account.
              </p>
            </div>

            {/* GOOGLE BUTTON */}
            <button className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md">
              
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 40 40"
              >
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758L31.1742 32.3392C33.9958 29.7375 36.6667 25.5225 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span>Continue with Google</span>
            </button>

            {/* DIVIDER */}
            <div className="my-8 flex items-center">
              <span className="h-px flex-1 bg-slate-200" />

              <span className="px-4 text-xs font-medium uppercase tracking-wider text-slate-400">
                or login with email
              </span>

              <span className="h-px flex-1 bg-slate-200" />
            </div>

            {/* FORM */}
            <form className="space-y-5">
              
              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot Password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {/* REMEMBER */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  Remember me
                </label>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-[0.98]"
              >
                Login Account
              </button>
            </form>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <span>Don&apos;t have an account?</span>

              <button className="font-semibold text-indigo-600 hover:text-indigo-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;