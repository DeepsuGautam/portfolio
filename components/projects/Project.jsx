"use server"
import { GetAll } from "@/functions/get_data/GetDatas";
import projects from "@/models/projects";
import React from "react";
import ProjectCard from "./ProjectCard";
import FadeLeft from "../reusable/FadeLeft";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Project = async () => {
  const data = await GetAll(projects, -1);
  return (
    <section id="projects" className="w-full px-[20px] pt-[6rem] bg-slate-700">
      <div className="w-full max-w-[160rem] mx-auto py-[4rem] p-[2rem] text-white">
        <FadeLeft>
          <h2 className="w-full text-[40px] font-semibold">
            Completed Website Projects
          </h2>
        </FadeLeft>
        <br />

        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent className="py-[3rem]">
            {Array?.isArray(data) &&
              data?.map((item, index) => (
                <CarouselItem
                  className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  key={index}
                >
                  <ProjectCard data={item} key={index} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Project;
