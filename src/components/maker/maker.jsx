import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
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
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section>
        <h1>home</h1>
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
