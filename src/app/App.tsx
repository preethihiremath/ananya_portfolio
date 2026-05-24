import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Leaf,
  TrendingUp,
  Award,
  Briefcase,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { AnimateIn } from "../components/AnimateIn";
import { ProjectsCarousel } from "../components/ProjectsCarousel";
import { SkillsGrid } from "../components/SkillsGrid";

const iconMap = {
  Mail,
  Phone,
  Linkedin,
};

export default function App() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = reduceMotion ? "auto" : "smooth";
  }, [reduceMotion]);

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <motion.nav
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4caf50] to-[#7cb342] flex items-center justify-center text-white font-bold">
              AC
            </div>
            <span className="font-semibold text-[#1e293b]">Ananya C G</span>
          </div>
          <div className="hidden sm:flex gap-6 md:gap-8">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#1e293b] hover:text-[#4caf50] transition-colors duration-300 font-medium text-sm md:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a4d2e] via-[#2b5a5e] to-[#1e293b] overflow-hidden">
        {!reduceMotion && (
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#7cb342]/20 blur-3xl"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full">
            <path
              d="M0 0C240 80 480 120 720 100C960 80 1200 40 1440 60V120H0V0Z"
              fill="#fafaf8"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-white"
            >
              <div className="inline-block px-4 py-2 bg-[#7cb342]/20 backdrop-blur-sm rounded-full mb-6 border border-[#7cb342]/30">
                <span className="text-[#7cb342] text-sm font-medium">
                  ESG & Sustainability Professional
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {portfolioData.hero.fullName}
              </h1>
              <p className="text-xl text-white/90 mb-4 font-medium">{portfolioData.hero.role}</p>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                {portfolioData.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={portfolioData.hero.cta.primary.href}
                  className="px-8 py-4 bg-[#4caf50] text-white rounded-xl hover:bg-[#45a049] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {portfolioData.hero.cta.primary.label}
                  <ArrowRight size={20} />
                </a>
                <a
                  href={portfolioData.hero.cta.secondary.href}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
                >
                  {portfolioData.hero.cta.secondary.label}
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#7cb342]/30 bg-gradient-to-br from-[#4caf50] to-[#7cb342]">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Leaf className="text-white/40" size={120} />
                  </div>
                  <img
                    src={portfolioData.hero.profileImage}
                    alt={portfolioData.hero.fullName}
                    className="relative z-10 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#7cb342] opacity-50 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#4caf50] opacity-50 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
              {portfolioData.about.heading}
            </h2>
            <p className="text-xl text-[#4caf50] font-medium">{portfolioData.about.subheading}</p>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Leaf,
                title: "Sustainability Focus",
                text: "Expertise in ESG strategy, carbon footprint analysis, and environmental impact assessment.",
                gradient: "from-[#4caf50] to-[#7cb342]",
              },
              {
                icon: TrendingUp,
                title: "Financial Modeling",
                text: "Strong foundation in CAPEX/OPEX analysis, LCOE calculations, and project economics.",
                gradient: "from-[#2b5a5e] to-[#4caf50]",
              },
              {
                icon: Award,
                title: "Data-Driven Impact",
                text: "Building tools and frameworks for ESG data validation and environmental metrics tracking.",
                gradient: "from-[#7cb342] to-[#4caf50]",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6`}
                  >
                    <card.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <div className="bg-gradient-to-r from-[#f5f5f0] to-white rounded-2xl p-12 border border-gray-100">
              <p className="text-lg text-[#1e293b] leading-relaxed max-w-4xl mx-auto text-center">
                {portfolioData.about.summary}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
              {portfolioData.education.heading}
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.education.qualifications.map((qual, i) => (
              <AnimateIn key={qual.id} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 border-2 border-[#4caf50]/20 hover:border-[#4caf50] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4caf50] to-[#7cb342] flex items-center justify-center">
                      <Award className="text-white" size={28} />
                    </div>
                    <div className="inline-block px-4 py-2 bg-[#4caf50]/10 rounded-lg">
                      <p className="text-[#4caf50] font-bold text-lg">{qual.gpa}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3">{qual.degree}</h3>
                  {"specialization" in qual && qual.specialization && (
                    <p className="text-[#4caf50] font-medium mb-3">
                      Specialization: {qual.specialization}
                    </p>
                  )}
                  <p className="text-[#1e293b] font-semibold mb-1">{qual.institution}</p>
                  <p className="text-gray-600 mb-3">{qual.location}</p>
                  <p className="text-gray-500 text-sm">{qual.period}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#fafaf8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
              {portfolioData.experience.heading}
            </h2>
            <p className="text-xl text-[#4caf50] font-medium">
              {portfolioData.experience.subheading}
            </p>
          </AnimateIn>
          <div className="space-y-8">
            {portfolioData.experience.positions.map((position, i) => (
              <AnimateIn key={position.id} delay={i * 0.06}>
                <div className="bg-gradient-to-br from-[#2b5a5e] to-[#1a4d2e] rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="flex gap-4 items-start mb-4 md:mb-0">
                      <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                        <Briefcase className="text-[#7cb342]" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{position.role}</h3>
                        <p className="text-[#7cb342] font-semibold text-lg mb-1">
                          {position.company}
                        </p>
                        <p className="text-white/70">{position.location}</p>
                      </div>
                    </div>
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <p className="text-white font-medium">{position.period}</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    {position.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 items-start bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      >
                        <CheckCircle2 className="text-[#7cb342] shrink-0 mt-1" size={22} />
                        <p className="text-white/90 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ProjectsCarousel />
      <SkillsGrid />

      {/* Contact */}
      <section
        id="contact"
        className="relative bg-gradient-to-br from-[#1a4d2e] via-[#2b5a5e] to-[#1e293b] py-24 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4caf50] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7cb342] opacity-10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {portfolioData.contact.ctaHeading}
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              {portfolioData.contact.ctaText}
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {portfolioData.contact.channels.map((channel, i) => {
              const Icon = iconMap[channel.icon as keyof typeof iconMap];
              return (
                <AnimateIn key={channel.type} delay={i * 0.1}>
                  <a
                    href={channel.href}
                    className="block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-[#7cb342] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4caf50] to-[#7cb342] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={28} />
                      </div>
                      <p className="text-[#7cb342] text-sm font-semibold mb-2">{channel.label}</p>
                      <p className="text-white font-medium break-all">{channel.value}</p>
                    </div>
                  </a>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#1e293b] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/70">{portfolioData.contact.footer}</p>
        </div>
      </footer>
    </div>
  );
}
