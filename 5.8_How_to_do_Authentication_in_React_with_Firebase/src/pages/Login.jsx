import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e)=>{
    e.preventDefault();
    try {
        const user = await logInWithEmailAndPassword(email, password);
        console.log(user)
        navigate('/home')
    } catch (error) {
       console.error(error.message);
    }
  }
  return (
    <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-4xl font-semibold">Login Form</h1>
      </div>
      <form onSubmit={handleLogin} className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <input
          className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
        />
        <input
          className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
        />
        <div className="flex items-center">
          <div className="w-1/2 flex items-center">
            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
            <label htmlFor="remember-me">Remember me!</label>
          </div>
          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
           
          >
            Log In
          </button>
        </div>
      </form>
      <div className="text-center py-5">
            <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
              No account?
            </p>
            <Link
              to={"/registration"}
              className="text-green-500 underline underline-offset-2"
            >
              {" "}
              Register
            </Link>
          </div>
    </main>
  );
};

export default Login;
