"use server";

import BackupDB from "@/functions/connection/BackupDB";
import ConnectDB from "@/functions/connection/ConnectDB";
import { del_images, add_covers, add_images } from "@/functions/files/get_images";
import projects from "@/models/projects";
import { revalidatePath } from "next/cache";

export const uploadTopImage = async (data) => {
  const image = await data?.get("image");
  await del_images("covers/home_cover.jpg");
  await add_covers(image, "covers", "home_cover.jpg");
  revalidatePath("/");
  revalidatePath("/dashboard")
  return;
};


export const uploaAbtImage=async(data)=>{
  const image = await data?.get("image");
  await del_images("covers/about_cover.jpg");
  await add_covers(image, "covers", "about_cover.jpg");
  revalidatePath("/");
  revalidatePath("/dashboard")
  return;
}

export const addProject = async(data)=>{
  await ConnectDB();
  await BackupDB()
  const image = await data?.get("image");
  const name=  await add_images(image, "projects", "project");
  if(!name?.success){
    return revalidatePath("/dashboard");
  }
  const newObj = {
    image:name?.file,
    title:data?.get("title"),
    link:data?.get("link")
  }
  const newProject = new projects(newObj);
  await newProject.save();
  revalidatePath("/");
  revalidatePath("/dashboard")
}