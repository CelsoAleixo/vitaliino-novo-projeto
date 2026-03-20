import { useRef, useEffect, useState } from "react";

interface ResponsiveHeroVideoProps {
  mp4Src: string;
  webmSrc?: string;
  posterImage?: string;
  className?: string;
  overlayClassName?: string;
  playbackRate?: number;
  /** If true, loads video immediately without waiting for intersection */
  priority?: boolean;
}

/**
 * ResponsiveHeroVideo - Optimized video component for hero sections
 * - Prefers WebM for better compression (30-50% smaller than MP4)
 * - Falls back to MP4 for iOS Safari compatibility
 * - Poster image for instant visual feedback
 * - Reduced motion support for accessibility
 * - Priority loading for above-the-fold videos
 * - Connection-aware loading for slow networks
 * - Smooth skeleton → poster → video transition
 */
export function ResponsiveHeroVideo({
  mp4Src,
  webmSrc,
  posterImage,
  className = "",
  overlayClassName = "",
  playbackRate = 1.0,
  priority = false,
}: ResponsiveHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(priority);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Check connection speed
  useEffect(() => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const checkConnection = () => {
        // Consider slow if: slow-2g, 2g, 3g, or saveData enabled, or downlink < 1.5 Mbps
        const isSlow = 
          connection.saveData || 
          ['slow-2g', '2g', '3g'].includes(connection.effectiveType) ||
          (connection.downlink && connection.downlink < 1.5);
        setIsSlowConnection(isSlow);
      };
      
      checkConnection();
      connection.addEventListener?.('change', checkConnection);
      return () => connection.removeEventListener?.('change', checkConnection);
    }
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Preload poster image
  useEffect(() => {
    if (!posterImage) {
      setIsPosterLoaded(true);
      return;
    }

    const img = new Image();
    img.onload = () => setIsPosterLoaded(true);
    img.onerror = () => setIsPosterLoaded(true); // Continue even if poster fails
    img.src = posterImage;
  }, [posterImage]);

  // Lazy load video when in viewport (only if not priority)
  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Set playback rate and handle video ready state with progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isReady) return;

    video.playbackRate = playbackRate;

    // Track loading progress for slow connections
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          setLoadProgress(Math.min((bufferedEnd / duration) * 100, 100));
        }
      }
    };

    // Use canplay (readyState >= 3 not needed) for faster start
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      setLoadProgress(100);
      video.play().catch(() => {
        // Autoplay was prevented, user interaction needed
      });
    };

    video.addEventListener("progress", handleProgress);
    video.addEventListener("canplay", handleCanPlay);
    
    // If already ready (cached), trigger immediately
    if (video.readyState >= 2) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener("progress", handleProgress);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [isReady, playbackRate]);

  // Show static poster only for reduced motion (slow connections still try video)
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
        {/* Skeleton while poster loads */}
        {!isPosterLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted animate-pulse" />
        )}
        
        {posterImage && (
          <img
            src={posterImage}
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isPosterLoaded ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
          />
        )}
        
        {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
      {/* Skeleton background while nothing is loaded */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted transition-opacity duration-500 ${
          isPosterLoaded || isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Poster image - shows while video loads */}
      {posterImage && (
        <img
          src={posterImage}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isPosterLoaded && !isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
          loading="eager"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
      
      {/* Video element */}
      {isReady && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImage}
          className={`absolute inset-0 w-full h-full object-cover video-enhance transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          {/* WebM first for browsers that support it (Chrome, Firefox, Edge) */}
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {/* MP4 fallback for Safari/iOS */}
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}
      
      {/* Loading progress indicator for slow connections */}
      {!isVideoLoaded && isPosterLoaded && loadProgress > 0 && loadProgress < 100 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent rounded-full transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <span className="text-white/70 text-xs font-medium">
              {Math.round(loadProgress)}%
            </span>
          </div>
        </div>
      )}
      
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}