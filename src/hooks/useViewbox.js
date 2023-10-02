import { useState, useEffect } from "react";

export function useViewbox() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewBox, setViewBox] = useState(getViewBox(windowWidth));

  function getViewBox(width) {
    const breakpoints = [
      { size: 450, viewBox: "800, 0, 1000, 800" },
      { size: 600, viewBox: "600, 0, 1200, 800" },
      { size: 960, viewBox: "600, 0, 1800, 800" },
      { size: 1800, viewBox: "600, 0, 2440, 800" },
      { size: 2200, viewBox: "0, 0, 5000, 800" },
    ];
    console.log(`viewbox width: ${width}`);
    for (const breakpoint of breakpoints) {
      if (width <= breakpoint.size) {
        console.log(`returned: ${width}`);
        return breakpoint.viewBox;
      }
    }
    return breakpoints[breakpoints.length - 1].viewBox;
  }
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setViewBox(getViewBox(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return viewBox;
}
