import Image from "next/image";

import { Button } from "./ui/button";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative w-full p-6 flex items-center justify-between sm:px-16 lg:container lg:mx-auto lg:pt-9">
      <Image
        src="/images/logo.svg"
        alt="Feito com feltro"
        width={190}
        height={40}
        className="object-center object-contain"
      />

      <MobileMenu />

      <nav className="hidden lg:flex items-center gap-x-12">
        <Link
          href="/sobre"
          className="inter-font font-medium text-green-primary"
        >
          Sobre
        </Link>

        <Link
          href="/servicos"
          className="inter-font font-medium text-green-primary"
        >
          Serviços
        </Link>

        <Button className="inter-font text-base">Entre em contato</Button>
      </nav>
    </header>
  );
};
