import type { Metadata } from "next";
import { Inter, Lobster_Two } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});
const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster-two",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-yellow-light ${inter.variable} ${lobsterTwo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
