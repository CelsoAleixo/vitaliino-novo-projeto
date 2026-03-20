import { useState, useRef, useEffect } from "react";

interface ImageSource {
  src: string;
  type?: string;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
  webpSrc?: string;
  avifSrc?: string;
  fallbackSrc?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  onLoad?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * OptimizedImage - High-performance image component with:
 * - Modern format support (AVIF, WebP) with PNG/JPG fallbacks
 * - Responsive srcset for optimal sizing
 * - Native lazy loading with intersection observer fallback
 * - iOS Safari compatibility (fallbacks for pre-iOS 16)
 * - Automatic format detection and fallback chain
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
  srcSet,
  webpSrc,
  avifSrc,
  fallbackSrc,
  loading,
  decoding = "async",
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Determine loading strategy
  const loadingStrategy = priority ? "eager" : (loading || "lazy");
  const fetchPriority = priority ? "high" : undefined;

  // Build sources array for picture element
  const sources: ImageSource[] = [];
  
  // AVIF (best compression, limited iOS support - iOS 16+)
  if (avifSrc) {
    sources.push({ src: avifSrc, type: "image/avif" });
  }
  
  // WebP (good compression, wide support including iOS 14+)
  if (webpSrc) {
    sources.push({ src: webpSrc, type: "image/webp" });
  }

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error with fallback chain
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (fallbackSrc && !hasError) {
      setHasError(true);
      e.currentTarget.src = fallbackSrc;
    }
    onError?.(e);
  };

  // Intersection Observer fallback for older browsers
  useEffect(() => {
    if (loadingStrategy !== "lazy" || !imgRef.current) return;

    // Check if native lazy loading is supported
    if ("loading" in HTMLImageElement.prototype) return;

    // Fallback for older browsers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [loadingStrategy]);

  // Use picture element for format fallbacks
  if (sources.length > 0) {
    return (
      <picture>
        {sources.map((source, index) => (
          <source
            key={index}
            srcSet={source.src}
            type={source.type}
          />
        ))}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          loading={loadingStrategy}
          decoding={decoding}
          fetchPriority={fetchPriority}
          sizes={sizes}
          srcSet={srcSet}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    );
  }

  // Simple img element when no format alternatives
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      loading={loadingStrategy}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}

/**
 * Generate responsive srcSet string for different viewport sizes
 * @param basePath - Base image path without extension
 * @param extension - Image extension (webp, png, jpg)
 * @param widths - Array of widths to generate
 */
export function generateSrcSet(
  basePath: string,
  extension: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1920]
): string {
  return widths
    .map((w) => `${basePath}-${w}w.${extension} ${w}w`)
    .join(", ");
}

/**
 * Generate sizes attribute for responsive images
 * @param breakpoints - Object mapping breakpoint to size
 */
export function generateSizes(
  breakpoints: Record<string, string> = {
    "(max-width: 640px)": "100vw",
    "(max-width: 1024px)": "50vw",
    "default": "33vw",
  }
): string {
  return Object.entries(breakpoints)
    .map(([bp, size]) => (bp === "default" ? size : `${bp} ${size}`))
    .join(", ");
}
