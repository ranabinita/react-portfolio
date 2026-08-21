function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-950 px-6 py-8 text-gray-400"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Footer */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Binita
              <span className="text-indigo-500">.</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6">
              Computer Engineer passionate about software development,
              machine learning, artificial intelligence, and building
              practical solutions with technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>

              <a href="#experience" className="transition hover:text-white">
                Experience
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm">
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
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs">
          <p>
            © 2026 Binita Rana. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;