import Link from "next/link";
import React from "react";
import NavHolder from "./NavHolder";

const Nav = () => {
  return (
    <NavHolder>
    <header className="w-full fixed p-[2rem] h-[8rem] font-semibold flex justify-between sm:justify-around bg-white z-10 top-0 left-0 right-0">
      <Link href="/#" className="w-fit text-[2.5rem] py-[3px] font-bold text-slate-700">
        tika<span className="text-slate-400">.info</span>
      </Link>
      <nav className="w-fit hidden sm:flex gap-[2rem] text-[1.6rem] text-slate-600 font-medium">
        <Link
          href="/#about"
          className="transition-all duration-300 h-fit hover:text-slate-800 py-[1rem]"
        >
          ABOUT
        </Link>
        <Link
          href="/#services"
          className="transition-all duration-300 h-fit hover:text-slate-800 py-[1rem]"
        >
          SERVICES
        </Link>
        <Link
          href="/#projects"
          className="transition-all duration-300 h-fit hover:text-slate-800 py-[1rem]"
        >
          PROJECTS
        </Link>
      </nav>

      <nav className="w-fit flex gap-[2rem] text-[1.6rem] text-slate-600 font-medium">
        <Link
          href="/contact"
          className="transition-all rounded-full duration-300 h-fit bg-slate-700 text-white hover:bg-slate-800 py-[8px] px-[3rem] "
        >
          CONTACT
        </Link>
      </nav>
    </header>
    </NavHolder>
  );
};

export default Nav;
