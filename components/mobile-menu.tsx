"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function handleMobileMenu() {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  }

  return (
    <div>
      <Button
        onClick={handleMobileMenu}
        size="icon"
        variant="link"
        className="block lg:hidden relative z-10"
      >
        <div
          className={cn(
            "bg-green-primary h-[2px] w-12 rounded-full relative transition-opacity duration-300 before:content-[''] before:transition-all before:duration-300 before:bg-green-primary before:h-[2px] before:w-12 before:rounded-full before:absolute before:-top-2 before:left-0 after:content-[''] after:transition-all after:duration-300 after:bg-green-primary after:h-[2px] after:w-12 after:rounded-full after:absolute after:top-2 after:left-0",
            {
              "bg-green-primary/0 before:bg-yellow-light before:-rotate-45 before:origin-center before:top-0 after:bg-yellow-light after:rotate-45 after:origin-center after:top-0":
                isMobileMenuOpen,
            },
          )}
        />
      </Button>

      {isMobileMenuOpen && (
        <div className="block lg:hidden absolute top-0 right-0 max-w-sm px-6 pt-[90px] pb-4 rounded-bl-2xl bg-green-primary sm:px-16 sm:pb-6">
          <nav className="w-full flex flex-col items-center gap-y-4">
            <Link
              href="/sobre"
              className="inter-font text-lg font-medium text-yellow-light"
            >
              Sobre
            </Link>

            <Link
              href="/servicos"
              className="inter-font text-lg font-medium text-yellow-light"
            >
              Serviços
            </Link>

            <Button
              variant="secondary"
              className="inter-font text-base font-medium"
            >
              Entre em contato
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};
