import React from "react";
import logo from "../../public/logos.png";
import { Link } from "react-router-dom";
import AllGames from "../Page/AllGames";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto px-4 text-white md:px-0 flex justify-between items-center py-2 ">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" width={40} />
          <span className="font-bold md:text-2xl">Gamers</span>
        </Link>
        <Link to="/allGames" className="underline">
          All Games
        </Link>
        <div>
          <button className="bg-gray-600 hover:bg-gray-500 px-5 py-2  font-bold">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
