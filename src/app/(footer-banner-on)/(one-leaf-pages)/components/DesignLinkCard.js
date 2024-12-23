import styles from "./DesignLinkCard.module.css";

export default function DesignLinkCard({ imgName, title, children }) {
  return (
    <div className={styles.designLinkCardContainer}>
      {/* image */}
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
