import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialProofNotification from "@/components/SocialProofNotification";
import { heroContent } from "@/data/content";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>
        Criação de Sites para Pequenas Empresas | {heroContent.firstName} {heroContent.lastName}
      </title>
      <meta
        name="description"
        content="Crio sites profissionais para pequenas empresas que querem atrair mais clientes pela internet. Orçamento grátis pelo WhatsApp."
      />

      <Header />
      <main className="min-h-screen bg-background">
        <div id="inicio">
          <Hero />
        </div>
        <AboutMe />
        <div id="habilidades">
          <Skills />
        </div>
        <div id="projetos">
          <Projects />
        </div>
        <div id="planos">
          <Pricing />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <Contact />
        <Footer />
      </main>
      <SocialProofNotification />
    </>
  );
};

export default Index;
