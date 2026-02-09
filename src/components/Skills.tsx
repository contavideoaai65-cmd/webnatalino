import { useState } from "react";
import { skillsContent } from "@/data/content";
import { cn } from "@/lib/utils";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-graphite-light/30">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            <span className="text-primary">|</span> Habilidades
          </h2>
        </div>

        {/* Skills list */}
        <div className="space-y-6">
          {skillsContent.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "group cursor-pointer transition-all duration-500 animate-fade-up",
                hoveredIndex !== null && hoveredIndex !== index && "opacity-40"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between gap-8">
                {/* Left side - skill name with animated elements */}
                <div className="flex items-center gap-4 min-w-[140px]">
                  {/* Animated dot */}
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      hoveredIndex === index
                        ? "bg-primary scale-125 shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                        : "bg-muted-foreground/30"
                    )}
                  />

                  {/* Skill name */}
                  <span
                    className={cn(
                      "text-lg md:text-xl font-display font-semibold transition-colors duration-300",
                      hoveredIndex === index ? "text-primary" : "text-foreground"
                    )}
                  >
                    {skill.name}
                  </span>
                </div>

                {/* Right side - progress visualization */}
                <div className="flex-1 flex items-center gap-4">
                  <div className="relative flex-1 h-2 overflow-hidden rounded-full">
                    {/* Background track */}
                    <div className="absolute inset-0 bg-muted rounded-full" />

                    {/* Animated fill */}
                    <div
                      className={cn(
                        "absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out",
                        hoveredIndex === index
                          ? "bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                          : "bg-muted-foreground/50"
                      )}
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />

                    {/* Shine effect on hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300",
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>

                  <div className="min-w-[50px] text-right">
                    <span
                      className={cn(
                        "text-lg font-display font-bold transition-colors duration-300",
                        hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              {index < skillsContent.length - 1 && (
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          <p>Passe o mouse para explorar</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
