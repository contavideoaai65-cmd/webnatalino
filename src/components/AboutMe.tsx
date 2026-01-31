import { aboutContent } from "@/data/content";

const AboutMe = () => {
  const { title, text, highlightNumber, highlightLabel, nicheLabel } = aboutContent;

  return (
    <section id="sobre-mim" className="py-24 md:py-32">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-accent">|</span> {title.replace("| ", "")}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {text}
            </p>
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
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {nicheLabel.split("pequenas empresas").map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-neon font-medium">pequenas empresas</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
