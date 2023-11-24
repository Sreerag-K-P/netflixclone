"use client";
import Image from "next/image";
import { movies } from "../constants";

import { useRouter } from "next/navigation";

type prop = {
  title?: string;
};

const Rowposts = ({ title }: prop) => {
  const route = useRouter();
  return (
    <div className="text-white px-3 md:px-10">
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
                  <div
                    onClick={() => route.push(`/play/${movie.vid}`)}
                    className="px-2"
                  >
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
                <div
                  className="px-2"
                  onClick={() => route.push(`/play/${movie.vid}`)}
                >
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
    </div>
  );
};

export default Rowposts;
