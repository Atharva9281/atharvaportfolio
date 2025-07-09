import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  description: string;
  subjects: string[];
}

const education: EducationProps[] = [
  {
    degree: "Master's Degree in Computer Science",
    institution: "University Name",
    period: "2022 - 2024",
    cgpa: "3.8/4.0",
    description: "Advanced studies in software engineering, algorithms, and system design with focus on modern development practices.",
    subjects: ["Advanced Algorithms", "Software Architecture", "Machine Learning", "Database Systems", "Distributed Systems"]
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University Name",
    period: "2018 - 2022",
    cgpa: "3.7/4.0",
    description: "Comprehensive foundation in computer science fundamentals, programming, and software development methodologies.",
    subjects: ["Data Structures", "Object-Oriented Programming", "Web Development", "Computer Networks", "Software Engineering"]
  }
];

const EducationCard = ({ degree, institution, period, cgpa, description, subjects }: EducationProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{degree}</CardTitle>
            <CardDescription className="text-sm font-medium text-primary">
              {institution} • {period}
            </CardDescription>
            <div className="text-sm font-medium text-foreground mt-1">
              CGPA: {cgpa}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Key Subjects</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-muted-foreground/10 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-container bg-muted/30">
      <div className="opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2">02</span>
            <span>Education</span>
          </div>
        </div>
        
        <h2 className="section-title mb-4">Educational Background</h2>
        <p className="section-subtitle mb-12">
          My academic journey in computer science, building a strong foundation in technology and software development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;