import { ProjectItem } from "@/data/content";
import { MessageCircle } from "lucide-react";


interface ProjectCardProps {
  project: ProjectItem;
  onOpenGallery: (project: ProjectItem) => void;
}

const ProjectCard = ({ project, onOpenGallery }: ProjectCardProps) => {
  const { title, description, highlight, benefit, coverImage, buttonLabel } = project;

  return (
    <article className="card-dark overflow-hidden flex flex-col h-full group">
      {/* Cover Image */}
      <div
        className="relative aspect-video overflow-hidden cursor-pointer"
        onClick={() => onOpenGallery(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onOpenGallery(project)}
        aria-label={`Ver galeria de fotos de ${title}`}
      >
        <img
          src={coverImage}
          alt={`Projeto: ${title} — ${highlight}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={550}
          height={350}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {title}
        </h3>

        <span className="text-neon text-sm font-medium mb-2">
          {highlight}
        </span>

        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Benefit */}
        <p className="text-xs text-primary/80 font-medium mb-4 italic">
          {benefit}
        </p>

        {/* CTA */}
        <a
          href={`https://wa.me/5521981853032?text=Olá! Vi o projeto "${title}" e quero um site parecido.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon text-sm w-full text-center"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          {buttonLabel}
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
