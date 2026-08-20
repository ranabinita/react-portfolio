import { useState } from "react";

function Hero() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (y / rect.height - 0.5) * -20;

    setRotation({
      x: rotateX,
      y: rotateY,
    });

    setMousePosition({
      x: mouseX,
      y: mouseY,
    });
  };

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });

    setMousePosition({
      x: 50,
      y: 50,
    });
  };

  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div>
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Welcome to my portfolio
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-7xl">
            Hi, I'm Binita
            <span className="block text-indigo-600">
              Computer Engineer.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I build web applications and machine learning solutions
            using modern technologies. I'm passionate about software
            development, artificial intelligence, and solving real-world
            problems through technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="flex justify-center lg:justify-end"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "1000px",
          }}
        >

          {/* ================= 3D CONTAINER ================= */}

          <div
            className="relative h-[420px] w-[320px] transition-transform duration-200 ease-out md:h-[480px] md:w-[360px]"
            style={{
              transform: `
                rotateX(${rotation.x}deg)
                rotateY(${rotation.y}deg)
              `,
              transformStyle: "preserve-3d",
            }}
          >

            {/* ================= INTERACTIVE NEON AURA ================= */}

            <div
              className="absolute -inset-10 rounded-[3rem] opacity-70 blur-3xl transition-all duration-200"
              style={{
                background: `
                  radial-gradient(
                    circle at ${mousePosition.x}% ${mousePosition.y}%,
                    rgba(99, 102, 241, 0.65),
                    rgba(168, 85, 247, 0.35) 35%,
                    transparent 70%
                  )
                `,
                transform: "translateZ(-80px)",
              }}
            />

            {/* ================= SECOND AURA ================= */}

            <div
              className="absolute -inset-4 rounded-[2.5rem] border border-indigo-300/30"
              style={{
                boxShadow: `
                  0 0 30px rgba(99, 102, 241, 0.25),
                  0 0 70px rgba(168, 85, 247, 0.18)
                `,
                transform: "translateZ(-30px)",
              }}
            />

            {/* ================= MAIN PHOTO CARD ================= */}

            <div
              className="absolute inset-0 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl"
              style={{
                transform: "translateZ(30px)",
              }}
            >
              <img
                src="/profile.jpeg"
                alt="Binita Rana"
                className="h-full w-full object-cover"
              />

              {/* Subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
            </div>

            {/* ================= BOTTOM FLOATING BADGE ================= */}

            <div
              className="absolute -bottom-6 -left-8 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-xl"
              style={{
                transform: "translateZ(80px)",
              }}
            >
              <p className="text-xs font-medium text-gray-500">
                Currently
              </p>

              <p className="mt-1 font-bold text-gray-900">
                Building & Learning
              </p>
            </div>

            {/* ================= TECH BADGE ================= */}

            <div
              className="absolute -right-6 top-12 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-xl"
              style={{
                transform: "translateZ(70px)",
              }}
            >
              Python • React • AI
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;