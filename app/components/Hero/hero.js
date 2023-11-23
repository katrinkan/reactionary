import Eye from "../Eye/eye";
import styles from "./hero.module.css";

export default function Hero({ title, iris }) {
  return (
    <section className={styles.hero}>
      <div>
        <h2>{title}</h2>
        <h3>view = function(state)</h3>
      </div>
      <Eye individual={iris} />
    </section>
  );
}
