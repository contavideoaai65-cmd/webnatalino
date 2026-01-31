import { contactContent } from "@/data/content";
import { Mail } from "lucide-react";

const Contact = () => {
  const { title, emailLabel, emailValue } = contactContent;

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">
            <span className="section-title-accent">|</span> {title.replace("| ", "")}
          </h2>
          
          <p className="text-muted-foreground mb-10">
            Pronto para melhorar a presença digital do seu negócio? Vamos conversar.
          </p>
          
          {/* Email card */}
          <div className="card-dark p-8 md:p-10 inline-block animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm uppercase tracking-wider">
                {emailLabel}
              </span>
            </div>
            
            <a
              href={`mailto:${emailValue}`}
              className="text-2xl md:text-3xl font-display font-bold text-neon-strong hover:underline underline-offset-4 transition-all focus-ring rounded-lg px-2 py-1"
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
