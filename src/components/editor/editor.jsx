import React from "react";
import styles from "./editor.module.css";
import EditorItem from "./editorItem/editorItem";

const Editor = ({ cards }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.container}>
        {cards.map((card) => (
          <EditorItem card={card} />
        ))}
      </section>
    </section>
  );
};

export default Editor;
