import { ProjectItem } from "@/data/content";
import { ExternalLink, Images } from "lucide-react";
interface ProjectCardProps {
  project: ProjectItem;
  onOpenGallery: (project: ProjectItem) => void;
}
const ProjectCard = ({
  project,
  onOpenGallery
}: ProjectCardProps) => {
  const {
    title,
    description,
    highlight,
    coverImage,
    externalUrl,
    buttonLabel
  } = project;
  return <article className="card-dark overflow-hidden flex flex-col h-full group">
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => onOpenGallery(project)} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onOpenGallery(project)} aria-label={`Ver galeria de fotos de ${title}`}>
        <img src={coverImage} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-sm text-foreground flex items-center gap-2">
            <Images className="h-4 w-4" />
            Ver fotos
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {title}
        </h3>
        
        <span className="text-neon text-sm font-medium mb-3">
          {highlight}
        </span>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {description}
        </p>
        
        {/* Actions */}
        
      </div>
    </article>;
};
export default ProjectCard;