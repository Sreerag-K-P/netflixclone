import Image from "next/image";
import React from "react";
import { movies } from "../constants";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full -mt-16 h-[40rem] text-white relative">
      <Image
        src={movies[0].Images[3]}
        alt="bannerimg"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute w-1/2 max-md:w-full flex flex-col justify-center h-full gap-10 px-10 font-sans z-10">
        <div>
          <h1 className="font-extrabold text-7xl uppercase  tracking-tighter">
            {movies[0].Title}
          </h1>
          <p className="font-thin py-2 opacity-70 flex gap-1">
            {movies[0].Year} | {movies[0].Rated} | {movies[0].Runtime} |{" "}
            {movies[0].Genre}
          </p>
          <p>Directed by: {movies[0].Director}</p>
        </div>

        <div className=" flex gap-2 text-white">
          <Link href={`play/5PSNL1qE6VY`}>
            <button className="outline-none border-none font-bold rounded-md py-2 px-8 bg-slate-400/50 cursor-pointer hover:text-black hover:bg-slate-200">
              Play
            </button>
          </Link>

          <button className="outline-none border-none font-bold rounded-md py-2 px-8 bg-slate-400/50 cursor-pointer hover:text-black hover:bg-slate-200">
            My List
          </button>
        </div>
        <h1 className="leading-6 text-base max-w-sm">{movies[0].Plot}</h1>
        <h1>
          <span className="opacity-70">Starring:</span> {movies[0].Actors}
        </h1>
      </div>
      <div className="h-full w-full absolute bottom-0 bg-gradient-to-b from-transparent via-zinc-800/60 to-black "></div>
    </div>
  );
};

export default Banner;
