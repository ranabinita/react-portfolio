function ProjectCard({
  project,
  position,
  projectNumber,
  isExpanded,
  onToggleExpand,
}) {
  const getCardStyle = () => {
    // Active front card
    if (position === 0) {
      return {
        transform: "translateX(0) translateZ(80px) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto",
      };
    }

    // First stacked card behind
    if (position === 1) {
      return {
        transform:
          "translateX(clamp(15px, 5vw, 60px)) translateZ(20px) rotateY(-8deg) scale(0.92)",
        opacity: 0.7,
        zIndex: 20,
        pointerEvents: "none",
      };
    }

    // Second stacked card behind
    if (position === 2) {
      return {
        transform:
          "translateX(clamp(30px, 10vw, 120px)) translateZ(-40px) rotateY(-12deg) scale(0.84)",
        opacity: 0.4,
        zIndex: 10,
        pointerEvents: "none",
      };
    }

    // Hidden cards
    return {
      transform:
        "translateX(clamp(45px, 15vw, 160px)) translateZ(-100px) rotateY(-15deg) scale(0.75)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  const handleViewProject = (event) => {
    event.stopPropagation();
    onToggleExpand();
  };

  return (
    <div
      className={`
        ${position === 0 ? "relative" : "absolute top-0"}
        w-full
        max-w-[calc(100vw-2.5rem)]
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-xl
        transition-all
        duration-500
        ease-out

        sm:max-w-[440px]
        sm:p-7

        md:max-w-[500px]
        md:p-8
      `}
      style={{
        ...getCardStyle(),
        transformStyle: "preserve-3d",
      }}
    >
      {/* Project Number */}
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-base font-bold text-indigo-600 sm:mb-6 sm:h-12 sm:w-12 sm:text-lg"
        style={{ transform: "translateZ(30px)" }}
      >
        {String(projectNumber).padStart(2, "0")}
      </div>

      {/* Project Type */}
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Project
        </p>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
          {project.type}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mt-2 text-xl font-bold leading-tight text-gray-900 sm:mt-3 sm:text-2xl md:text-3xl"
        style={{ transform: "translateZ(25px)" }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="mt-2 text-xs leading-5 text-gray-600 sm:mt-3 sm:text-sm sm:leading-6 md:text-base"
        style={{ transform: "translateZ(15px)" }}
      >
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700 sm:text-xs"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-5 border-t border-gray-200 pt-4 sm:mt-6 sm:pt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
            Key Contributions
          </h4>

          <ul className="mt-2.5 space-y-2 sm:mt-3">
            {project.details.map((detail, index) => (
              <li
                key={index}
                className="flex gap-2.5 text-xs leading-5 text-gray-600 sm:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="mt-5 flex items-center justify-between gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="rounded-lg bg-gray-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-gray-700 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              GitHub ↗
            </a>

            <button
              onClick={handleViewProject}
              className="rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              View Less
            </button>
          </div>
        </div>
      )}

      {/* Initial View Button */}
      {!isExpanded && (
        <button
          onClick={handleViewProject}
          className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700 sm:mt-6 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          View Project
        </button>
      )}
    </div>
  );
}

export default ProjectCard;