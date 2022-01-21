import React from "react";
import styles from "./preview.module.css";
import PreviewItem from "./previewItem/previewItem";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {cards.map((card) => (
        <PreviewItem card={card} />
      ))}
    </ul>
  </section>
);

export default Preview;
