import { useEffect, useState } from "react";

type ScrollStateOptions = {
  /** Also re-read the value when the window is resized. */
  trackResize?: boolean;
};

/**
 * Returns `read()`, re-evaluated at most once per animation frame while the
 * window scrolls (and resizes, when `trackResize` is set).
 *
 * `read` must keep the same identity across renders, so define it at module scope.
 */
export function useScrollState<T>(
  read: () => T,
  initialValue: T,
  { trackResize = false }: ScrollStateOptions = {},
): T {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      setValue(read());
    };

    const schedule = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    if (trackResize) window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      if (trackResize) window.removeEventListener("resize", schedule);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, [read, trackResize]);

  return value;
}
