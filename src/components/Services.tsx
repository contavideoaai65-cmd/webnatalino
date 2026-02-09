import { servicesContent } from "@/data/content";
import { Globe, Target, Settings, MessageCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-10 w-10" />,
  target: <Target className="h-10 w-10" />,
  settings: <Settings className="h-10 w-10" />,
};

const Services = () => {
  const { title, items } = servicesContent;

  return (
    <section className="py-24 md:py-32 bg-graphite-light/30">
      <div className="container">
        <h2 className="section-title text-center">
          <span className="section-title-accent">|</span> {title.replace("| ", "")}
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Soluções pensadas para pequenos negócios que querem crescer na internet
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((service, index) => (
            <div
              key={service.title}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 relative group">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  {iconMap[service.icon] || <Globe className="h-10 w-10" />}
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://wa.me/5521981853032?text=Olá! Gostaria de saber mais sobre seus serviços de criação de sites."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-base"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar orçamento grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
