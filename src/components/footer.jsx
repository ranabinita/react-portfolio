function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-950 px-6 py-14 text-gray-400"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Binita
              <span className="text-indigo-500">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7">
              Computer Engineer passionate about software development,
              machine learning, artificial intelligence, and building
              practical solutions with technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">

              <a
                href="#home"
                className="transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition hover:text-white"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="transition hover:text-white"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="transition hover:text-white"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">

              <a
                href="https://github.com/ranabinita"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/binita-rana-visit/"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:binirana73@gmail.com"
                className="transition hover:text-white"
              >
                Email ↗
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-800 pt-6 text-sm md:flex-row">

          <p>
            © 2026 Binita Rana. All rights reserved.
          </p>

          {/* <p>
            Built with React & Tailwind CSS
          </p> */}

        </div>

      </div>
    </footer>
  );
}

export default Footer;