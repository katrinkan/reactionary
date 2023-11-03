"use client";
import useMouse from "../utils/useMouse";

export default function Eye({ individual }) {
  const [mouse, ref] = useMouse();

  const radian = Math.atan2(mouse.elementX, mouse.elementY);
  const rotate = radian * (180 / Math.PI) * -1;

  let eyePosition = {
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <div className="stage">
      <figure className="ball" ref={ref}>
        <span className="shadow"></span>
        <span className={`iris ${individual}`} style={eyePosition}></span>
      </figure>
    </div>
  );
}
