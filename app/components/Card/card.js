import styles from "./card.module.css";

export default function Card({ item }) {
  return (
    <div className={styles.gridItem}>
      <h4>{item.title}</h4>
      {item.src ? (
        <div>
          <iframe
            title={item.title}
            src={item.src}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            className={styles.codeframe}
          />
        </div>
      ) : (
        <p>{item.content}</p>
      )}
    </div>
  );
}
