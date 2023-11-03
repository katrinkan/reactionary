"use client";
import { useLayoutEffect, useRef, useState } from "react";

export default function useMouse() {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPosistionX: 0,
    elementPosistionY: 0,
  });

  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      let newState = {
        x: e.pageX,
        y: e.pageY,
      };

      if (ref.current && ref.current.nodeType === Node.ELEMENT_NODE) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPosistionX = left + ref.current.clientWidth / 2;
        const elementPosistionY = top + ref.current.clientWidth / 2;
        const elementX = e.pageX - elementPosistionX;
        const elementY = e.pageY - elementPosistionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPosistionX = elementPosistionX;
        newState.elementPosistionY = elementPosistionY;
      }
      setState((s) => {
        return {
          ...s,
          ...newState,
        };
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return [state, ref];
}
