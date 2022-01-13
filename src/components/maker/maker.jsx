import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const naviagate = useNavigate();
  const onLogout = () => {
    authService.logout();
    // setAuth(null);
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        naviagate("/");
      }
    });
  });
  return (
    <section className={styles.makerLayout}>
      <Header onLogout={onLogout} />
      <div className={styles.makerItem}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
