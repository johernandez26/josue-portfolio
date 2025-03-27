import React from "react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-3xl mx-auto bg-white dark:bg-darkCard p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-600">
        <a
          href="https://puentessf.org"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-2xl font-semibold text-gray-900 dark:text-white hover:text-accent transition-colors no-underline"
        >
          PuentesSF
        </a>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Web platform connecting underserved Bay Area communities with vital resources.
        </p>
      </div>
    </section>
  );
};
