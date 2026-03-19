import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { DataStorytelling } from "@/components/sections/DataStorytelling";
import { Results } from "@/components/sections/Results";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Divider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff66]/20 to-transparent" />
);

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <Divider />
      <Results />
      <Divider />
      <Methodology />
      <Divider />
      {/* <DataStorytelling /> Ocultado a petición */}
      <CaseStudies />
      <WhyChooseUs />
      <Divider />
      <About />
      <Contact />
      <FinalCTA />
    </>
  );
}
