import { useState } from "react";
import { skillsContent } from "@/data/content";
import { cn } from "@/lib/utils";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-graphite-light/30">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            <span className="text-primary">|</span> Habilidades
          </h2>
        </div>

        {/* Skills Grid with Progress Bars */}
        <div className="space-y-6">
          {skillsContent.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "group cursor-pointer transition-all duration-300 animate-fade-up",
                hoveredSkill && hoveredSkill !== skill.name && "opacity-50"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Name and Level */}
              <div className="flex justify-between items-center mb-2">
                <span className={cn(
                  "text-sm md:text-base font-medium transition-colors duration-300",
                  hoveredSkill === skill.name ? "text-primary" : "text-foreground"
                )}>
                  {skill.name}
                </span>
                <span className={cn(
                  "text-xs md:text-sm font-medium transition-all duration-300",
                  hoveredSkill === skill.name 
                    ? "text-primary opacity-100" 
                    : "text-muted-foreground opacity-0"
                )}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out",
                    "bg-gradient-to-r from-primary to-primary/70",
                    hoveredSkill === skill.name && "shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                  )}
                  style={{
                    width: `${skill.level}%`,
                    transform: hoveredSkill === skill.name ? "scaleY(1.2)" : "scaleY(1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
