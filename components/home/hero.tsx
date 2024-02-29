export const Hero = () => {
  return (
    <section className="w-full relative before:content-[''] before:block before:bg-hero-left-bubble before:bg-contain before:bg-no-repeat before:w-52 before:aspect-square before:absolute before:left-0 before:top-0">
      <div className="relative z-10 w-full px-6 pt-12 flex items-center justify-center sm:px-16 lg:container lg:mx-auto lg:pt-24">
        <div className="flex flex-col items-center gap-y-6 bg-hero-center-bubble bg-contain bg-center bg-no-repeat py-6">
          <h1 className="text-[40px] lobster-two-font text-center text-green-primary max-w-[250px] leading-10 sm:text-[80px] sm:max-w-[500px] sm:leading-none lg:text-[150px] lg:max-w-[900px]">
            Feito com feltro, amor e carinho
          </h1>

          <p className="inter-font text-base text-green-primary text-center !leading-relaxed sm:text-lg sm:max-w-[500px] lg:text-xl lg:max-w-[800px]">
            Bonecos, lembrancinhas, guirlandas e muito mais! Tudo personalizado,
            do seu jeitinho, feitos com carinho e amor.
          </p>
        </div>
      </div>
    </section>
  );
};
