import { heroContent } from "@/data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { firstName, lastName } = heroContent;

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear}{" "}
            <span className="text-neon">{firstName}</span>{" "}
            <span className="text-foreground">{lastName}</span>.{" "}
            Todos os direitos reservados.
          </p>
          
          <nav className="flex gap-6" aria-label="Links do rodapé">
            <a
              href="#sobre-mim"
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded-lg px-2 py-1"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded-lg px-2 py-1"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
