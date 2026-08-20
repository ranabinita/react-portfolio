import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
          onClick={closeMenu}
        >
          BR
          <span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Contact
          </a>

        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg p-2 text-xl text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 shadow-lg md:hidden">

          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={closeMenu}
              className="font-medium text-gray-600 transition hover:text-indigo-600"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="font-medium text-gray-600 transition hover:text-indigo-600"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="font-medium text-gray-600 transition hover:text-indigo-600"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="font-medium text-gray-600 transition hover:text-indigo-600"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="font-medium text-gray-600 transition hover:text-indigo-600"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-medium text-gray-600 transition hover:text-indigo-600"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-indigo-700"
            >
              Let's Talk
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;