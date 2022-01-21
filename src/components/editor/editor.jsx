import React from "react";
import styles from "./editor.module.css";
import EditorItem from "./editorItem/editorItem";
import EditorAdd from "./editor_add/editor_add";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.container}>
        {Object.keys(cards).map((key) => (
          <EditorItem
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <EditorAdd onSubmit={addCard} />
      </section>
    </section>
  );
};

export default Editor;
