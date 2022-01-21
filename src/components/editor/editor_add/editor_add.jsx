import React, { useRef } from "react";
import Button from "../../button/button";
import FileInputUpload from "../../file_input_upload/file_input_upload";
import styles from "./editor_add.module.css";

const EditorAdd = ({ onSubmit }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmitCard = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
    };
    formRef.current.reset();
    onSubmit(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder={"name"}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder={"company"}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder={"theme"}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder={"title"}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder={"email"}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder={"message"}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInputUpload />
      </div>
      <Button name="Add" onClick={onSubmitCard} />
    </form>
  );
};

export default EditorAdd;
