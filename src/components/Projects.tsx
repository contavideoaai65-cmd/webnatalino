import { useState, useRef } from "react";
import { projectsContent, ProjectItem } from "@/data/content";
import ProjectCard from "./ProjectCard";
import GalleryModal from "./GalleryModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { title, items } = projectsContent;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    const cardWidth = 340;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleOpenGallery = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseGallery = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title mb-0">
            <span className="section-title-accent">|</span> {title.replace("| ", "")}
          </h2>
          
          {/* Navigation arrows - always visible */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all focus-ring"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all focus-ring"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="scroll-container -mx-4 px-4"
          role="region"
          aria-label="Carrossel de projetos"
        >
          {items.map((project, index) => (
            <div
              key={project.id}
              className="scroll-item w-[300px] sm:w-[340px]"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                onOpenGallery={handleOpenGallery}
              />
            </div>
          ))}
          
          {/* Peek indicator - empty space at the end */}
          <div className="scroll-item w-4 flex-shrink-0" aria-hidden="true" />
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-center text-sm text-muted-foreground mt-6 md:hidden">
          Deslize para ver mais projetos →
        </p>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseGallery}
      />
    </section>
  );
};

export default Projects;
