"use client";
import Image from "next/image";
import { movies } from "../constants";
import { useState } from "react";

type prop = {
  title?: string;
};

const Rowposts = ({ title }: prop) => {
  const [vid, setVid] = useState<string | undefined>("");

  return (
    <div className="text-white px-10">
      <h2 className="my-3 font-extrabold">
        {title ? title : "Netflix originals"}
      </h2>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="scroll w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
        >
          {movies.map((movie) => (
            <div
              key={movie.Title}
              className="text-center py-2 inline-block  cursor-pointer hover:scale-105  ease-in-out duration-300"
            >
              {title ? (
                movie.Genre.includes(title) && (
                  <div onClick={() => setVid(movie.vid)} className="px-2">
                    <Image
                      src={`${movie.Poster}`}
                      width={1024}
                      height={960}
                      className="h-80 w-56"
                      alt="poster"
                    />
                    <h4 className="mt-2">{movie.Title}</h4>
                  </div>
                )
              ) : (
                <div className="px-2" onClick={() => setVid(movie.vid)}>
                  <Image
                    src={`${movie.Poster}`}
                    width={1024}
                    height={960}
                    className="h-80 w-56"
                    alt="poster"
                  />
                  <h4 className="mt-2">{movie.Title}</h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {vid && (
        <div id="video">
          <button
            className="bg-black/20 text-white float-right text-3xl p-2 hover:text-black hover:bg-slate-300 flex items-center justify-center mb-2
              me-5"
            onClick={() => setVid("")}
          >
            close
          </button>
          <iframe
            className="h-52 sm:h-96 md:h-[30rem] w-full pe-5"
            src={`https://www.youtube.com/embed/${vid}?autoplay=true`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
    </div>
  );
};

export default Rowposts;
