"use client";

import { servicesData } from "@/constants/home-services-data";
import { ServicesCard } from "./services-card";
import AutoPlay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Services = () => {
  return (
    <section
      id="servicesSection"
      className="w-full relative after:content-[''] after:bg-services-right-bubble after:bg-contain after:bg-no-repeat after:bg-right after:w-96 after:h-[500px] after:absolute after:top-0 after:right-0"
    >
      <div className="w-full relative z-10 flex flex-col gap-y-9 pt-6 sm:pt-12">
        <h2 className="lobster-two-font text-5xl text-green-primary text-center w-full px-6">
          Mais sobre meu trabalho
        </h2>

        <Carousel
          plugins={[
            AutoPlay({
              delay: 15000,
            }),
          ]}
          opts={{ align: "center", loop: true }}
          className="block md:hidden"
        >
          <CarouselContent>
            {servicesData.map((service) => (
              <CarouselItem
                key={service.title}
                className="flex justify-center basis-auto"
              >
                <ServicesCard title={service.title} desc={service.desc} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:grid px-16 grid-cols-3 grid-rows-1 lg:container lg:mx-auto">
          {servicesData.map((service) => (
            <ServicesCard
              key={service.title}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
