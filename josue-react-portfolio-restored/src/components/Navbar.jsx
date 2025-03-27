import React, { useState, useEffect } from "react";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 bg-white dark:bg-[#1e1e2e] transition-colors">
      <h1 className="text-lg font-semibold">Josue Hernandez</h1>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/johernandez26" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-accent" />
        </a>
        <a href="https://www.linkedin.com/in/josuebhernandez/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-accent" />
        </a>
        <a href="mailto:joshuamo574@gmail.com">
          <Mail className="w-5 h-5 hover:text-accent" />
        </a>
        <a
          href="/Josue_Hernandez_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-darkCard"
        >
          Resume
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="text-gray-700 dark:text-gray-300 hover:text-accent"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};
