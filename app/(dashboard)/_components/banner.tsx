import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section
      className="bg-gray-900 text-white"
      style={{ backgroundColor: "#000" }}>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Simplify Bill Splitting.
            <span className="block text-blue-500">
              Effortless Billing System
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl">
            Manage orders and split bills with ease.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
            
              className="block px-8 py-3 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              href="/make_expense">
              Create Order
            </Link>

            <Link
              className="block px-8 py-3 text-base font-medium text-white bg-red-500 rounded-md hover:bg-reg-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              href="/make_expense">
              Add Friends
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Banner;
