import React from "react";
import Button from "../../button/button";
import FileInputUpload from "../../file_input_upload/file_input_upload";
import styles from "./editorItem.module.css";

const EditorItem = ({ card }) => {
  const { name, company, title, email, message, fileName, fileURL, theme } =
    card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInputUpload />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default EditorItem;
