import { useEffect, useState } from "react";

export function useMediaQuery(maxWidth) {
  const [matches, setMatches] = useState(
    window.matchMedia(`(max-width: ${maxWidth})`).matches
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${maxWidth})`);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [maxWidth]);

  return matches;
}