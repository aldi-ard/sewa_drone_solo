import AboutUs from "./ui/aboutUs";
import Hero from "./ui/hero";
import Layanan from "./ui/layanan";
import Pricelist from "./ui/pricelist";
import TestimoniSection from "./ui/testimoni";
import Milestone from "./ui/milestone";
import Portofolio from "./ui/portofolio";


export default function Home() {
  return (
    <>
      <Hero/>
      <Layanan/>
      <Milestone/>
      <Pricelist/>
      <TestimoniSection/>
      <Portofolio/>
    </>
  );
}
