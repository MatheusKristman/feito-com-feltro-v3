import Image from "next/image";

import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollCarousel } from "./doll-carousel";
import { GarlandCarousel } from "./garland-carousel";
import { SouvenirCarousel } from "./souvenir-carousel";

export const ServicesContent = () => {
  return (
    <section className="mt-12 w-full relative before:content-[''] before:w-[215px] before:h-[200px] before:bg-services-page-top-left-bubble before:bg-no-repeat before:bg-contain before:bg-left before:absolute before:top-0 before:left-0 after:content-[''] after:w-[215px] after:h-[200px] after:bg-services-page-top-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:absolute after:top-10 after:right-0">
      <div className="w-full relative before:content-[''] before:w-[200px] before:h-[190px] before:bg-services-page-bottom-left-bubble before:bg-no-repeat before:bg-contain before:bg-left before:absolute before:bottom-20 before:left-0 after:content-[''] after:w-[300px] after:h-[400px] after:bg-services-page-bottom-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:absolute after:bottom-10 after:right-0">
        <div className="w-full relative z-10 px-6 sm:px-16 lg:container lg:mx-auto">
          <Tabs defaultValue="dolls" className="w-full">
            <TabsList className="w-full grid grid-cols-3 lg:max-w-lg lg:mx-auto">
              <TabsTrigger value="dolls" className="sm:text-base">
                Bonecas
              </TabsTrigger>

              <TabsTrigger value="garland" className="sm:text-base">
                Guirlandas
              </TabsTrigger>

              <TabsTrigger value="souvenir" className="sm:text-base">
                Lembrancinhas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dolls">
              <DollCarousel />
            </TabsContent>

            <TabsContent value="garland">
              <GarlandCarousel />
            </TabsContent>

            <TabsContent value="souvenir">
              <SouvenirCarousel />
            </TabsContent>
          </Tabs>

          <div className="w-full flex flex-col gap-y-12 mb-12 lg:gap-y-36 lg:mt-24">
            <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
              <div className="relative w-full h-56 rounded-[30px] overflow-hidden sm:h-96 lg:w-3/5 lg:mt-6 lg:-mr-10">
                <Image
                  src="/images/services-box-1.jpg"
                  alt="Serviços"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="w-4/5 bg-green-secondary flex flex-col items-center gap-y-6 p-9 rounded-bl-[30px] rounded-br-[30px] lg:rounded-[30px] lg:w-1/2 lg:pl-16">
                <h4 className="lobster-two-font text-3xl text-center text-green-primary sm:text-4xl">
                  Materiais
                </h4>

                <p className="inter-font text-base text-center text-green-primary sm:text-lg">
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-col lg:flex-row lg:justify-center">
              <div className="w-4/5 h-fit flex flex-col gap-y-6 items-center justify-center bg-green-secondary rounded-[30px] p-9 pb-[56px] lg:w-1/2 lg:relative lg:z-10 lg:-mr-10">
                <h4 className="lobster-two-font text-green-primary text-3xl text-center sm:text-4xl">
                  Processo e criação
                </h4>

                <p className="inter-font text-base text-green-primary text-center sm:text-lg">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>

              <div className="relative w-4/5 h-44 self-end rounded-[30px] overflow-hidden -mt-10 sm:h-80 lg:w-1/2 lg:-ml-10 lg:mb-10">
                <Image
                  src="/images/services-box-2.jpg"
                  alt="Serviços"
                  fill
                  className="object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
