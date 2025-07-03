import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
}

const certifications: CertificationProps[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Demonstrated expertise in designing distributed systems and scalable cloud architectures on AWS.",
    credentialId: "AWS-SAA-123456"
  },
  {
    title: "React Professional Certificate",
    issuer: "Meta",
    date: "2023",
    description: "Advanced React development skills including hooks, context, and performance optimization."
  },
  {
    title: "Full Stack Web Development",
    issuer: "The Odin Project",
    date: "2022",
    description: "Comprehensive full-stack development covering frontend, backend, and database technologies."
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    description: "Mastery of JavaScript fundamentals, algorithms, and data structure implementation."
  }
];

const CertificationCard = ({ title, issuer, date, description, credentialId }: CertificationProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm font-medium text-primary">
              {issuer} • {date}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3">{description}</p>
        {credentialId && (
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">Credential ID:</span> {credentialId}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-container bg-muted/30">
      <div className="opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2">03</span>
            <span>Certifications</span>
          </div>
        </div>
        
        <h2 className="section-title mb-4">Certifications & Achievements</h2>
        <p className="section-subtitle mb-12">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;