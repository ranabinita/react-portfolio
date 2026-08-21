import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Clear previous messages when user starts editing again
    if (status !== "idle" && status !== "sending") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-indigo-600">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Have a question, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              I'm always interested in discussing new opportunities,
              interesting projects, and ideas in software development
              and machine learning.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Email
                </p>

                <p className="mt-1 text-gray-600">
                  binirana73@gmail.com
                </p>
              </div>

              {/* GitHub */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  GitHub
                </p>

                <a
                  href="https://github.com/ranabinita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-indigo-600 hover:text-indigo-700"
                >
                  GitHub ↗
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/binita-rana-visit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-indigo-600 hover:text-indigo-700"
                >
                  LinkedIn Profile ↗
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-900"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={status === "sending"}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                disabled={status === "sending"}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-900"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                disabled={status === "sending"}
                className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

            {/* Success Message */}
            {status === "success" && (
              <p className="mt-4 text-center text-sm font-medium text-green-600">
                ✓ Thanks! Your message has been sent successfully.
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p className="mt-4 text-center text-sm font-medium text-red-600">
                ✕ Something went wrong. Please try again or email me
                directly.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;