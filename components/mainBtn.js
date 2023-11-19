import React from "react";
import styles from "./mainBtn.module.css";

export default function MainBtn({ type, text }) {
  return (
    <>
      <button className={styles.mbtn} type={type}>
        {text}
      </button>
    </>
  );
}
