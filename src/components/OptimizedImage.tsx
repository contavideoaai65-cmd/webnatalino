interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  sizes?: string;
  width?: number;
  height?: number;
}

/**
 * Renders a <picture> element with AVIF/WebP sources and JPEG/PNG fallback.
 * The user will upload optimized versions at the same path with .avif and .webp extensions.
 * Until those files exist, it gracefully falls back to the original src.
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, 50vw",
  width,
  height,
}: OptimizedImageProps) => {
  // Derive AVIF and WebP paths from the original src
  const basePath = src.replace(/\.(jpe?g|png)$/i, "");
  const avifSrc = `${basePath}.avif`;
  const webpSrc = `${basePath}.webp`;

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        sizes={sizes}
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
