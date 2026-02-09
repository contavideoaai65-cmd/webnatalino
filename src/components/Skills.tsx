import { skillsContent } from "@/data/content";

const Skills = () => {
  return (
    <section className="py-24 md:py-32 bg-graphite-light/30">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            <span className="text-primary">|</span> Habilidades
          </h2>
        </div>

        {/* Skills as pills - same style as Hero */}
        <div className="flex flex-wrap justify-center gap-3">
          {skillsContent.map((skill, index) => (
            <span
              key={skill.name}
              className="px-4 py-2 text-sm md:text-base font-medium border border-primary/40 text-primary rounded-full bg-primary/10 hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
