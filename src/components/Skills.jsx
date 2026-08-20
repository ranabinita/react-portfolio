import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    number: "01",
    title: "Programming",
    description:
      "Languages I use to build software, understand algorithms, and solve programming problems.",
    skills: ["Python", "JavaScript", "C++", "Dart"],
    color: "#4f46e5",
    light: "#eef2ff",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Technologies I use to create responsive frontend experiences and backend applications.",
    skills: ["React", "Django", "HTML", "CSS", "Node.js"],
    color: "#7c3aed",
    light: "#f5f3ff",
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Tools and techniques I use to explore machine learning, natural language processing, and data.",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
      "Random Forest",
      "NLP",
    ],
    color: "#0891b2",
    light: "#ecfeff",
  },
  {
    number: "04",
    title: "Development Tools",
    description:
      "Tools that help me develop, test, manage, and maintain my projects.",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "REST APIs"],
    color: "#db2777",
    light: "#fdf2f8",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="overflow-hidden bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <div
          className="mx-auto max-w-2xl text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition:
              "opacity 900ms ease, transform 900ms ease",
          }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-indigo-600">
            SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            What I work with
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Technologies and tools I've worked with while building
            software, web applications, and machine learning projects.
          </p>
        </div>

        {/* ================= SKILL GRID ================= */}

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-2">

          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.number}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}

        </div>

      </div>
    </section>
  );
}


/* =============================================================
   SKILL CARD
============================================================= */

function SkillCard({
  category,
  index,
  isVisible,
}) {

  const cardRef = useRef(null);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  /* ================= 3D MOUSE ================= */

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 8;

    const rotateX =
      ((y / rect.height) - 0.5) * -8;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };

  /*
   * Animation timing
   *
   * 01 → 0ms
   * 02 → 1000ms
   * 03 → 2200ms
   * 04 → 3200ms
   */

  const delay = index < 2
    ? index * 1000
    : 2200 + (index - 2) * 1000;


  /*
   * First card of each row:
   *
   * starts from RIGHT
   * moves slightly past its position
   * then settles back
   */

  const isFirst = index === 0 || index === 2;

  /*
   * Second card:
   *
   * starts farther RIGHT
   * moves toward the first card
   * bumps
   * then settles into its own position
   */

  const getTransform = () => {

    if (isVisible) {

      if (isFirst) {
        return `
          translateX(0)
          translateY(0)
          rotate(${index === 0 ? "-1deg" : "1deg"})
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg)
        `;
      }

      return `
        translateX(0)
        translateY(0)
        rotate(${index === 1 ? "1deg" : "-1deg"})
        rotateX(${rotation.x}deg)
        rotateY(${rotation.y}deg)
      `;
    }

    /*
     * Initial positions
     */

    return `
      translateX(220px)
      translateY(20px)
      rotate(6deg)
      scale(0.95)
    `;
  };


  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
      }}
    >

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}

        className="relative min-h-[300px] overflow-hidden rounded-3xl border bg-white p-8 shadow-xl transition-transform ease-out md:p-9"

        style={{

          borderColor: `${category.color}35`,

          opacity: isVisible ? 1 : 0,

          transform: getTransform(),

          transformStyle: "preserve-3d",

          transition:
            `opacity 800ms ease-out ${delay}ms, ` +
            `transform 1300ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,

          boxShadow:
            `0 20px 50px ${category.color}18`,
        }}
      >

        {/* =================================================
            LEFT COLOR BAR
        ================================================= */}

        <div
          className="absolute left-0 top-0 h-full w-2"
          style={{
            backgroundColor: category.color,
          }}
        />

        {/* =================================================
            COLOR CORNER
        ================================================= */}

        <div
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
          style={{
            backgroundColor: category.color,
            opacity: 0.1,
          }}
        />

        {/* =================================================
            NUMBER
        ================================================= */}

        <div
          className="relative flex h-12 w-12 items-center justify-center rounded-xl font-bold"
          style={{
            backgroundColor: category.light,
            color: category.color,
            transform: "translateZ(25px)",
          }}
        >
          {category.number}
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <h3
          className="relative mt-6 text-2xl font-bold text-gray-900 md:text-3xl"
          style={{
            transform: "translateZ(20px)",
          }}
        >
          {category.title}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="relative mt-3 leading-7 text-gray-600"
          style={{
            transform: "translateZ(15px)",
          }}
        >
          {category.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div
          className="relative mt-6 flex flex-wrap gap-2"
          style={{
            transform: "translateZ(20px)",
          }}
        >

          {category.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300"
              style={{
                backgroundColor: category.light,
                color: category.color,
              }}
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Skills;