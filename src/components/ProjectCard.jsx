import { useState } from "react";

function ProjectCard({ project, position, projectNumber, onClick }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getCardStyle = () => {
        if (position === 0) {
            return {
                transform: "translateX(0) translateZ(80px) rotateY(0deg) scale(1)",
                opacity: 1,
                zIndex: 30,
            };
        }

        if (position === 1) {
            return {
                transform:
                    "translateX(70px) translateZ(20px) rotateY(-8deg) scale(0.92)",
                opacity: 0.8,
                zIndex: 20,
            };
        }

        if (position === 2) {
            return {
                transform:
                    "translateX(130px) translateZ(-40px) rotateY(-12deg) scale(0.84)",
                opacity: 0.55,
                zIndex: 10,
            };
        }

        return {
            transform:
                "translateX(180px) translateZ(-100px) rotateY(-15deg) scale(0.75)",
            opacity: 0,
            zIndex: 0,
        };
    };

    const handleViewProject = (event) => {
        event.stopPropagation();
        setIsExpanded((current) => !current);
    };

    return (
        <div
            className="absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-700 ease-out md:w-[500px]"
            style={{
                ...getCardStyle(),
                transformStyle: "preserve-3d",
            }}
        >
            {/* Project Number */}
            <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-xl font-bold text-indigo-600"
                style={{
                    transform: "translateZ(45px)",
                }}
            >
                {String(projectNumber).padStart(2, "0")}
            </div>

            {/* Project Type */}
            <div className="flex items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                    Project
                </p>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {project.type}
                </span>
            </div>

            {/* Title */}
            <h3
                className="mt-3 text-3xl font-bold text-gray-900"
                style={{
                    transform: "translateZ(35px)",
                }}
            >
                {project.title}
            </h3>

            {/* Description */}
            <p
                className="mt-4 leading-7 text-gray-600"
                style={{
                    transform: "translateZ(25px)",
                }}
            >
                {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            {/* Expanded Project Details */}
            {isExpanded && (
                <div className="mt-8 border-t border-gray-200 pt-6">
                    
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                        Key Contributions
                    </h4>

                    <ul className="mt-4 space-y-3">
                        {project.details.map((detail, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-sm leading-6 text-gray-600"
                            >
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />

                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>

                    {/* GitHub */}
                    <div className="mt-7 flex gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
            )}

            {/* View Project */}
            <button
                onClick={handleViewProject}
                className="mt-8 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
                {isExpanded ? "View Less" : "View Project"}
            </button>
        </div>
    );
}

export default ProjectCard;