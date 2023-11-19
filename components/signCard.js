import React from "react";
import styles from "./signCard.module.css";

export default function SignCard({ children, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
