import styles from "./HeroBanner.module.css";

export default function HeroBanner({ title, children, backgroundImgPosition }) {
  return (
    <section className={styles.heroBannerContainer}>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
