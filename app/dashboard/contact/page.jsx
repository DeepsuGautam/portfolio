import { GetLimitedDatas } from "@/functions/get_data/GetDatas";
import contact from "@/models/contact";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }) => {
  const pageNo = parseInt(searchParams?.page || 0);
  const data = await GetLimitedDatas(contact, -1, pageNo || 0, 40);

  return (
    <div className="w-full flex flex-wrap p-[20px] gap-[20px]">
      {/* filtering nav */}
      {Array?.isArray(data) &&
        data?.map((item, index) => (
          <Link
            href={`/dashboard/contact/${(item?._id).toString()}`}
            key={index}
            className="w-full"
          >
            <div
              className="w-full bg-white  gap-[20px] shadow-xl rounded-xl cursor-pointer text-[12px] transition-all duration-300 justify-between hover:bg-slate-50 py-[10px] px-[20px] flex"
              key={index}
            >
              <h3 className="w-fit max-w-[300px] overflow-hidden whitespace-nowrap truncate font-semibold text-slate-700">
                {item?.email}
              </h3>
              <p className="text-slate-500 overflow-hidden whitespace-nowrap truncate w-full">
                {item?.subject}
              </p>
              <h3 className="min-w-fit  overflow-hidden whitespace-nowrap truncate font-semibold text-slate-700">
                {item?.month}
                {"/"}
                {item?.date}
              </h3>
            </div>
          </Link>
        ))}

      <div className="w-full flex gap-[20px] flex-wrap justify-start py-[20px]">
        <Link href={`/dashboard/contact?page=${pageNo > 0 ? pageNo - 1 : 0}`}>
          <button className="w-fit py-[5px] px-[20px] border-2 border-slate-600 rounded-xl text-[12px] text-slate-600 font-medium transition-all duration-300 hover:bg-slate-600 hover:text-white">
            Previous
          </button>
        </Link>
        <Link href={`/dashboard/contact?page=${pageNo + 1}`}>
          <button className="w-fit py-[5px] px-[20px] border-2 border-slate-600 rounded-xl text-[12px] text-slate-600 font-medium transition-all duration-300 hover:bg-slate-600 hover:text-white">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
