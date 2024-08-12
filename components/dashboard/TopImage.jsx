"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { uploadTopImage } from "./HandleUploads";

const TopImage = ({ oldImage }) => {
  const [newFile, setNewFile] = useState("");
  const image = useRef(null);

  return (
    <form action={uploadTopImage} className="w-full p-[20px] flex flex-wrap gap-[20px] justify-center">
      <Image
        src={newFile || oldImage}
        width={1000}
        height={1000}
        className="w-full max-w-[300px] h-[40rem] object-cover object-center rounded-xl bg-white shadow-xl"
      />
      <br />
      <br />
      <div className="w-full max-w-full sm:max-w-[200px] flex flex-col justify-center gap-0 ">
        <button
          onClick={() => {
            image?.current?.click();
          }}
          type="button"
          className="w-full h-fit px-[20px] mx-auto py-[5px] bg-slate-500 transition-all duration-300 rounded-full text-white hover:bg-slate-700 text-[16px]"
        >
          Choose Image
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setNewFile("");
            image.current.value = null;
          }}
          type="button"
          className="w-full h-fit px-[20px] mx-auto py-[5px] bg-slate-500 transition-all duration-300 rounded-full text-white hover:bg-slate-700 text-[16px]"
        >
          Reset Image
        </button>
        <br />
        <br />
        <button
          type="submit"
          className="w-full h-fit px-[20px] py-[5px] mx-auto bg-blue-400 transition-all duration-300 rounded-full text-white hover:bg-blue-600 text-[16px]"
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

export default TopImage;
