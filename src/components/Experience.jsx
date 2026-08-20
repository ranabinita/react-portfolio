const experiences = [
    {
        role: "Python Django Intern",
        company: "Kitwosd It Support Center",
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
    return (
        <section
            id="experience"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-5xl px-6">

                {/* Heading */}
                <div className="text-center">
                    <p className="font-semibold text-indigo-600">
                        EXPERIENCE
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        My Experience
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                        My professional experience and the skills I've developed
                        through practical work.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-16">

                    {/* Vertical line */}
                    <div className="absolute left-3 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

                    {experiences.map((experience, index) => (
                        <div
                            key={experience.role}
                            className="relative mb-12"
                        >

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 h-7 w-7 rounded-full border-4 border-white bg-indigo-600 shadow-md md:left-1/2 md:-translate-x-1/2" />

                            <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-16">

                                {/* Date */}
                                <div
                                    className={`${
                                        index % 2 === 0
                                            ? "md:text-right"
                                            : "md:order-2"
                                    }`}
                                >
                                    <p className="text-sm font-semibold text-indigo-600">
                                        {experience.period}
                                    </p>
                                </div>

                                {/* Content */}
                                <div
                                    className={`mt-4 md:mt-0 ${
                                        index % 2 === 0
                                            ? "md:order-2"
                                            : "md:order-1"
                                    }`}
                                >
                                    <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                                        <h3 className="text-xl font-bold text-gray-900">
                                            {experience.role}
                                        </h3>

                                        <p className="mt-1 font-medium text-gray-600">
                                            {experience.company}
                                        </p>

                                        <p className="mt-5 text-sm leading-6 text-gray-600">
                                            {experience.description}
                                        </p>

                                        <ul className="mt-5 space-y-3">
                                            {experience.responsibilities.map(
                                                (responsibility, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-3 text-sm leading-6 text-gray-600"
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