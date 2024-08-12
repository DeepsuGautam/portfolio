import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const layout = ({ children }) => {
  return (
    <main className="w-full min-h-screen bg-slate-300">
      <section className="w-full max-w-[1000px] bg-slate-100 shadow-xl overflow-x-hidden min-h-screen mx-auto">
        <nav className="w-full max-w-[1000px] bg-white flex justify-between fixed shadow-xl">
          <Link
            href="/"
            className="w-fit flex h-full p-[20px] text-[20px] font-bold text-slate-600 transition-all duration-300 hover:text-blue-400 "
          >
            <FaArrowLeft className="m-[5px]" />
          </Link>
          <div className="w-fit flex gap-[10px] p-[20px]">
            <Link href={"/dashboard"}>
               <button className="w-fit text-[16px] text-white bg-slate-500 py-[5px] px-[15px] rounded-full transition-all duration-300 hover:bg-slate-800">Dashboard</button>
            </Link>
            <Link href={"/dashboard/contact"}>
               <button className="w-fit text-[16px] text-white bg-slate-500 py-[5px] px-[15px] rounded-full transition-all duration-300 hover:bg-slate-800">Contact</button>
            </Link>
          </div>
        </nav>
        <div className="w-full pt-[8rem]">
        {children}
        </div>
      </section>
    </main>
  );
};

export default layout;
