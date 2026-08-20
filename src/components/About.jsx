import { useEffect, useRef, useState } from "react";

const aboutItems = [
  {
    number: "01",
    title: "Computer Engineer",
    description:
      "Bachelor of Engineering in Computer Engineering from NCIT, with a foundation in software development, programming, databases, and artificial intelligence.",
    tags: ["Computer Engineering", "NCIT", "Pokhara University"],
  },
  {
    number: "02",
    title: "Software Developer",
    description:
      "I enjoy building practical web applications and working across both frontend and backend technologies.",
    tags: ["Python", "Django", "React", "JavaScript"],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "I'm interested in turning data and machine learning concepts into useful real-world applications.",
    tags: ["Scikit-learn", "NLP", "TF-IDF", "Machine Learning"],
  },
  {
    number: "04",
    title: "Project Builder",
    description:
      "I've built projects ranging from health-risk prediction and fake-news detection to business management systems.",
    tags: ["HealthRisk AI", "Fake News Detector", "ERP System"],
  },
  {
    number: "05",
    title: "Currently Learning",
    description:
      "I'm continuously improving my development skills while exploring modern React applications, AI, and software engineering.",
    tags: ["React", "AI", "Full-stack", "Software Engineering"],
  },
];

function About() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* HEADER */}

        <div className="text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-indigo-600">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-6xl">
            Who I am & what I do
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            A quick look at my background, interests, projects,
            and what I'm currently working toward.
          </p>

        </div>

        {/* TIMELINE */}

        <div className="relative mt-24">

          {/* Vertical line */}

          <div
            className="absolute left-5 top-0 w-[2px] bg-indigo-200 transition-all duration-[2000ms]"
            style={{
              height: isVisible ? "100%" : "0%",
            }}
          />

          {/* ITEMS */}

          <div className="space-y-20">

            {aboutItems.map((item, index) => {

              const delay = index * 1200;

              return (
                <div
                  key={item.number}
                  className="relative pl-16"
                >

                  {/* BULLET */}

                  <div
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-indigo-600 shadow-lg transition-all duration-1000"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "scale(1)"
                        : "scale(0)",
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  {/* CONTENT */}

                  <div
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(-80px)",
                      transition:
                        "opacity 1400ms ease-out, transform 1400ms ease-out",
                      transitionDelay: `${delay + 200}ms`,
                    }}
                  >

                    {/* NUMBER */}

                    <div className="text-xs font-bold tracking-[0.3em] text-indigo-500">
                      {item.number}
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                      {item.description}
                    </p>

                    {/* TAGS */}

                    <div className="mt-6 flex flex-wrap gap-2">

                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 transition-all duration-700"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                              ? "translateY(0)"
                              : "translateY(15px)",
                            transitionDelay: `${
                              delay + 700 + tagIndex * 150
                            }ms`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* RESUME */}

        <div
          className="mt-24 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition:
              "opacity 1000ms ease, transform 1000ms ease",
            transitionDelay: "3500ms",
          }}
        >
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;