import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && <button className={styles.logout}>Logout</button>}
      <img src="/images/logo.png" alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Business Card Header</h1>
    </header>
  );
};

export default Header;