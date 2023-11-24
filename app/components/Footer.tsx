import React from "react";
import { footdata } from "../constants";

function Footer() {
  return (
    <div className="bg-zinc-900 py-8">
      <footer className="max-w-screen-2xl mx-auto px-3 md:px-10 flex-col text-gray-500">
        <p>Questions? Call 000-800-919-1694 </p>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 mt-8 text-sm">
          {footdata.map((data) => (
            <p className="py-4 cursor-pointer" key={data}>
              {data}
            </p>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
