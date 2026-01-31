import { contactContent } from "@/data/content";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const { title, emailLabel, emailValue, whatsappLabel, whatsappNumber, whatsappDisplay } = contactContent;

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            <span className="section-title-accent">|</span> {title.replace("| ", "")}
          </h2>
          
          <p className="text-muted-foreground mb-10">
            Pronto para melhorar a presença digital do seu negócio? Vamos conversar.
          </p>
          
          {/* Contact cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email card */}
            <div 
              className="card-dark p-8 md:p-10 animate-fade-up group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {emailLabel}
                </span>
              </div>
              
              <a
                href={`mailto:${emailValue}`}
                className="text-xl md:text-2xl font-display font-bold text-neon-strong hover:underline underline-offset-4 transition-all focus-ring rounded-lg px-2 py-1 block"
              >
                {emailValue}
              </a>
            </div>

            {/* WhatsApp card */}
            <div 
              className="card-dark p-8 md:p-10 animate-fade-up group hover:border-green-500/50 transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {whatsappLabel}
                </span>
              </div>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-display font-bold text-green-400 hover:text-green-300 hover:underline underline-offset-4 transition-all focus-ring rounded-lg px-2 py-1 block"
              >
                {whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
