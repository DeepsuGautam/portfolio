import BackupDB from "@/functions/connection/BackupDB";
import ConnectDB from "@/functions/connection/ConnectDB";
import contact from "@/models/contact";
import { revalidatePath } from "next/cache";
import React from "react";

const page = async () => {
  const handleContact = async (data) => {
    "use server";
    await ConnectDB();
    await BackupDB();

    const newObj = {
      firstname: data?.get("firstname"),
      lastname: data?.get("lastname"),
      email: data?.get("email"),
      phone: data?.get("phone"),
      subject: data?.get("subject"),
      message: data?.get("message"),
    };

    const newContact = new contact(newObj);
    await newContact.save();
    revalidatePath("/contact");
  };

  return (
    <main className="w-full p-[2rem] pt-[10rem] bg-slate-200 min-h-screen flex flex-col justify-center">
      <form
        action={handleContact}
        className="w-full max-w-[660px] p-[20px] bg-white rounded-xl flex flex-wrap shadow-xl mx-auto gap-[20px]"
      >
        <h3 className="w-full text-[25px] font-bold text-slate-700">Contact</h3>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="w-full max-w-full md:max-w-[300px] border-2 text-[16px] p-[10px] text-slate-500 rounded-xl focus:outline-none"
          required
          placeholder="Firstname *"
        />{" "}
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="w-full max-w-full md:max-w-[300px] border-2 text-[16px] p-[10px] text-slate-500 rounded-xl focus:outline-none"
          required
          placeholder="Lastname *"
        />{" "}
        <input
          type="email"
          name="email"
          id="email"
          className="w-full max-w-full md:max-w-[300px] border-2 text-[16px] p-[10px] text-slate-500 rounded-xl focus:outline-none"
          required
          placeholder="Email *"
        />{" "}
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full max-w-full md:max-w-[300px] border-2 text-[16px] p-[10px] text-slate-500 rounded-xl focus:outline-none"
          required
          placeholder="Phone No *"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full  border-2 text-[16px] p-[10px] text-slate-500 rounded-xl focus:outline-none"
          required
          placeholder="Subject *"
        />
        <textarea
          type="text"
          name="message"
          id="message"
          className="w-full h-[150px] resize-none border-2 text-[16px] p-[10px] text-slate-500 rounded-xl focus:outline-none"
          required
          placeholder="Message *"
        />
        <button className="w-fit text-[14px] text-white py-[10px] px-[30px] rounded-xl bg-blue-400 transition-all duration-300 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
