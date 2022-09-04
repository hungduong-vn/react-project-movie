import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import UserHeaderSignedIn from "./UserHeaderSignedIn";
import UserSignIn from "./UserSignIn";
export default function Header() {
  window.onscroll = () => {
    const headerEle = document.querySelector(".homeHeader");
    const signUpBtn = document.querySelector(".homeSignUp");
    if (window.scrollY > 0) {
      // console.log('add');
      headerEle.classList.add("homeHeader__scrolled");
      signUpBtn.classList.add("homeSignUp__scrolled");
    } else {
      // console.log('remove');
      headerEle.classList.remove("homeHeader__scrolled");
      signUpBtn.classList.remove("homeSignUp__scrolled");
    }
  };
  const userState = useSelector((state) => state.userReducer);
  const renderAccount = () => {
    if (userState.userInfo) {
      return <UserHeaderSignedIn userState={userState} />;
    } else {
      return <UserSignIn />;
    }
  };
  const homeLinkClassName =
    "flex items-center px-4 -mb-1 border-b-2 border-transparent homeLink";
  return (
    <header className="bg-gray-100 text-gray-800 w-100 homeHeader">
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
        {renderAccount()}
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
