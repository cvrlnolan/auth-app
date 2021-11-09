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

type Props = {
  setAuth: Function;
};

const Signup = (props: Props) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const signupClick = async () => {
    // console.log(value);
    const success = await signup("emailPassword", {
      email: value.email,
      password: value.password,
    });
    if (success) {
      // console.log("logged in");
      alert("Logged in");
    } else {
      // console.log("Error encountered");
      alert("Error encountered");
    }
  };

  return (
    <>
      <div className="auth_card">
        <DevLogo width={131} height={22} />
        <p className="text-center tracking-tight">
          Join thousands of learners from around the world
        </p>
        <p className="text-center font-thin tracking-tight">
          Master web development by making real-life projects. There are
          multiple paths for you to choose.
        </p>
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
        <button className="auth_button" onClick={signupClick}>
          Start coding now
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
          Already a member ?{" "}
          <p className="auth_link" onClick={() => props.setAuth(true)}>
            Login.
          </p>
        </p>
      </div>
    </>
  );
};

export default Signup;
