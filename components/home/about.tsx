import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full relative after:content-[''] after:block after:bg-about-right-bubble after:bg-contain after:bg-no-repeat after:bg-right after:absolute after:top-0 after:right-0 after:w-28 after:h-32 sm:after:top-60 sm:after:w-72 sm:after:h-96">
      <div className="w-full relative z-10 px-6 pt-12 flex flex-col items-center gap-y-4 sm:px-16 sm:pt-24 lg:pt-36 lg:container lg:mx-auto">
        <div className="w-full flex flex-col items-center lg:flex-row lg:max-w-5xl">
          <div className="relative w-full h-60 rounded-[60px] overflow-hidden shadow-xl sm:h-96 lg:h-[600px] lg:w-1/3">
            <Image
              src="/images/about.png"
              alt="Bonecos de Feltro"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="w-[80%] bg-green-primary rounded-bl-[60px] rounded-br-[60px] p-6 pt-12 -mt-6 flex flex-col items-center gap-y-4 shadow-xl sm:p-12 lg:w-2/3 lg:rounded-bl-none lg:rounded-tr-[60px] lg:text-6xl">
            <h2 className="lobster-two-font text-center text-2xl text-yellow-light sm:text-5xl sm:leading-tight">
              Do Coração para Suas Mãos
            </h2>

            <p className="inter-font text-base text-yellow-light text-center sm:text-lg">
              Bem-vindo ao atelier de Feito com Feltro, onde a criatividade
              floresce e os sonhos se tornam realidade. Especializada na
              confecção artesanal de bonecos, guirlandas e lembrancinhas, cada
              peça é uma expressão única de arte, meticulosamente criada para
              capturar a essência de momentos especiais.
            </p>

            <a
              href="#servicesSection"
              className="lobster-two-font underline text-xl text-yellow-light sm:text-3xl"
            >
              Conheça mais
            </a>
          </div>
        </div>

        <div className="w-full flex items-center justify-center h-36 relative sm:h-80 lg:-mt-24">
          <Image
            src="/images/about-arrow.svg"
            alt="Conheça mais"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};
