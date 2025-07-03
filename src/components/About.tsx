import React from "react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
    "Python", "MongoDB", "PostgreSQL", "AWS", "Docker",
    "Tailwind CSS", "Git", "REST APIs", "GraphQL"
  ];

  return (
    <section id="about" className="section-container bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title mb-6">About Me</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with over 3 years of experience creating 
              digital solutions that make a difference. I love turning complex problems into 
              simple, beautiful, and intuitive designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through tech blogs and mentoring.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating user experiences 
              that are both functional and delightful.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technologies I work with:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:border-pulse-500 hover:text-pulse-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
            alt="Developer workspace"
            className="rounded-2xl shadow-lg w-full"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pulse-500 rounded-full opacity-10 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;