"use client";
import { useState } from "react";
import { movies } from "../constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Movie {
  Title: string;
  vid: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
}

export default function Page({ params }: { params: { search: string } }) {
  const searchTerm = params.search.toLowerCase(); // Convert search term to lowercase

  const searchResults = movies.filter(
    (movie: Movie) =>
      Object.values(movie)
        .map((value) => String(value).toLowerCase()) // Convert all values to lowercase strings
        .some((lowercaseValue) => lowercaseValue.includes(searchTerm)) //returns true if there is included else false
  );

  const [vid, setVid] = useState<string | undefined>(
    searchTerm == "watch%20avatar" ? "5PSNL1qE6VY" : ""
  );
  const route = useRouter();

  return (
    <div className="bg-zinc-900 min-h-screen text-white px-10 pt-20 -mt-20">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-3xl py-5 ">
          {" "}
          {params.search.replaceAll("%20", " ")}
        </h1>
        {searchResults.length === 0 && searchTerm !== "watch%20avatar" && (
          <h1 className="p-5 mt-5 font-semibold text-black bg-white rounded-md m-auto">
            Search result Not Found
          </h1>
        )}
        {vid && (
          <div id="video">
            <button
              className=" text-white float-right text-3xl p-2 hover:opacity-60  flex items-center justify-center mb-2
              me-5"
              onClick={() =>
                searchTerm == "watch%20avatar" ? route.push("/") : setVid("")
              }
            >
              <IoCloseCircleOutline />
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
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 ">
          {searchResults.map((result) => (
            <div
              key={result.Title}
              className="px-2 flex w-full max-md:flex-col max-md:px-1 shadow-xl cursor-pointer"
              onClick={() => setVid(result.vid)}
            >
              <Image
                src={`${result.Poster}`}
                width={1024}
                height={960}
                className="h-80 w-56"
                alt="poster"
              />
              <div className="flex flex-col justify-between p-2 max-md:gap-2 max-md:p-0">
                <h4 className="mt-2 text-3xl">
                  {result.Title}({result.Year})
                </h4>
                <h4 className="opacity-30 ">{result.Actors}</h4>
                <h4 className="opacity-30 ">Directors: {result.Director}</h4>
                <h4 className="opacity-30 ">{result.Language}</h4>
                <h4 className="opacity-30 ">Awards: {result.Awards}</h4>
                <h4 className="opacity-30 ">Written by :{result.Writer}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
