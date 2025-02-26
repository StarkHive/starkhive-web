import OurTechnology from "@/components/OurTechnology";
import GetStartedSection from "@/components/ReadyToGetStarted";
import WhyChooseUs from "@/components/ui/why-choose-us";
import React from "react";

export default function Home() {
  return <div>
    <WhyChooseUs />
    <OurTechnology/>
    <GetStartedSection/>
  </div>;
}
