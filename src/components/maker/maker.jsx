import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Test1",
      company: "Company1",
      title: "Developer1",
      email: "test@test.com",
      message: "test is a test",
      theme: "dark",
      fileName: "test",
      fileURL: null,
    },
  ]);
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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
