import React, { useRef } from "react";
import styles from "./file_input_upload.module.css";

const FileInputUpload = ({ cloudinaryService, onFileChange, name }) => {
  const fileRef = useRef();
  const handleProcessFile = async (e) => {
    e.preventDefault();
    const uploaded = await cloudinaryService.processFile(e.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  const handleFileClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  return (
    // <label for="file">파일찾기</label>
    // <input type="file" onChange={processFile} />
    // </div >
    <div className={styles.form}>
      <input
        ref={fileRef}
        onChange={handleProcessFile}
        type="file"
        style={{ display: "none" }}
        multiple={false}
        accept="image/*"
      />
      <button className={styles.button} onClick={handleFileClick}>
        {name || "No file"}
      </button>
    </div>
  );
};
export default FileInputUpload;
