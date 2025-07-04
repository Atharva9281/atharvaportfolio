import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

const experiences: ExperienceProps[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: "Lead development of enterprise web applications, mentor junior developers, and architect scalable solutions. Improved application performance by 40% and reduced deployment time by 60%.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    current: true
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2022 - 2023",
    description: "Developed and maintained multiple client-facing applications, implemented CI/CD pipelines, and collaborated with design teams to create responsive user interfaces.",
    technologies: ["Vue.js", "Python", "Django", "Docker", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2021 - 2022",
    description: "Built responsive websites and web applications for various clients, optimized for performance and accessibility. Worked closely with designers and backend developers.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"]
  },
  {
    title: "Junior Web Developer",
    company: "WebDev Studio",
    period: "2020 - 2021",
    description: "Started my professional journey developing small to medium-scale websites, learning best practices, and contributing to team projects under senior developer guidance.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
  }
];

const ExperienceCard = ({ title, company, period, description, technologies, current, isLeft }: ExperienceProps & { isLeft: boolean }) => {
  return (
    <div className={`flex items-center w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Timeline dot */}
      <div className="flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm z-10 mx-4">
      </div>
      
      {/* Card */}
      <div className={`w-full max-w-md ${isLeft ? 'text-right' : 'text-left'}`}>
        <Card className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <div className={`flex items-start gap-3 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className={`flex items-center gap-2 mb-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  {current && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <CardDescription className="text-sm font-medium text-primary">
                  {company} • {period}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Spacer for the other side */}
      <div className="w-full max-w-md"></div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-background">
      <div className="opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2">04</span>
            <span>Experience</span>
          </div>
        </div>
        
        <h2 className="section-title mb-4">Work Experience</h2>
        <p className="section-subtitle mb-12">
          My professional journey in software development, building solutions and growing with amazing teams.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-muted-foreground/20"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;