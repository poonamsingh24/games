import React from "react";
import hero from "../../public/hero.jpg";
import Gamelist from "../components/gamelist/Gamelist";
import bgmi from "../../public/bgmi.jpg";
import GamelistTwo from "../components/gamelist/GamelistTwo";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <section className=" border-b-2 border-black/20">
      <div className="relative">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 bottom-0 z-10 right-0 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 md:px-0 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] ">
            <h1 className="md:text-4xl text-xl text-center font-bold text-white pb-4">
              Find your Favourites Game
            </h1>
            <form className="border overflow-hidden shadow-lg w-full md:w-[450px] flex rounded-lg">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none px-4 md:py-3"
              />
              <button className="text-black bg-white px-5 py-2 outline-none font-bold">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <Gamelist />
      <div className="relative">
        <img src={bgmi} alt="" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-black/60 z-50">
          <h1 className="absolute  text-xl md:text-5xl drop-shadow-lg shadow-white/100 font-semibold z-40 h-full left-[50%] top-[50%] translate-x-[-50%]  text-white">
            Best Sale of the Year
          </h1>
        </div>
      </div>
      <GamelistTwo />

      <Footer />
    </section>
  );
}
