import { Star, MapPin, User, Link, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TalentCardProps {
  name: string;
  role: string;
  isRemote?: boolean;
  rating?: number;
  jobsCompleted?: number;
  skills: string[];
  image?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export default function TalentCard({
  name,
  role,
  isRemote = true,
  rating = 0,
  jobsCompleted = 0,
  skills = [],
  image = "",
  socialLinks = {},
}: TalentCardProps) {
  return (
    <div className="m-20 w-full max-w-3xl space-y-6 rounded-lg border-2 border-teal-600 bg-[#083435] p-4 md:p-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#093F42] md:h-14 md:w-14">
            {image ? (
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <User className="h-5 w-5 text-teal-600 md:h-7 md:w-7" />
            )}
          </div>
          <div className="flex flex-col gap-y-1.5">
            <div>
              <h2 className="text-xl font-semibold text-white md:text-3xl">
                {name}
              </h2>
              <p className="text-sm font-semibold text-teal-600 md:text-lg">
                {role}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 md:gap-4 md:text-sm">
              {isRemote && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Remote</span>
                </div>
              )}
              {rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400/70" />
                  <span>{rating.toFixed(1)}</span>
                </div>
              )}
              {jobsCompleted > 0 && (
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{jobsCompleted} jobs completed</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <Button className="border border-teal-600 bg-teal-600 text-xs transition duration-300 ease-in-out hover:bg-white hover:text-teal-600 md:text-base font-semibold">
          Contact
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full bg-[#093F42] px-2 py-1 text-xs font-semibold text-teal-600 md:px-3 md:text-sm"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-sm font-semibold text-teal-600 transition-colors hover:text-gray-400 md:text-base"
            aria-label="GitHub"
          >
            <Link className="h-4 w-4" />
            <span>Github</span>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-sm font-semibold text-teal-600 transition-colors hover:text-gray-400 md:text-base"
            aria-label="LinkedIn"
          >
            <Link className="h-4 w-4" />
            <span>Linkedin</span>
          </a>
        )}
        {socialLinks.portfolio && (
          <a
            href={socialLinks.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-sm font-semibold text-teal-600 transition-colors hover:text-gray-400 md:text-base"
            aria-label="Portfolio"
          >
            <Link className="h-4 w-4" />
            <span>Portfolio</span>
          </a>
        )}
      </div>
    </div>
  );
}


/**
 * TalentCard Component
 *
 * Usage example:
 * <TalentCard
 *   name="Alex Thompson"
 *   role="Senior Smart Contract Developer"
 *   rating={4.9}
 *   jobsCompleted={23}
 *   skills={[
 *     "Solidity",
 *     "Cairo",
 *     "Rust",
 *     "DeFi",
 *     "Smart Contract Security",
 *     "ZK-Proofs",
 *   ]}
 *   socialLinks={{
 *     github: "https://github.com",
 *     linkedin: "https://linkedin.com",
 *     portfolio: "https://portfolio.com",
 *   }}
 * />
 */