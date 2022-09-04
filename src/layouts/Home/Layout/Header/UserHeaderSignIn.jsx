import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHeaderSignIn() {
  return (
    <div className="items-center flex-shrink-0 hidden lg:flex col-span-1">
      <NavLink
        to="sign-in"
        className="self-center px-8 py-3 rounded homeSignIn font-semibold text-gray-50"
      >
        Sign in
      </NavLink>
      <NavLink
        to="sign-up"
        className="self-center font-semibold rounded homeSignUp"
      >
        Sign up
      </NavLink>
    </div>
  );
}
