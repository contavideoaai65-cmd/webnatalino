import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { heroContent, aboutContent } from "@/data/content";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>
        {heroContent.firstName} {heroContent.lastName} | Desenvolvedor(a) Web para Pequenas Empresas
      </title>
      <meta
        name="description"
        content={`${heroContent.subtitle.slice(0, 155)}...`}
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
        <div id="servicos">
          <Services />
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
