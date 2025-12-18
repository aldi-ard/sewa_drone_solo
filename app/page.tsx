import ClientsSection from "./ui/client";
import Hero from "./ui/hero";
import Layanan from "./ui/layanan";
import Pricelist from "./ui/pricelist";
import TestimoniSection from "./ui/testimoni";
import Milestone from "./ui/milestone";


export default function Home() {
  return (
    <>
      <Hero/>
      <Layanan/>
      <Milestone/>
      <Pricelist/>
      <TestimoniSection/>
      <ClientsSection/>
    </>
  );
}
