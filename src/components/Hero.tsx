import { heroContent } from "@/data/content";
import { ArrowDown, MessageCircle } from "lucide-react";
import avatarNatalino from "@/assets/avatar-natalino.jpeg";

const Hero = () => {
  const {
    firstName,
    lastName,
    subtitle,
    specialties,
    ctaLabel,
    ctaAnchor,
    ctaSecondaryLabel,
    ctaSecondaryLink,
    avatarImage: contentAvatar,
  } = heroContent;

  const avatarImage = contentAvatar === "/placeholder.svg" ? avatarNatalino : contentAvatar;

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-graphite-light opacity-50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div
            className="order-2 lg:order-1 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Sites profissionais para</span>
              <br />
              <span className="text-neon-strong">pequenas empresas</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                que querem mais clientes
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">
              {subtitle}
            </p>

            <ul className="flex flex-wrap gap-2 mb-8">
              {specialties.map((specialty, index) => (
                <li
                  key={index}
                  className="px-3 py-1 text-sm font-medium border border-primary/40 text-primary rounded-full bg-primary/10"
                >
                  {specialty}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={ctaAnchor} target="_blank" rel="noopener noreferrer" className="btn-neon group text-center" aria-label="Solicitar orçamento grátis via WhatsApp">
                <MessageCircle className="mr-2 h-5 w-5" />
                {ctaLabel}
              </a>
              <a href={ctaSecondaryLink} className="btn-outline-neon group text-center" aria-label="Ver projetos do portfólio">
                {ctaSecondaryLabel}
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(var(--neon-green)/0.3)]">
                <img
                  src={avatarImage}
                  alt={`${firstName} ${lastName} — Desenvolvedor Web para Pequenas Empresas`}
                  className="w-full h-full object-cover shadow-none"
                  loading="eager"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
