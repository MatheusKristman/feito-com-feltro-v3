import Image from "next/image";

export const AboutContent = () => {
  return (
    <section className="w-full mt-12 mb-14 lg:mt-24 lg:mb-28 relative before:content-[''] before:w-[130px] before:h-[150px] before:bg-about-page-top-left-bubble before:bg-no-repeat before:bg-left before:bg-contain before:absolute before:top-0 before:left-0 before:lg:w-[500px] before:lg:h-[600px] after:content-[''] after:w-[90px] after:h-[130px] after:bg-about-page-top-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:absolute after:top-0 after:right-0 after:lg:w-[180px] after:lg:h-[230px]">
      <div className="w-full relative before:content=[''] before:w-[190px] before:h-[200px] before:bg-about-page-bottom-left-bubble before:bg-no-repeat before:bg-left before:bg-contain before:absolute before:top-[750px] before:left-0 after:content-[''] after:w-[400px] after:h-[400px] after:bg-about-page-bottom-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:absolute after:top-[400px] after:right-0 after:lg:top-[700px]">
        <div className="w-full relative z-10 flex flex-col gap-y-9 lg:gap-y-12">
          <h1 className="lobster-two-font text-4xl text-center text-green-primary sm:px-16 sm:text-5xl lg:container lg:mx-auto lg:text-[80px]">
            Um pouco da minha história
          </h1>

          <div className="w-full px-6 flex flex-col items-center gap-y-12 mx-auto sm:px-16 lg:container lg:mx-auto">
            <div className="w-full flex flex-col lg:flex-row justify-center">
              <div className="w-3/4 bg-green-primary py-12 px-9 rounded-[60px] flex flex-col gap-y-4 relative z-10 shadow-lg lg:max-w-none lg:w-1/2 lg:h-fit">
                <p className="text-base text-yellow-light sm:text-lg">
                  Olá! Meu nome é Eliane, sou a criadora da Feito com Feltro, um
                  hobbie que hoje se tornou uma paixão e o trabalho que tanto
                  amo.
                </p>

                <p className="text-base text-yellow-light sm:text-lg">
                  Desde pequena amava artesanato, graças a minha mãe que me
                  ensinou e incentivou nessa área. Fazer uma lembrança especial
                  que marcava uma data, um boneco do meu personagem favorito e
                  poder presentear meus familiares e amigos, tudo feito com as
                  minhas próprias mãos, era gratificante e me engajou a
                  aprimorar o meu trabalho cada vez mais.
                </p>
              </div>

              <div className="relative w-3/4 h-[500px] rounded-[60px] overflow-hidden self-end -mt-44 shadow-lg max-w-md lg:h-auto lg:aspect-video lg:w-1/2 lg:max-w-none lg:-ml-20 lg:mt-16">
                <Image
                  src="/images/about-box-1.jpg"
                  alt="Um pouco da minha história"
                  fill
                  className="object-center object-cover"
                />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center">
              <div className="w-3/4 bg-green-primary py-12 px-9 rounded-[60px] flex flex-col gap-y-4 self-end shadow-lg max-w-md lg:max-w-none lg:w-1/2 lg:-ml-20">
                <p className="text-base text-yellow-light sm:text-lg lg:ml-20">
                  Com o passar do tempo, o que era apenas um passatempo, se
                  tornou uma missão levar até as pessoas, através da minha arte,
                  mais do que uma recordação para os momentos especiais, mas
                  também o sentimento de alegria, carinho e amor que eu deposito
                  em cada uma das minhas confecções.
                </p>

                <p className="text-base text-yellow-light sm:text-lg lg:ml-20">
                  Entre em contato comigo, me siga nas redes sociais e descubra
                  mais desse mundo Feito com Feltro!
                </p>
              </div>

              <div className="relative w-3/4 aspect-video rounded-[60px] overflow-hidden -mt-10 shadow-lg z-10 lg:w-2/5 lg:mt-0">
                <Image
                  src="/images/about-box-2.jpg"
                  alt="Um pouco da minha história"
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
