import React from "react";
import { get_images } from "@/functions/files/get_images";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  return (
      <div className="relative overflow-hidden cursor-pointer mainCard w-full h-[50rem] bg-white rounded-xl">
        <Image
          src={get_images("projects", data?.image)}
          className="absolute w-full object-cover object-top transition-all duration-300 h-full bg-white cardImage"
          width={700}
          height={600}
          alt=""
        />
        <div className="w-full bg-slate-100 bg-opacity-80 h-full absolute flex flex-col justify-center transition-all duration-500 innerCard">
          <h3 className="text-[24px] w-full text-center font-bold text-slate-800">
            {data?.title}
          </h3>
          <br />
          <Link href={data?.link} className="w-fit mx-auto" target="_blank">
             <button className="w-fit py-[7.5px] text-[16px] text-slate-800 border-solid border-2 rounded-full px-[40px] font-semibold transition-all duration-300 hover:bg-slate-800 hover:text-white" style={{border:"2px solid #1e293b "}}>Visit Site</button>
          </Link>
    
        </div>
      </div>
  );
};

export default ProjectCard;
