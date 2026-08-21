import { useEffect, useRef, useState } from "react";

const experiences = [
    {
        role: "Python Django Intern",
        company: "Kitwosd IT Support Center",
        period: "2026 - Present",
        description:
            "Working on web application development using Python, Django, JavaScript, HTML, and CSS.",
        responsibilities: [
            "Developing and maintaining Django-based web applications.",
            "Building reusable frontend components and interactive interfaces.",
            "Working with Django templates, views, URLs, models, and JavaScript.",
            "Collaborating with team members using Git and GitHub.",
        ],
    },
];

function Experience() {
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
            threshold: 0.35,
        }
    );

    observer.observe(section);

    return () => observer.disconnect();
}, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="overflow-hidden bg-white py-24"
        >
            <div className="mx-auto max-w-5xl px-6">

                {/* Heading */}
                <div
                    className={`text-center transition-all duration-[1600]ms ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <p className="font-semibold tracking-[0.2em] text-indigo-600">
                        EXPERIENCE
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        My Experience
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                        My professional experience and the skills I've
                        developed through practical work.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-16">

                    {/* Vertical Line */}
                    <div
                        className={`absolute left-3 top-0 h-full w-px bg-gradient-to-b from-indigo-400 via-indigo-200 to-transparent transition-all duration-[2500ms] md:left-1/2 md:-translate-x-1/2 ${
                            isVisible
                                ? "scale-y-100 opacity-100"
                                : "scale-y-0 opacity-0"
                        }`}
                        style={{
                            transformOrigin: "top",
                        }}
                    />

                    {experiences.map((experience, index) => (
                        <div
                            key={experience.role}
                            className="relative mb-12"
                        >

                            {/* Timeline Dot */}
                            <div
                                className={`absolute left-0 top-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-indigo-600 shadow-md transition-all duration-[1200]ms md:left-1/2 md:-translate-x-1/2 ${
                                    isVisible
                                        ? "scale-100 opacity-100"
                                        : "scale-0 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: "700ms",
                                }}
                            >
                                <div className="h-2 w-2 rounded-full bg-white" />
                            </div>

                            {/* Timeline Content */}
                            <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-16">

                                {/* Date */}
                                <div
                                    className={`transition-all duration-[1800ms] ${
                                        index % 2 === 0
                                            ? "md:text-right"
                                            : "md:order-2"
                                    } ${
                                        isVisible
                                            ? "translate-x-0 opacity-100"
                                            : "translate-x-[-60px] opacity-0"
                                    }`}
                                    style={{
                                        transitionDelay: "1000ms",
                                    }}
                                >
                                    <p className="text-sm font-semibold text-indigo-600">
                                        {experience.period}
                                    </p>
                                </div>

                                {/* Experience Card */}
                                <div
                                    className={`mt-4 md:mt-0 ${
                                        index % 2 === 0
                                            ? "md:order-2"
                                            : "md:order-1"
                                    }`}
                                >
                                    <div
                                        className={`rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-[1800ms] hover:-translate-y-1 hover:shadow-lg ${
                                            isVisible
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-[60px] opacity-0"
                                        }`}
                                        style={{
                                            transitionDelay: "1200ms",
                                        }}
                                    >
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {experience.role}
                                        </h3>

                                        <p className="mt-1 font-medium text-gray-600">
                                            {experience.company}
                                        </p>

                                        <p className="mt-5 text-sm leading-6 text-gray-600">
                                            {experience.description}
                                        </p>

                                        {/* Responsibilities */}
                                        <ul className="mt-5 space-y-3">
                                            {experience.responsibilities.map(
                                                (responsibility, responsibilityIndex) => (
                                                    <li
                                                        key={responsibilityIndex}
                                                        className={`flex gap-3 text-sm leading-6 text-gray-600 transition-all duration-[1200ms] ${
                                                            isVisible
                                                                ? "translate-y-0 opacity-100"
                                                                : "translate-y-4 opacity-0"
                                                        }`}
style={{
    transitionDelay: `${
        1600 + responsibilityIndex * 400
    }ms`,
}}
                                                    >
                                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />

                                                        <span>
                                                            {responsibility}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;