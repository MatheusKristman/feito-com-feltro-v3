"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export const Footer = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <footer
      className={cn(
        "w-full bg-white py-5 flex items-center justify-between -mt-3 relative z-10 shadow-footer",
        {
          "mt-0": pathname !== "/",
        }
      )}
    >
      <div className="w-1/3 h-24 relative">
        <Image
          src="/images/footer-left-line.svg"
          alt="Footer"
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="w-1/3 h-fit flex flex-col items-center gap-y-12">
        <ul className="flex items-center gap-x-5">
          <li>
            <a href="#" className="block w-8 h-8 relative">
              <Image
                src="/images/whatsapp-icon.svg"
                alt="Whatsapp"
                fill
                className="object-center object-contain"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block w-8 h-8 relative">
              <Image
                src="/images/instagram-icon.svg"
                alt="Instagram"
                fill
                className="object-center object-contain"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block w-8 h-8 relative">
              <Image
                src="/images/facebook-icon.svg"
                alt="Facebook"
                fill
                className="object-center object-contain"
              />
            </a>
          </li>
        </ul>

        <div className="text-center">
          <span className="inter-font text-lg text-green-primary font-medium">
            2024 | Desenvolvido por{" "}
          </span>
          <a
            href="https://www.mkdevsolutions.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inter-font text-lg text-green-primary font-medium hover:underline"
          >
            MKDev
          </a>
        </div>
      </div>

      <div className="w-1/3 h-24 relative">
        <Image
          src="/images/footer-right-line.svg"
          alt="Footer"
          fill
          className="object-contain object-right"
        />
      </div>
    </footer>
  );
};
