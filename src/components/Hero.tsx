import { heroContent } from "@/data/content";
import { ArrowDown } from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

const Hero = () => {
  const { firstName, lastName, subtitle, ctaLabel, ctaAnchor, avatarImage: contentAvatar } = heroContent;
  
  const avatarImage = contentAvatar === "/placeholder.svg" 
    ? avatarPlaceholder 
    : contentAvatar;

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-graphite-light opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-neon-strong">{firstName}</span>
              <br />
              <span className="text-foreground">{lastName}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {subtitle}
            </p>
            
            <a
              href={ctaAnchor}
              className="btn-neon group"
            >
              {ctaLabel}
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
          
          {/* Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(var(--neon-green)/0.3)]">
                <img
                  src={avatarImage}
                  alt={`${firstName} ${lastName}`}
                  className="w-full h-full object-cover"
                  loading="eager"
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
