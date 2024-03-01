import Image from "next/image";

import { Button } from "./ui/button";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative w-full p-6 flex items-center justify-between sm:px-16 lg:container lg:mx-auto lg:pt-9">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Feito com feltro"
          width={190}
          height={40}
          className="object-center object-contain"
        />
      </Link>

      <MobileMenu />

      <nav className="hidden lg:flex items-center gap-x-12">
        <Link
          href="/sobre"
          className="inter-font text-lg font-medium text-green-primary"
        >
          Sobre
        </Link>

        <Link
          href="/servicos"
          className="inter-font text-lg font-medium text-green-primary"
        >
          Serviços
        </Link>

        <Button className="inter-font text-base">Entre em contato</Button>
      </nav>
    </header>
  );
};
