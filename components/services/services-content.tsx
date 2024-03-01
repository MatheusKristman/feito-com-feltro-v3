import Image from "next/image";
import { Button } from "../ui/button";

export const ServicesContent = () => {
  return (
    <section>
      <div>
        <div>
          <Button variant="link">Bonecas</Button>
          <Button variant="link">Guirlandas</Button>
          <Button variant="link">Lembrancinhas</Button>
        </div>

        <div>Carousel</div>

        <div>
          <h4>Cuidados com seu boneco</h4>

          <p>
            Limpe com um pano umedecido, evite lavar, mas se necessário use
            apenas sabão neutro em pouquíssima quantidade. De tempos em tempos
            pode ser aplicado uma camada de spray fixador de cabelos extra forte
            sobre a peça , ajuda na conservação.
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
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
    </section>
  );
};
