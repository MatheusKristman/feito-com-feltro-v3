import Image from "next/image";

import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollCarousel } from "./doll-carousel";

export const ServicesContent = () => {
  return (
    <section className="mt-12 w-full relative before:content-[''] before:w-[215px] before:h-[200px] before:bg-services-page-top-left-bubble before:bg-no-repeat before:bg-contain before:bg-left before:absolute before:top-0 before:left-0 after:content-[''] after:w-[215px] after:h-[200px] after:bg-services-page-top-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:absolute after:top-10 after:right-0">
      <div className="w-full relative before:content-[''] before:w-[200px] before:h-[190px] before:bg-services-page-bottom-left-bubble before:bg-no-repeat before:bg-contain before:bg-left before:absolute before:bottom-20 before:left-0 after:content-[''] after:w-[300px] after:h-[400px] after:bg-services-page-bottom-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:absolute after:bottom-10 after:right-0">
        <div className="w-full relative z-10 px-6">
          <Tabs defaultValue="dolls" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="dolls">Bonecas</TabsTrigger>

              <TabsTrigger value="garland">Guirlandas</TabsTrigger>

              <TabsTrigger value="souvenir">Lembrancinhas</TabsTrigger>
            </TabsList>

            <TabsContent value="dolls">
              <DollCarousel />
            </TabsContent>

            <TabsContent value="garland">Carrossel Guirlandas</TabsContent>

            <TabsContent value="souvenir">Carrossel Lembrancinhas</TabsContent>
          </Tabs>

          <div>
            <h4>Cuidados com seu boneco</h4>

            <p>
              Limpe com um pano umedecido, evite lavar, mas se necessário use
              apenas sabão neutro em pouquíssima quantidade. De tempos em tempos
              pode ser aplicado uma camada de spray fixador de cabelos extra
              forte sobre a peça , ajuda na conservação.
            </p>
          </div>

          <div>
            <div>
              <div className="relative">
                <Image
                  src="/images/services-box-1.jpg"
                  alt="Serviços"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div>
                <h4>Materiais</h4>

                <p>
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

            <div>
              <div>
                <h4>Processo e criação</h4>

                <p>
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>

              <div className="relative">
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
