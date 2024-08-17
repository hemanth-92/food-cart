import React from "react";
import { lOGO_URl } from "../utils/constant";

export default function Header() {
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
          </div>
        </div>
      </nav>
    </header>
  );
}