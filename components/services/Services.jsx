"use server"
import { GetAll } from "@/functions/get_data/GetDatas";
import service from "@/models/services";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServCard from "./ServCard";
import FadeIn from "../reusable/FadeIn";

const Services = async () => {
  const data = await GetAll(service, 1);
  return (
    <section
      id="services"
      className="w-full  pt-[8rem] px-[4rem] bg-slate-100 text-[16px] text-slate-600 max-w-[160rem] mx-auto"
    >
      <FadeIn>
      <h2 className="w-full text-[40px] font-semibold">
        Website Development Services
      </h2>
      </FadeIn>
      <br />
      <Carousel opts={{loop:true, align:"start"}}>
        <CarouselContent className="py-[3rem]">
          {Array.isArray(data) &&
            data?.map((item, index) => (
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4" key={index}>
                <ServCard data={item} key={index} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext className="p-[5px] text-white bg-slate-500 hover:bg-slate-700 transition-all duration-300 text-[15]" />
        <CarouselPrevious className="p-[5px] text-white bg-slate-500 hover:bg-slate-700 transition-all duration-300 text-[15]"/>
      </Carousel>
      <br /><br />
    </section>
  );
};

export default Services;
