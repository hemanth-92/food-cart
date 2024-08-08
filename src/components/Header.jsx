import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 p-0 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <img
            className="w-14"
            src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
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