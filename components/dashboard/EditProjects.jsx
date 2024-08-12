"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { addProject } from "./HandleUploads";

const EditProjects = ({ children }) => {
  const [file, setFile] = useState("");
  const imgref = useRef(null);

  return (
    <section className="w-full p-[20px] bg-slate-700 overflow-x-scroll">
      <div className="w-fit flex gap-[20px]">
        <form action={addProject} className="w-[300px] bg-white rounded-xl shadow-xl overflow-hidden">
          <Image
            src={file || "/add.png"}
            onClick={()=>{imgref?.current?.click()}}
            width={300}
            height={300}
            className="w-full h-[300px] bg-slate-100 object-cover object-center cursor-pointer hover:bg-slate-200 transition-all duration-300"
          />
          <br />
          <div className="w-full p-[20px]">
            <input
            id="image"
            name="image"
              type="file"
              accept="image/*"
              required
              className="hidden"
              ref={imgref}
              onChange={(e) => {
                const file = e?.target?.files[0];
                if(!file) return;
                const url = URL.createObjectURL(file);
                setFile(url);
              }}
            />
            <input
              type="text"
              name="title"
              id="title"
              className="w-full text-slate-700 text-[16px] font-bold focus:outline-none"
              placeholder="Title"
              required
            />
            <br />
            <br />
            <input
              type="text"
              name="link"
              id="link"
              className="w-full text-slate-700 text-[12px] font-bold focus:outline-none"
              placeholder="Link"
              required
            />
            <br />
            <br />
            <button
              type="submit"
              className="w-full bg-blue-400 rounded-xl text-white transition-all duration-300 hover:bg-blue-500 text-[14px] p-[5px]"
            >
              Save
            </button>
          </div>
        </form>

        {children}
      </div>
    </section>
  );
};

export default EditProjects;
