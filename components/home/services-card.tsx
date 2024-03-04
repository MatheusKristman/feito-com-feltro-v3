import { Button } from "../ui/button";

interface ServicesCardProps {
  title: string;
  desc: string;
}

export const ServicesCard = ({ title, desc }: ServicesCardProps) => {
  return (
    <div className="relative max-w-sm h-full bg-green-secondary py-12 px-5 mx-6 rounded-[60px] flex flex-col items-center justify-between gap-y-6">
      <h3 className="lobster-two-font text-5xl text-center text-green-primary md:text-3xl lg:text-5xl">
        {title}
      </h3>

      <p className="inter-font text-base text-green-primary text-center !leading-loose">
        {desc}
      </p>

      <Button variant="outline" className="inter-font text-lg font-medium">
        Saiba mais
      </Button>
    </div>
  );
};
