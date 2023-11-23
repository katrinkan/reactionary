"use client";
import useMouse from "../../utils/useMouse";
import styles from "./eye.module.css";

export default function Eye({ individual }) {
  const [mouse, ref] = useMouse();

  const radian = Math.atan2(mouse.elementX, mouse.elementY);
  const rotate = radian * (180 / Math.PI) * -1;

  let eyePosition = {
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <div className={styles.stage}>
      <figure className={styles.ball} ref={ref}>
        <span className={styles.shadow}></span>
        <span
          className={`${styles.iris} ${styles[individual]}`}
          style={eyePosition}
        ></span>
      </figure>
    </div>
  );
}
