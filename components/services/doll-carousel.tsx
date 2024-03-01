"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const DollCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="bg-green-500 aspect-video basis-2/3">
          Carousel 1
        </CarouselItem>
        <CarouselItem className="bg-red-500 aspect-video basis-2/3">
          Carousel 2
        </CarouselItem>
        <CarouselItem className="bg-blue-500 aspect-video basis-2/3">
          Carousel 3
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
