import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Swal from "sweetalert2";
import UseAuth from "../Context/UseAuth";

const Login = () => {
  const { googleLogIn, logIn, setLoading, loading } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  let [demoEmail, setDemoEmail] = useState("");
  let [demoPassword, setDemoPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        {
          Swal.fire({
            title: "Login Successful",
            icon: "success",
          });
        }
        navigate(`${location.state ? location.state : "/"}`);
        setLoading(false);
      })
      .catch(() => {
        {
          Swal.fire({
            title: "Login Error",
            icon: "error",
          });
        }
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        {
          Swal.fire({
            title: "Login Successful",
            icon: "success",
          });
        }
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          title: "Login Error",
          icon: "error",
        });
      });
  };

  const handleDemoLogin = () => {
    setDemoEmail("demo@email.com");
    setDemoPassword("demoPass_11");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center mx-auto">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="hero min-h-screen bg-secondary">
        <div className="card w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-4">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  defaultValue={demoEmail}
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    defaultValue={demoPassword}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:cursor-pointer"
                    aria-label="Toggle password visibility">
                    {showPassword ? (
                      <IoMdEyeOff size={20} />
                    ) : (
                      <IoMdEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
            <button
              onClick={handleDemoLogin}
              className="btn btn-primary-outline w-full">
              Demo Login
            </button>

            <p className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="link link-primary">
                Register
              </Link>
            </p>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex gap-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
