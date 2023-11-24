"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const route = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="w-full sticky top-0  z-30 flex justify-between max-w-screen-2xl mx-auto items-center bg-black/5 md:px-9 px-3 h-16 ">
      <Link href="/" className=" max-sm:w-4/12">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="NetflixLogo"
          width={1920}
          height={40}
          className="w-28 h-fit"
        />
      </Link>

      <div className="flex gap-2 max-sm:gap-1 items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            route.push(`/${search}`);
          }}
          className=" shadow-sm flex-row items-center justify-center"
        >
          <input
            className="text-white font-bold py-1 bg-transparent max-sm:w-32 border-b-[1px] outline-none"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit" className="text-white font-bold text-2xl ">
            <CiSearch />
          </button>
        </form>
        <Image
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
          width={1920}
          height={30}
          className="w-10 h-fit"
        />
      </div>
    </div>
  );
};

export default Navbar;
