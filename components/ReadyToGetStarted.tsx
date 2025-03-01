import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetStartedSection() {
  return (
    <section className="min-h-[400px] w-full bg-[#001319] flex items-center justify-center py-20 mb-10">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-2xl  md:text-3xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-base md:text-xl text-slate-400 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto mb-10">
          Join the future of work today and become part of the growing Web3
          talent ecosystem.
        </p>
        <Button
          size="lg"
          className="bg-[#0BA5A9] hover:bg-[#0BA5A9]/70 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
        >
          Create Your Profile
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
