"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

//TODO: criar carrossel do zero

const images = [
  "/images/job-test.jpg",
  "/images/job-test.jpg",
  "/images/job-test.jpg",
  "/images/job-test.jpg",
  "/images/job-test.jpg",
];

export const DollCarousel = () => {
  const [centeredImage, setCenteredImage] = useState<number>(0);

  function handleNext() {
    setCenteredImage((prev: number) =>
      prev >= images.length - 1 ? prev : prev + 1
    );
  }

  function handleBack() {
    setCenteredImage((prev: number) => (prev === 0 ? prev : prev - 1));
  }

  const imageVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 5,
    },
    left: {
      x: "-50%",
      scale: 0.7,
      zIndex: 3,
    },
    right: {
      x: "50%",
      scale: 0.7,
      zIndex: 3,
    },
  };

  useEffect(() => {
    console.log(centeredImage);
  }, [centeredImage]);

  return (
    <>
      <div className="w-full h-60 flex flex-col items-center justify-start sm:h-[350px] lg:h-[500px]">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[25px] h-36 object-cover object-center shadow-lg shadow-black/25 sm:h-60 lg:h-96"
            initial="center"
            animate={
              index < centeredImage
                ? "left"
                : index > centeredImage
                ? "right"
                : "center"
            }
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "50%", position: "absolute" }}
          />
        ))}

        <div className="w-full mt-40 flex justify-around items-center sm:mt-[270px] lg:mt-[425px] lg:w-1/2">
          <Button
            disabled={centeredImage === 0}
            size="icon"
            variant="link"
            onClick={handleBack}
            className={"relative w-6 h-6 sm:w-8 sm:h-8"}
          >
            <Image
              src="/images/left-arrow.svg"
              alt="Voltar"
              fill
              className="object-center object-contain"
            />
          </Button>

          <Button className="inter-font text-base">Adquira o seu</Button>

          <Button
            disabled={centeredImage >= images.length - 1}
            size="icon"
            variant="link"
            onClick={handleNext}
            className="relative w-6 h-6 sm:w-8 sm:h-8"
          >
            <Image
              src="/images/right-arrow.svg"
              alt="Avançar"
              fill
              className="object-center object-contain"
            />
          </Button>
        </div>
      </div>

      <div className="w-full p-9 bg-green-primary rounded-[60px] flex flex-col items-center gap-y-4 mb-12 lg:w-1/2 lg:mx-auto">
        <h4 className="text-center lobster-two-font text-2xl text-yellow-light lg:text-4xl">
          Cuidados com seu boneco
        </h4>

        <p className="inter-font text-base text-yellow-light text-center">
          Limpe com um pano umedecido, evite lavar, mas se necessário use apenas
          sabão neutro em pouquíssima quantidade. De tempos em tempos pode ser
          aplicado uma camada de spray fixador de cabelos extra forte sobre a
          peça , ajuda na conservação.
        </p>
      </div>
    </>
  );
};
