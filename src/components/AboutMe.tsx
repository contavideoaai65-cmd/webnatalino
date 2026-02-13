import { aboutContent } from "@/data/content";
import { Check } from "lucide-react";

const AboutMe = () => {
  const { title, text, highlightNumber, highlightLabel, differentials } = aboutContent;

  return (
    <section id="sobre-mim" className="py-24 md:py-32">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-accent">|</span> {title.replace("| ", "")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {text}
            </p>

            {/* Differentials */}
            <ul className="space-y-3">
              {differentials.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlight box */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="card-dark p-8 md:p-10">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-7xl font-display font-bold text-neon-strong">
                  {highlightNumber}
                </span>
                <span className="text-xl md:text-2xl text-foreground font-medium">
                  {highlightLabel}
                </span>
              </div>

              <a
                href="https://wa.me/5521981853032?text=Olá! Gostaria de saber mais sobre seus serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon mt-6 w-full text-center"
                aria-label="Falar com Natalino Barbosa no WhatsApp"
              >
                Falar comigo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
