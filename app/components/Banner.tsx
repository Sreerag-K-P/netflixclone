import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[80vh] text-white relative">
      <Image
        src="/images/Banner.jpg"
        alt="bannerimg"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute w-1/2 flex flex-col gap-10 px-10 font-sans z-10">
        <h1 className="font-extrabold text-7xl uppercase mt-36 tracking-tighter">
          Money Heist
        </h1>
        <div className=" flex gap-2 text-white">
          <button className="outline-none border-none font-bold rounded-md py-2 px-8 bg-slate-400/50 cursor-pointer hover:text-black hover:bg-slate-200">
            Play
          </button>
          <button className="outline-none border-none font-bold rounded-md py-2 px-8 bg-slate-400/50 cursor-pointer hover:text-black hover:bg-slate-200">
            My List
          </button>
        </div>
        <h1 className="leading-6 text-base max-w-sm">
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </h1>
      </div>
      <div className="h-full w-full absolute bottom-0 bg-gradient-to-b from-transparent via-zinc-800/60 to-black "></div>
    </div>
  );
};

export default Banner;
