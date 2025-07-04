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
    <div className="flex items-center w-full group">
      {/* Left side content or spacer */}
      <div className={`w-1/2 ${isLeft ? 'pr-12' : 'pr-8'} ${isLeft ? '' : 'opacity-0'}`}>
        {isLeft && (
          <div className="text-right">
            <div className="glass-card hover-lift group-hover:shadow-elegant-hover transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 justify-end">
                      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                      {current && (
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-sm">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-primary font-medium mb-3 text-right">
                      {company} • {period}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-right">{description}</p>
                
                <div className="flex flex-wrap gap-2 justify-end">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-muted-foreground/10 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg border-4 border-background group-hover:scale-110 transition-all duration-300">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150"></div>
      </div>

      {/* Right side content or spacer */}
      <div className={`w-1/2 ${!isLeft ? 'pl-12' : 'pl-8'} ${!isLeft ? '' : 'opacity-0'}`}>
        {!isLeft && (
          <div className="text-left">
            <div className="glass-card hover-lift group-hover:shadow-elegant-hover transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                      {current && (
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-sm">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-primary font-medium mb-3">
                      {company} • {period}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-muted-foreground/10 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full shadow-sm"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white via-white/80 to-white/60 rounded-full"></div>
          
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