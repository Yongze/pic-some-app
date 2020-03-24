import { useState, useEffect, useRef } from "react";

const useHover = props => {
  const [hoverd, setHoverd] = useState(false);
  const ref = useRef(null);

  const updateHoverd = state => {
    setHoverd(state);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", () => updateHoverd(true));
    ref.current.addEventListener("mouseleave", () => updateHoverd(false));

    return () => {
      ref.current.removeEventListener("mouseenter", () => updateHoverd(true));
      ref.current.removeEventListener("mouseleave", () => updateHoverd(false));
    };
  }, []);

  return [hoverd, ref];
};

export default useHover;
