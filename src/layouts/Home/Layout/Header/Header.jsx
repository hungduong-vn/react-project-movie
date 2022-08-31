import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  window.onscroll = () => {
    const headerEle = document.querySelector(".homeHeader");
    const signUpBtn = document.querySelector(".homeSignUp");
    if (window.scrollY > 0) {
      // console.log('add');
      headerEle.classList.add("homeHeader__scrolled");
      headerEle.classList.remove("py-4");
      signUpBtn.classList.remove("py-3");
      signUpBtn.classList.add("py-2");
    } else {
      // console.log('remove');
      headerEle.classList.remove("homeHeader__scrolled");
      headerEle.classList.add("py-4");
      signUpBtn.classList.add("py-3");
      signUpBtn.classList.remove("py-2");
    }
  };
  const homeLinkClassName =
    "flex items-center px-4 -mb-1 border-b-2 border-transparent homeLink";
  return (
    <header className="px-4 py-4 bg-gray-100 text-gray-800 w-100 homeHeader">
      <div className="container grid grid-cols-4 h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          aria-label="Back to homepage"
          className="flex items-center col-span-1"
          to="/"
        >
          <span className="material-symbols-outlined homeLogo">stars</span>

        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex justify-center col-span-2">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive
                  ? homeLinkClassName + " activeHomeLink"
                  : homeLinkClassName
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive
                  ? homeLinkClassName + " activeHomeLink"
                  : homeLinkClassName
              }
              to="news"
            >
              News
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive
                  ? homeLinkClassName + " activeHomeLink"
                  : homeLinkClassName
              }
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex col-span-1">
          <NavLink
            to="sign-in"
            className="self-center px-8 py-3 rounded homeSignIn font-semibold text-gray-50"
          >
            Sign in
          </NavLink>
          <NavLink
            to="sign-up"
            className="self-center px-8 py-3 font-semibold rounded homeSignUp"
          >
            Sign up
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
