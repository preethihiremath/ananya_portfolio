import { BarChart3, Code2, Leaf, TrendingUp, Users, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { AnimateIn } from "./AnimateIn";

const skillIconMap = {
  TrendingUp,
  Leaf,
  BarChart3,
  Users,
  Code2,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="bg-[#fafaf8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            {portfolioData.skills.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {portfolioData.skills.subheading}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.skills.categories.map((category, index) => {
            const Icon =
              skillIconMap[category.icon as keyof typeof skillIconMap] ?? Sparkles;

            return (
              <AnimateIn key={category.id} delay={index * 0.06}>
                <div className="group relative h-full rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#4caf50]/25 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none`}
                  />
                  <div className="relative z-10 flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.accent} flex items-center justify-center shadow-sm shrink-0`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-bold text-[#1e293b] leading-snug">
                      {category.category}
                    </h3>
                  </div>
                  <div className="relative z-10 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex px-2.5 py-1 text-xs sm:text-sm font-medium text-[#334155] bg-[#f1f5f1] rounded-md hover:bg-[#e8f5e9] hover:text-[#1a4d2e] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
