"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Page = ({ params }: { params: { movie: string } }) => {
  const vid = params.movie;

  const route = useRouter();
  return (
    <div className="bg-zinc-900 -mt-16">
      {vid && (
        <div className="pt-16">
          <button
            className=" text-white float-right text-3xl p-2 hover:opacity-60  flex items-center justify-center mb-2
              me-5"
            onClick={() => route.push("/")}
          >
            <IoCloseCircleOutline />
          </button>
          <iframe
            className="w-full h-96 md:h-[40rem] xl:h-[60rem] 2xl:h-screen"
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

export default Page;
