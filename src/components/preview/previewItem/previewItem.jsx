import React from "react";
import styles from "./previewItem.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const PreviewItem = ({ card }) => {
  const { name, company, title, email, message, fileName, fileURL, theme } =
    card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.container} ${getStyles(theme)}`}>
      <img className={styles.imageBox} src={url} alt={fileName} />
      <div className={styles.labelBox}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "lgiht":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}
export default PreviewItem;
