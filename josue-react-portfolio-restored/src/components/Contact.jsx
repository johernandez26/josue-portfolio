import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 text-black dark:text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Let’s connect! Reach me via email or on any of my platforms below.
      </p>
      <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-300">
        <a href="mailto:joshuamo574@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-6 h-6 hover:text-accent transition-colors" />
        </a>
        <a href="https://github.com/johernandez26" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-accent transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/josuebhernandez/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-accent transition-colors" />
        </a>
      </div>
    </section>
  );
};
