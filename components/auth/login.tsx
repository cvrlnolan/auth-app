import React, { useState } from "react";
import DevLogo from "@/components/layout/devLogo";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
  FaAt,
  FaKey,
} from "react-icons/fa";
import signup from "@/lib/auth/signup";
import login from "@/lib/auth/login";

type Props = {
  setAuth: Function;
};

const Login = (props: Props) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const loginClick = async () => {
    const success = await login({
      email: value.email,
      password: value.password,
    });
    if (success) {
      console.log("Logged in");
      alert("Logged.");
    } else {
      console.log("Error encountered.");
      alert("Error encountered.");
    }
  };

  return (
    <>
      <div className="auth_card">
        <DevLogo width={131} height={22} />
        <p className="text-center tracking-tight">Login</p>
        <label htmlFor="email" className="input_label">
          <FaAt className="input_icon" />
          <input
            className="auth_input"
            placeholder="Email"
            id="email"
            type="email"
            required
            onChange={(e) => {
              setValue((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            value={value.email}
          />
        </label>
        <label htmlFor="password" className="input_label">
          <FaKey className="input_icon" />
          <input
            className="auth_input"
            placeholder="Password"
            id="password"
            type="password"
            required
            onChange={(e) => {
              setValue((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
            value={value.password}
          />
        </label>
        <button className="auth_button" onClick={loginClick}>
          Login
        </button>
        <p className="text-center font-thin tracking-tight">
          or continue with this social profile:
        </p>
        <div className="flex flex-wrap space-x-2 mx-auto">
          <button className="social_button" onClick={() => signup("google")}>
            <FaGoogle className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button className="social_button" onClick={() => signup("facebook")}>
            <FaFacebookSquare className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button className="social_button" onClick={() => signup("twitter")}>
            <FaTwitter className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button className="social_button" onClick={() => signup("github")}>
            <FaGithub className="w-4 h-4 mx-auto text-gray-500" />
          </button>
        </div>
        <p className="text-center font-thin tracking-tight">
          Don&apos;t have an account yet ?{" "}
          <p className="auth_link" onClick={() => props.setAuth(false)}>
            Register.
          </p>
        </p>
      </div>
    </>
  );
};

export default Login;
