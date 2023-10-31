/* "use client";
import { useEffect, useRef } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

export default function useClickAway(cb) {
  const ref = useRef(null);
  const onClick = useEffectEvent((e) => {
    const element = ref.current;
    if (element && !element.contains(e.target)) {
      cb(e);
    }
  });

  useEffect(() => {
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
    };
  }, []);

  return ref;
}
*/
