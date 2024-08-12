import service from "@/models/services";
import React from "react";
import Delete from "./Delete";
import { revalidatePath } from "next/cache";

const EditService = async ({ data }) => {
  const newData = [...data];

  const makeEdit = async (recieve) => {
    "use server";
    const servArr = [recieve.get("services1"),recieve.get("services2"),recieve.get("services3") ];
    const newObject = {
        title:recieve.get("title"),
        text:recieve.get("text"),
        services:servArr
    };
    const newServ = new service(newObject);
    await newServ.save();
    revalidatePath("/dashboard")
  };

  const handleDelete = async(title)=>{
    "use server"
    await service.findOneAndDelete({title:title});
    revalidatePath("/dashboard")
  }

  return (
    <section className="w-full p-[20px] bg-slate-500 overflow-x-scroll">
      <div className="w-fit flex gap-[20px] bg-transparent">
        <form
          action={makeEdit}
          className="w-[300px] rounded-xl p-[20px] bg-white shadow-xl"
        >
          <input
            type="text"
            required
            name="title"
            id="title"
            placeholder="Title"
            className="w-full text-[16px] font-bold text-slate-700 focus:outline-none"
          />
          <br />
          <br />
          <textarea
            name="text"
            id="text"
            type="text"
            placeholder="Text"
            className="w-full text-slate-600 text-[16px] h-[70px] focus:outline-none"
            required
          />
          <br />
          {Array.from(Array(3)).map((_, key) => (
            <input
              key={key}
              type="text"
              required
              name={`services${key + 1}`}
              id={`services${key + 1}`}
              placeholder={`services${key + 1}`}
              className="w-full text-[14px] font-semibold text-slate-500 px-[20px] pt-[10px] focus:outline-none"
            />
          ))}
          <br />
          <br />
          <button
            type="submit"
            className="w-full bg-blue-400 rounded-xl text-white transition-all duration-300 hover:bg-blue-500 text-[14px] p-[5px]"
          >
            Save
          </button>
        </form>
        {Array.isArray(newData) &&
          newData?.map((item, index) => (
            <div
              className="w-[300px] rounded-xl p-[20px] bg-white shadow-xl"
              key={index}
              style={{ width: "300px" }}
            >
              <h3 className="w-full text-[16px] font-bold text-slate-700">
                {item?.title}
              </h3>
              <br />
              <p className="w-full text-slate-600 text-[16px] h-[70px]">
                {item?.text}
              </p>
              <ul className="w-full">
                {item?.services?.map((list, key) => (
                  <li
                    key={key}
                    className="w-full text-[14px] font-semibold text-slate-500 px-[20px] pt-[10px]"
                  >
                    {list}
                  </li>
                ))}
              </ul>
              <br />
              <Delete item={item?.title} handleDelete={handleDelete}/>
            </div>
          ))}
      </div>
    </section>
  );
};

export default EditService;
