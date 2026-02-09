import { contactContent } from "@/data/content";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const {
    title,
    subtitle,
    emailLabel,
    emailValue,
    whatsappLabel,
    whatsappNumber,
    whatsappDisplay,
    whatsappCtaText,
  } = contactContent;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de criar um site para meu negócio.`;

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            <span className="section-title-accent">|</span>{" "}
            {title.replace("| ", "")}
          </h2>

          <p className="text-lg text-muted-foreground mb-10">{subtitle}</p>

          {/* WhatsApp CTA - Primary */}
          <div
            className="card-dark p-8 md:p-12 mb-6 animate-fade-up group hover:border-green-500/50 transition-all duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>

            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
              {whatsappLabel} — Resposta rápida
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-display font-bold text-green-400 hover:text-green-300 transition-all block mb-6"
            >
              {whatsappDisplay}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 bg-green-500 text-white hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-[1.02] min-h-[44px]"
            >
              {whatsappCtaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Email - Secondary */}
          <div
            className="card-dark p-6 md:p-8 animate-fade-up group hover:border-primary/50 transition-all duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm uppercase tracking-wider">
                {emailLabel}
              </span>
            </div>

            <a
              href={`mailto:${emailValue}`}
              className="text-lg md:text-xl font-display font-bold text-neon-strong hover:underline underline-offset-4 transition-all focus-ring rounded-lg px-2 py-1 block"
            >
              {emailValue}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
