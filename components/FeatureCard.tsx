import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="p-4 md:p-6 bg-[#001219] border border-[#013B43] rounded-xl shadow-lg max-w-3xl text-white flex flex-col gap-y-3 md:gay-y-4">
      <div className="border border-[#013B43] w-fit bg-[#022029] rounded-lg p-2">
        <Icon className="size-6 md:size-8 text-[#00A8AE]" />
      </div>
      <h2 className="font-semibold text-2xl md:text-3xl">{title}</h2>
      <p className="text-[#94A3B8] md:text-lg">{description}</p>
    </div>
  );
};

export default FeatureCard;
