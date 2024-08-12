import TopImage from "@/components/dashboard/TopImage";
import React from "react";
import { get_images } from "@/functions/files/get_images";
import AboutImage from "@/components/dashboard/AboutImage";
import service from "@/models/services";
import { GetAll } from "@/functions/get_data/GetDatas";
import EditService from "@/components/dashboard/EditService";
import EditProjects from "@/components/dashboard/EditProjects";
import projects from "@/models/projects";
import Image from "next/image";
import Delete from "@/components/dashboard/Delete";
import { revalidatePath } from "next/cache";
import {del_images} from "@/functions/files/get_images"
import ConnectDB from "@/functions/connection/ConnectDB";
import BackupDB from "@/functions/connection/BackupDB";

const page = async () => {
  const topImg = get_images("covers", "home_cover.jpg");
  const abtImg = get_images("covers", "about_cover.jpg");
  const services = await GetAll(service, -1);
  const project = await GetAll(projects, -1);

  const handleProjectDel=async(title)=>{
    "use server"
    await ConnectDB();
    await BackupDB()
    const prj = await projects.findOne({title});
    await del_images(`projects/${prj?.image}`);
    await projects.findOneAndDelete({title})
    revalidatePath("/dashboard")
  }

  return (
    <div className="w-full p-[20px]">
      <h3 className="text-center w-full text-[30px] font-bold text-slate-700">
        Change Hero Image
      </h3>
      <TopImage oldImage={topImg} />
      <br />
      <br />
      <br />
      <br />

      <h3 className="text-center w-full text-[30px] font-bold text-slate-700">
        Change About Cover
      </h3>
      <AboutImage oldImage={abtImg} />
      <br />
      <br />
      <br />
      <br />
      <h3 className="text-center w-full text-[30px] font-bold text-slate-700">
        Control Services {"(" + services?.length + ")"}
      </h3>
      <EditService data={services} />
      <br />
      <br />
      <br />
      <br />
      <h3 className="text-center w-full text-[30px] font-bold text-slate-400">
        Control Services {"(" + services?.length + ")"}
      </h3>
      <EditProjects>{Array.isArray(project) && project.map((item, index)=>(
        <div className="w-[300px] p-0 bg-white rounded-xl shadow-xl overflow-hidden" key={index}>
          <Image src={get_images("projects", item?.image)} width={300} height={300} className="w-full h-[300px] object-cover object-top"/>
          <br />
          <div className="w-full p-[20px]">
            <h3 className="w-full text-[16px] font-bold text-slate-700">{item?.title}</h3>
            <br />
            <p className="w-full text-[12px] text-slate-500 font-bold">{item?.link}</p>
            <br />
            <Delete item={item?.title} handleDelete={handleProjectDel}/>

          </div>

        </div>
      ))}</EditProjects>
    </div>
  );
};

export default page;
