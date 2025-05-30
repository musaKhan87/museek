import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="w-full h-[80px] bg-black z-50  fixed bottom-0 md:top-0 text-white flex justify-around md:justify-center items-center gap-[50px] p-[20px] rounded-t-[30px] ">
        <NavLink to={"/"}>
          <TiHome className="w-[25px] h-[25px]" />
        </NavLink>
        <NavLink to={"/search"}>
          <IoSearch className="w-[25px] h-[25px]" />
        </NavLink>
        <NavLink to={"/playlist"}>
          <RiPlayListLine className="w-[25px] h-[25px]" />
        </NavLink>
        <NavLink to={"/liked"}>
          <IoMdHeart className="w-[25px] h-[25px]" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;
