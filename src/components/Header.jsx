import React from "react";
import { lOGO_URl } from "../utils/constant";
import { useState} from "react";

export default function Header() {

  // let btn = "login"
  const [btn, setBtn] = useState("Login");

  return (
    <header className="sticky top-0 z-50 p-0 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <img
            className="w-14"
            src={lOGO_URl}
            alt="img logo"
          />
          <div>
            <a href="#" className="p-2">
              Home
            </a>
            <a href="#" className="p-2">
              Search
            </a>
            <a href="#" className="p-2">Cart</a>
            <button className="rounded p-2"
              onClick={() => {
                btn === "Login" ?setBtn("Logout"):setBtn("Login");
              }
            }
            >{btn}</button>
          </div>
        </div>
      </nav>
    </header>
  );
}