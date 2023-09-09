import styles from "./page.module.css";
import ImagesCarrousel from "@/components/ImagesCarrousel/ImagesCarrousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.divContainer}>
        <h1 className={styles.title}>Welcome to Star Wars APP</h1>
        <h3 className={styles.title}>choose a category!</h3>
        <ImagesCarrousel />
      </div>
    </main>
  );
}
