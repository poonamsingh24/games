import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="text-left md:text-center py-10 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Gamers</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptates cumque voluptatibus. Ipsam voluptates cumque
            voluptatibus.
          </p>
        </div>
        <div>
          <ul className="flex gap-5 justify-center mb-5">
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="text-center ">
          <p>gamersin@.com</p>
          <p className=" border-t border-white/30 py-5 mt-2">
            Copyright &copy; 2022. All rights resevered
          </p>
        </div>
      </div>
    </div>
  );
}
