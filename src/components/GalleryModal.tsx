import { useEffect, useRef, useState, useCallback } from "react";
import { ProjectItem } from "@/data/content";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ project, isOpen, onClose }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const images = project?.galleryImages || [];
  const totalImages = images.length;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  // Focus trap and restore focus
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
      setCurrentIndex(0);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Touch/swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de fotos: ${project.title}`}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg"
          aria-label="Fechar galeria"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Counter */}
        <div className="absolute -top-12 left-0 text-muted-foreground text-sm">
          {currentIndex + 1} / {totalImages}
        </div>

        {/* Image container */}
        <div
          className="relative aspect-video rounded-xl overflow-hidden bg-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`${project.title} - Imagem ${currentIndex + 1} de ${totalImages}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation arrows */}
          {totalImages > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background rounded-full text-foreground transition-all focus-ring"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background rounded-full text-foreground transition-all focus-ring"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-center mt-4 text-lg font-display font-semibold text-foreground">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default GalleryModal;
