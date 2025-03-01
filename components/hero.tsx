import { ChevronRight, SearchIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b flex flex-col items-center relative justify-center text-white via-[#0D2027] from-[#001219] to-[#1A2C34] min-h-[640px]">
      <div className="w-96 h-96 rounded-full opacity-40 border-8 flex items-center justify-center absolute border-[#0CA5AA] border-double">
        <div className="animate-search h-24 w-24">
          <SearchIcon size={64} />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center z-10">
        <h1 className="text-5xl font-extrabold">
          The Futre of Web3 Talent Hiring
        </h1>
        <h3 className="opacity-60 font-extralight text-lg text-wrap w-2/3 text-center">
          Connect with top Web3 talent and opportunities on StarkHive - the
          decentralized job marketplace built on Starknet.
        </h3>
        <div className="flex justify-between gap-4">
          <Button className="bg-[#0CA5AA]">
            Find Jobs <ChevronRight />
          </Button>
          <Button className="bg-[#001219]">
            Hire Talent <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
