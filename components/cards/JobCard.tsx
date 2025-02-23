import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Briefcase,
  Bitcoin,
  MapPin,
  Zap,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  skills?: string[];
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Cyber Corner Accents */}
      <div className="absolute top-0 left-0 w-[2px] h-[10px] bg-primary" />
      <div className="absolute top-0 left-0 w-[10px] h-[2px] bg-primary" />
      <div className="absolute top-0 right-0 w-[2px] h-[10px] bg-primary" />
      <div className="absolute top-0 right-0 w-[10px] h-[2px] bg-primary" />

      <div className="p-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="text-primary">{job.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                <Bitcoin className="h-4 w-4 text-primary" />
                <span>{job.salary}</span>
              </div>
            </div>

            <p className="text-muted-foreground line-clamp-2">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {job.skills?.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[140px]">
            <Button
              variant="outline"
              asChild
              className="group/btn border-primary/20 hover:border-primary hover:bg-primary/10"
            >
              <Link
                href={`/jobs/${job.id}`}
                className="flex items-center justify-between"
              >
                View Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link
                href={`/jobs/${job.id}`}
                className="flex items-center justify-between"
              >
                Apply Now
                <Zap className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

