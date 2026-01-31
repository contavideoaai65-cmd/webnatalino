import { skillsContent } from "@/data/content";
import { Layout, MessageCircle, Smartphone, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout className="h-8 w-8" />,
  "message-circle": <MessageCircle className="h-8 w-8" />,
  smartphone: <Smartphone className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
};

const Skills = () => {
  return (
    <section className="py-24 md:py-32 bg-graphite-light/30">
      <div className="container">
        <h2 className="section-title text-center mb-12">
          <span className="section-title-accent">|</span> Habilidades
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsContent.map((skill, index) => (
            <div
              key={skill.title}
              className="card-dark p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[skill.icon] || <Layout className="h-8 w-8" />}
              </div>
              
              <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-neon transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
