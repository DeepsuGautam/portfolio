import contact from "@/models/contact";
import React from "react";

const page = async ({ params }) => {
  const data = await contact.findOne({ _id: params?.id });
  return (
    <div className="w-full p-[20px] text-[16px] text-slate-700">
      <h2 className="w-full font-semibold text-slate-500">
       {data?.year}-{data?.month}-{data?.date}
      </h2>
      <br />
      <b>From{","}</b>
      <br />
      <p className="w-full">
        {data?.email},
        <br />
        {data?.firstname} {data?.lastname}
        <br />
        {data?.phone}
      </p>
      <br />
      <p>
        <b>Subject {":"}</b> {data?.subject}
      </p>
      <br />
      <p>
        {data?.message}
      </p>
    </div>
  );
};

export default page;
