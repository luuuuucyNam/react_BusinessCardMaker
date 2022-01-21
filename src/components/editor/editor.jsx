import React from "react";
import styles from "./editor.module.css";
import EditorItem from "./editorItem/editorItem";
import EditorAdd from "./editor_add/editor_add";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.container}>
        {cards.map((card) => (
          <EditorItem key={card.id} card={card} />
        ))}
        <EditorAdd onSubmit={addCard} />
      </section>
    </section>
  );
};

export default Editor;
