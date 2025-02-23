import { Shield, Zap, Briefcase } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Trustless Interactions",
    description:
      "Smart contracts ensure secure, escrow-based payments and verifiable work history.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "AI-Powered Matching",
    description:
      "Find the perfect match with our advanced AI-driven job recommendation system.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Global Opportunities",
    description:
      "Access worldwide opportunities with instant crypto payments and low fees.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose StarkHive?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card transition duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
