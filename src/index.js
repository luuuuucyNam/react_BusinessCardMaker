import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_service";
import CloudinaryService from "./service/cloudinary_service";
import FileInputUpload from "./components/file_input_upload/file_input_upload";

const authService = new AuthService();
const cloudinaryService = new CloudinaryService(
  process.env.REACT_APP_CLIOUDINARY_CLOUD_NAME
);
const FileInput = (props) => (
  <FileInputUpload {...props} cloudinaryService={cloudinaryService} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
