import React, { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";

const Register = () => {
  const { signIn, googleLogIn, user, setUser, setNameAndPhoto } =
    use(AuthContext);
  console.log(user);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    console.log(email, password, photoURL, name);
    const passWordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passWordPattern.test(password)) {
      if (!/[a-z]/.test(password)) {
        alert("Password must contain at least 1 lowercase");
        return;
      }
      if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least 1 Uppercase");
        return;
      }
      if (password.length < 6) {
        alert("Password must have 6 digit");
        return;
      }
    }

    signIn(email, password)
      .then(() => {
        alert("Sign In Successful");
        setNameAndPhoto(name, photoURL)
          .then(() => {
            // setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
    // e.target.reset();
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        console.log("user");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-3">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">PhotoURL</label>
                  <input
                    name="photoURL"
                    type="text"
                    className="input"
                    placeholder="PhotoURL"
                  />
                  <label className="label">Password</label>
                  <div>
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="input"
                        placeholder="Password"
                        onFocus="border"
                      />
                      <button
                        onClick={handleShowPassword}
                        className="btn border-none btn-xs absolute top-2 right-2">
                        {showPassword ? (
                          <IoMdEyeOff className="text-xl" />
                        ) : (
                          <IoMdEye className="text-xl" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
              <Link to="/login">
                <p className="underline w-full">Already have an account?</p>
              </Link>
              <p className="text-center">
                ---------------------------- or ----------------------------
              </p>
              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5] my-5">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
