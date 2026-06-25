export default function Home() {
  const skills = [
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "Bash",
    "R",
    "React",
    "Next.js",
    "Machine Learning",
    "Data Science",
    "SQL",
    "AI",
  ];

  const projects = [
    {
      title: "Telegram Police Bot",
      description:
        "A Telegram automation and assistance bot designed for quick communication and alert handling.",
    },
    {
      title: "Cancer Detection",
      description:
        "Machine learning project focused on cancer prediction and early-stage detection.",
    },
    {
      title: "Plant Disease Detection",
      description:
        "AI-powered disease detection system using image processing and machine learning.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-[0.3em]">
            AMAN
          </h1>

          <div className="hidden md:flex gap-8 text-gray-400">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="uppercase tracking-[0.4em] text-gray-400">
          DATA SCIENCE ENGINEER
        </p>

        <h1 className="text-7xl md:text-9xl font-black mt-6">
          AMAN
          <span className="block text-gray-500">
            KUMAR
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-gray-400 text-lg">
          B.Tech graduate specializing in Data Science,
          Machine Learning, Artificial Intelligence,
          and Full Stack Development.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <a
            href="https://github.com/Aman88097"
            target="_blank"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aman-singh-02a13840a/"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="/AMAN_KUMAR_Resume.pdf"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <p className="text-gray-300 text-lg leading-8">
            I am AMAN KUMAR, a B.Tech graduate
            specializing in Data Science. I enjoy
            building intelligent systems, AI
            applications, machine learning models,
            automation tools, and modern web
            applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white hover:text-black transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold mb-5">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-10">
          Contact
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
          <p className="text-gray-400 mb-8">
            Interested in working together?
          </p>

          <a
            href="mailto:aman617886@gmail.com"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            aman617886@gmail.com
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/Aman88097"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-singh-02a13840a/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 AMAN KUMAR • Built with Next.js
      </footer>
    </main>
  );
}