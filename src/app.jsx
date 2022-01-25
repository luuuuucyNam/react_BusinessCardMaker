import logo from "./logo.svg";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Maker from "./components/maker/maker";

function App({ authService, FileInput, cardRepository }) {
  // const [auth, setAuth] = useState(null); // ME

  return (
    <div className={styles.app}>
      <BrowserRouter>
        {/* ME */}
        {/* {auth ? (
          <Routes>
            <Route
              path="/"
              element={<Maker authService={authService} setAuth={setAuth} />}
            />
          </Routes>
        ) : (
          <Login authService={authService} setAuth={setAuth} />
        )} */}

        {/* Dream Coading */}
        <Routes>
          <Route
            path="/maker"
            element={
              <Maker
                authService={authService}
                FileInput={FileInput}
                cardRepository={cardRepository}
              />
            }
          />
          <Route path="/" element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
