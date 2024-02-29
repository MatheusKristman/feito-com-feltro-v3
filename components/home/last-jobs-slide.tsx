"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { JobsData } from "@/constants/jobs-data";

// TODO atualizar fotos com a galeria do banco de dados

export const LastJobsSlide = () => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          stopOnFocusIn: false,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
      className="w-full pt-12 sm:pt-24"
    >
      <CarouselContent className="-ml-6">
        {JobsData.map((job, index) => (
          <CarouselItem key={index} className="pl-6 basis-60">
            <div className="w-full aspect-square rounded-[40px] relative overflow-hidden shadow-lg">
              <Image
                src={job.imageUrl}
                alt="Ultimos Trabalhos"
                fill
                className="object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
