import React from "react";
import { useForm } from "react-hook-form";
import Field from "./Field";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
    const navigate = useNavigate();
    const {setAuth} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const user = {...data}
        setAuth({user})
        navigate("/home")
    };

    return (
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900">
                    Welcome Back 👋
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Sign in to access your account
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div>
                    <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        register={register}
                        required="Email is required"
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <Field
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        register={register}
                        required="Password is required"
                        pattern={{
                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                            message:
                                "Password must contain 1 uppercase, 1 lowercase, 1 number and minimum 8 characters",
                        }}
                    />

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-slate-600">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300"
                        />
                        Remember me
                    </label>

                    <button
                        type="button"
                        className="font-medium text-sky-600 hover:text-sky-700"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.98]"
                >
                    Login Account
                </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <button
                    type="button"
                    className="font-semibold text-sky-600 hover:text-sky-700"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default LoginForm;