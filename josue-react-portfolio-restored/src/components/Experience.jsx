import React from "react";

export const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-darkCard p-6 rounded-lg shadow border border-gray-300 dark:border-gray-600">
          <h3 className="text-xl font-semibold">IT Engineer Intern – Patreon</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Tech support, Jira, Okta, AV production, internal tools, and employee onboarding.
          </p>
        </div>
        <div className="bg-white dark:bg-darkCard p-6 rounded-lg shadow border border-gray-300 dark:border-gray-600">
          <h3 className="text-xl font-semibold">Software Engineer Volunteer – Code.org</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Built accessible React UI components and improved keyboard navigation for inclusivity.
          </p>
        </div>
        <div className="bg-white dark:bg-darkCard p-6 rounded-lg shadow border border-gray-300 dark:border-gray-600">
          <h3 className="text-xl font-semibold">Full Stack Fellow – Uber</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Built a full-stack app for community resources using React, Node.js, PostgreSQL, and Docker.
          </p>
        </div>
      </div>
    </section>
  );
};
