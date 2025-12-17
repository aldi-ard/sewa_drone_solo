import ClientsSection from "./ui/client";
import Hero from "./ui/hero";
import Layanan from "./ui/layanan";
import Pricelist from "./ui/pricelist";
import TestimoniSection from "./ui/testimoni";

export default function Home() {
  return (
    <>
      <Hero/>
      <Layanan/>
      <Pricelist/>
      <TestimoniSection/>
      <ClientsSection/>
    </>
  );
}
