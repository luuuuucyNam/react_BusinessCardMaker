import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Test1",
      company: "Company1",
      title: "Developer1",
      email: "test@test.com",
      message: "test is a test",
      theme: "colorful",
      fileName: "test",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Test2",
      company: "Company2",
      title: "Developer2",
      email: "test@test.com",
      message: "test is a test",
      theme: "dark",
      fileName: "test",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Test3",
      company: "Company3",
      title: "Developer3",
      email: "test@test.com",
      message: "test is a test",
      theme: "dark",
      fileName: "test",
      fileURL: null,
    },
  });
  const naviagate = useNavigate();
  const onLogout = () => {
    authService.logout();
    // setAuth(null);s
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        naviagate("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.makerLayout}>
      <Header onLogout={onLogout} />
      <div className={styles.makerItem}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
