import React from "react";
import styles from "./index.module.scss";

export const App: React.FC = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Okaaay Let's Go</h1>
      <section className={styles.articleSection}></section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
