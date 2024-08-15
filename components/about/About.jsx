"use server"
import { get_images } from "@/functions/files/get_images";
import React from "react";
import FadeLeft from "../reusable/FadeLeft";
import Link from "next/link";

const About = async() => {

    const image = get_images("covers", "about_cover.jpg")

  return (
    <section
      className="w-full h-fit p-0 bg-cover bg-fixed"
      id="about"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="w-full py-[15rem] text-white px-[4rem] bg-slate-800 bg-opacity-70">
        <div className="w-full max-w-[1000px] mx-auto flex justify-end p-[20px] ">
          <div className="w-full max-w-[50rem]">
            <FadeLeft addistyle={{}}>
            <h2 className="text-[20px] font-semibold">About</h2>
            <h2 className="text-[40px] font-semibold">
              Your Website Developer
            </h2>
            </FadeLeft>
            <br />
            <FadeLeft addistyle={{}}>
            <p className="text-[18px] slate-100 text-shadow">
              Hello, I am Deepsu Gautam, a skilled Next.js and MERN stack
              developer. I am passionate about building fast, modern, and
              responsive websites. Download my CV to learn more about my journey
              and skills.
            </p>
            </FadeLeft>
            <br />
            <br />
            <FadeLeft addistyle={{}}>
                <Link href='#'>
                   <button className="w-fit font-medium px-[20px] py-[7.5px] text-[16px] border-2 bg-transparent rounded-xl transition-all bg-slate-800 bg-opacity-50 duration-300 hover:bg-white hover:text-slate-800" style={{borderColor:"white"}}>Download CV</button>
                </Link>
            </FadeLeft>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
