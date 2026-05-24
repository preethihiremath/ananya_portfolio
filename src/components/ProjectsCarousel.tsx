import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileSpreadsheet,
  Sparkles,
  Zap,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { AnimateIn } from "./AnimateIn";

const projects = portfolioData.projects.items;
const accentGradients = [
  "from-[#1a4d2e] via-[#2b5a5e] to-[#1e293b]",
  "from-emerald-700 via-teal-700 to-cyan-900",
  "from-violet-800 via-purple-800 to-indigo-900",
];

export function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const total = projects.length;
  const project = projects[index];
  const gradient = accentGradients[index % accentGradients.length];

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);

  const slideVariants = reduceMotion
    ? { enter: {}, center: {}, exit: {} }
    : {
        enter: { opacity: 0, x: 40, scale: 0.98 },
        center: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -40, scale: 0.98 },
      };

  return (
    <section id="projects" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            {portfolioData.projects.heading}
          </h2>
          <p className="text-xl text-[#4caf50] font-medium">
            {portfolioData.projects.subheading}
          </p>
        </AnimateIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Nav arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#1e293b] hover:bg-[#4caf50] hover:text-white hover:border-[#4caf50] transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#1e293b] hover:bg-[#4caf50] hover:text-white hover:border-[#4caf50] transition-all duration-300 hover:scale-105"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={project.id}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} text-white shadow-2xl`}
              >
                {/* Decorative layers */}
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[24px_24px]" />
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#7cb342]/30 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
                {!reduceMotion && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: "-120%" }}
                    animate={{ x: "220%" }}
                    transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  />
                )}

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold border border-white/20">
                        <Sparkles size={14} />
                        {project.tag}
                      </span>
                      <span className="text-sm text-white/70">{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm font-medium">
                      <Zap size={14} className="text-[#7cb342]" />
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight max-w-2xl">
                    {project.title}
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {project.highlights.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + idx * 0.06 }}
                        className="flex gap-3 items-start text-white/90"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#7cb342] shrink-0 shadow-[0_0_8px_#7cb342]" />
                        <span className="leading-relaxed text-sm md:text-base">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {"workbookUrl" in project && project.workbookUrl && (
                    <a
                      href={project.workbookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1a4d2e] font-semibold hover:bg-[#e8f5e9] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      <FileSpreadsheet size={20} />
                      {project.workbookLabel ?? "View workbook"}
                      <ExternalLink size={16} className="opacity-70" />
                    </a>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Dots */}
          {total > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-[#4caf50]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
