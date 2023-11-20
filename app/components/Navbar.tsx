import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-black px-9 h-12 ">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="NetflixLogo"
        width={1920}
        height={40}
        className="w-28 h-fit "
      />
      <Image
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
        width={1920}
        height={30}
        className="w-10 h-fit"
      />
    </div>
  );
};

export default Navbar;
