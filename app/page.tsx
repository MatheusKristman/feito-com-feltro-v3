import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { LastJobsSlide } from "@/components/home/last-jobs-slide";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <LastJobsSlide />
      <Footer />
    </>
  );
}
