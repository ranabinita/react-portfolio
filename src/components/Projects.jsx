import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "HealthRisk AI",
    type: "Personal Project",
    description:
      "A personalized disease risk prediction platform for disease risk assessment.",
    technologies: [
      "Python",
      "Django",
      "Machine Learning",
      "Scikit-learn",
    ],
    details: [
      "Developed a personalized health risk prediction platform using machine learning.",
      "Designed a Django-based dashboard for collecting health information and displaying prediction results.",
      "Implemented machine learning models for diabetes, heart disease, and stroke risk prediction.",
      "Added health history, risk visualization, recommendations, and downloadable reports.",
    ],
    github: "https://github.com/ranabinita/healthriskai",
  },
  {
    title: "AI Fake News Detector",
    type: "Final Year Group Project",
    description:
      "A machine learning application for classifying news content as real or fake.",
    technologies: [
      "Python",
      "TF-IDF",
      "Random Forest",
      "Node.js",
    ],
    details: [
      "Developed a real-time fake news classification system using machine learning.",
      "Implemented TF-IDF for transforming textual news content into numerical features.",
      "Trained a Random Forest classifier for real and fake news classification.",
      "Built a web-based interface using HTML, CSS, JavaScript, Node.js, and Express.",
    ],
    github:
      "https://github.com/ranabinita/AI_Fake_News_Detector-",
  },
  {
    title: "Account Management System",
    type: "Collaborative Project",
    description:
      "A web-based enterprise management system for managing business operations.",
    technologies: [
      "Django",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    details: [
      "Contributed to the development of a modular ERP system using Django for managing business operations.",
      "Worked on sales, inventory, invoices, customers, products, and payment management modules.",
      "Developed reusable modal components and shared frontend functionality.",
      "Implemented and refined responsive interfaces using HTML, CSS, JavaScript, and Django templates.",
    ],
    github:
      "https://github.com/sachinmhj/AccountingManageSys",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const nextProject = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
    setExpandedIndex(null); // Reset detail expansion on slide change
  };

  const previousProject = () => {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
    setExpandedIndex(null); // Reset detail expansion on slide change
  };

  const handleSelectIndex = (index) => {
    setActiveIndex(index);
    setExpandedIndex(null);
  };

  const toggleExpand = (index) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="projects" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-indigo-600">MY WORK</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base sm:leading-7">
            A selection of projects I've built while exploring software
            development, machine learning, and modern web technologies.
          </p>
        </div>

        {/* Dynamic 3D Stack Container */}
        <div
          className="relative mx-auto mt-10 w-full max-w-3xl pt-4 pb-8"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative flex justify-center items-start"
            style={{ transformStyle: "preserve-3d" }}
          >
            {projects.map((project, index) => {
              const position =
                (index - activeIndex + projects.length) % projects.length;

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  position={position}
                  projectNumber={index + 1}
                  isExpanded={expandedIndex === index}
                  onToggleExpand={() => toggleExpand(index)}
                  onClick={position === 0 ? nextProject : undefined}
                />
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={previousProject}
            aria-label="Previous project"
            className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100"
          >
            ← Previous
          </button>

          <button
            onClick={nextProject}
            aria-label="Next project"
            className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Next →
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => handleSelectIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-indigo-600"
                  : "w-2.5 bg-gray-300"
              }`}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;