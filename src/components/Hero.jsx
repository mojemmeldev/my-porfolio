import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt, FaNeos } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { FaJs } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import Logos from "../assets/img.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Hire • Fresher Web Developer</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-600 font-medium text-lg">
              Hello, I am a Mojammel Hossain
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Full Stack &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Web Application Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            I craft clean, fast, and responsive modern web applications with{" "}
            <span className="text-gray-900 font-semibold">MongoDB, Express.js, Node.js, React.js</span>,{" "}
            <span className="text-gray-900 font-semibold">JavaScript (ES6+)</span>, and{" "}
            <span className="text-gray-900 font-semibold">Tailwind CSS</span>.
            Dedicated to writing maintainable code and bringing intuitive user experiences to life.
          </p>

          {/* Action Buttons (Resume prominently featured) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              <span>View Resume / CV</span>
            </Link>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-blue-50/40"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-blue-600 px-4 py-3.5 transition"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">



              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <RiNextjsLine className="text-blak-500 text-base" /> React.js
              </span>


              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaJsSquare className="text-yellow-500 text-base" /> JavaScript (ES6+)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiVite className="text-purple-500 text-base" /> Vite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaGitAlt className="text-orange-500 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Showcase & Visual Card */}
        <div className="lg:col-span-5 relative">
          {/* Visual Code Box */}
         <img src={Logos} alt="logo" className="rounded-2xl" />

        </div>
      </div>
    </section>
  );
};

export default Hero;