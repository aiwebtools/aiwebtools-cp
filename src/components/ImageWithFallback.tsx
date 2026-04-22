import { useEffect, useState, ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fallbackSrc?: string;
}

const VALID_EXT = /\.(jpe?g|gif|png|svg|webp|avif)(\?.*)?$/i;

/**
 * ImageWithFallback
 * - Validates URL extension (allows imported module URLs which may contain hashes).
 * - Falls back to /placeholder.svg (or provided fallbackSrc) on error.
 * - Never blocks initial render.
 */
const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  onError,
  ...rest
}: Props) => {
  const [currentSrc, setCurrentSrc] = useState<string>(
    typeof src === "string" && src.length > 0 ? src : fallbackSrc
  );
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (!src || typeof src !== "string") {
      setCurrentSrc(fallbackSrc);
      setErrored(true);
      return;
    }
    // Allow data URIs and bundled assets (which may have hashes).
    const isData = src.startsWith("data:");
    const isBundled = src.startsWith("/assets/") || src.startsWith("blob:");
    if (isData || isBundled || VALID_EXT.test(src)) {
      setCurrentSrc(src);
      setErrored(false);
    } else {
      // Unknown / wrong extension — use fallback but don't crash.
      setCurrentSrc(fallbackSrc);
      setErrored(true);
    }
  }, [src, fallbackSrc]);

  return (
    <img
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={(e) => {
        if (!errored) {
          setErrored(true);
          setCurrentSrc(fallbackSrc);
        }
        onError?.(e);
      }}
    />
  );
};

export default ImageWithFallback;