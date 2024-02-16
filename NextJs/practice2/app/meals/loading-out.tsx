import styles from "@/app/meals/loading.module.css";

export default function Loading() {
  return <p className={styles.loading}>Fetching meals...</p>;
}
