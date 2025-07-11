import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title mb-4">Let's Work Together</h2>
        <p className="section-subtitle mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <a href="mailto:your.email@example.com" className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-full group-hover:bg-pulse-200 transition-colors">
                <Mail className="w-6 h-6 text-pulse-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pulse-600 transition-colors">Email</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-full group-hover:bg-pulse-200 transition-colors">
                <Linkedin className="w-6 h-6 text-pulse-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pulse-600 transition-colors">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/yourprofile</p>
              </div>
            </a>
            
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-full group-hover:bg-pulse-200 transition-colors">
                <Github className="w-6 h-6 text-pulse-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pulse-600 transition-colors">GitHub</h3>
                <p className="text-gray-600">github.com/yourusername</p>
              </div>
            </a>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;