import Hero from '@/components/hero';
import OurTechnology from '@/components/OurTechnology';
import WhyChooseUs from '@/components/ui/why-choose-us';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurTechnology />
    </div>
  );
}
