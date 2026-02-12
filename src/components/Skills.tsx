import { cn } from "@/lib/utils";

interface SkillGroup {
  category: string;
  level: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Expert",
    level: "Domínio avançado",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "JavaScript", "Vite", "Sites Institucionais", "Landing Pages"],
  },
  {
    category: "Proficiente",
    level: "Uso frequente",
    items: ["Figma", "Git / GitHub", "SEO Técnico", "Responsividade", "Acessibilidade Web", "Criação de Logotipos"],
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 md:py-32 bg-graphite-light/30" aria-labelledby="skills-heading">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            <span className="text-primary">|</span> Habilidades & Tecnologias
          </h2>
        </div>

        {/* Skill Groups */}
        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.category}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + groupIndex * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-display font-semibold text-primary">
                  {group.category}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  — {group.level}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "border bg-muted/20 text-foreground/90",
                      "hover:border-primary hover:text-primary hover:bg-primary/10",
                      groupIndex === 0
                        ? "border-primary/30"
                        : "border-border"
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
