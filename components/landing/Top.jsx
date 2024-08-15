"use server"
import { get_images } from "@/functions/files/get_images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeIn from "../reusable/FadeIn";

const Top = async() => {
  return (
    <section
      id=""
      className="w-full flex flex-wrap-reverse justify-evenly py-[5rem] bg-slate-100"
    >
      <div className="w-full max-w-[50rem] flex flex-col justify-center gap-[2rem] px-[3rem]">
        <FadeIn addistyle={{}}>
        <h1 className="text-[40px] text-slate-700 font-semibold">
          Exceptional Websites for Every Need
        </h1>
        </FadeIn>
        <FadeIn addistyle={{}}>
        <p className="text-[18px] text-slate-500">
          Empowering individuals, small firms, and large organizations with
          custom-tailored, stunning websites designed to elevate your online
          presence.
        </p>
        </FadeIn>
        <FadeIn addistyle={{marginTop:"10px"}}>
        <Link
          href="/contact"
          className="transition-all my-[10px] w-fit rounded-full duration-300 h-fit text-[16px] bg-slate-700 text-white hover:bg-slate-800 py-[8px] px-[30px] "
        >
          Contact Now!
        </Link>
        </FadeIn>
      </div>

      <div className="w-full p-[3rem] max-w-full md:max-w-[50rem] h-[40rem] md:h-[60rem]">
        <FadeIn addistyle={{height:"100%"}}>
        <Image
        loading="lazy"
        width={500}
        height={600}
          className="w-full rounded-2xl shadow-2xl object-cover h-full  bg-white fallback"
          alt=""
          src={get_images("covers", "home_cover.jpg")}
        />
        </FadeIn>
      </div>
    </section>
  );
};

export default Top;
