"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { uploaAbtImage } from "./HandleUploads";

const AboutImage = ({ oldImage }) => {
  const [newFile, setNewFile] = useState("");
  const image = useRef(null);

  return (
    <form action={uploaAbtImage} className="w-full p-[20px] flex flex-wrap gap-[20px] justify-center">
      <Image
        src={newFile || oldImage}
        width={1000}
        height={1000}
        alt=""
        className="w-full h-[30rem] object-cover object-center rounded-xl bg-white shadow-xl"
      />
      <br />
      <br />
      <div className="w-full flex flex-wrap justify-center gap-[10px]">
        <button
          onClick={() => {
            image?.current?.click();
          }}
          type="button"
          className="w-fit px-[20px] py-[5px] bg-slate-500 transition-all duration-300 rounded-full text-white hover:bg-slate-700 text-[16px]"
        >
          Choose Image
        </button>
        <button
          onClick={() => {
            setNewFile("");
            image.current.value = null;
          }}
          type="button"
          className="w-fit px-[20px] py-[5px] bg-slate-500 transition-all duration-300 rounded-full text-white hover:bg-slate-700 text-[16px]"
        >
          Reset Image
        </button>
        <button
          type="submit"
          className="w-fit px-[20px] py-[5px] bg-blue-400 transition-all duration-300 rounded-full text-white hover:bg-blue-600 text-[16px]"
        >
          Save Image
        </button>
        <input
        id="image"
          type="file"
          accept="image/*"
          ref={image}
          className="hidden"
          onChange={(e) => {
            const file = e?.target?.files[0];
            if (!file) return;
            const blob = URL.createObjectURL(file);
            return setNewFile(blob);
          }}
          name="image"
        />
      </div>
    </form>
  );
};

export default AboutImage;
