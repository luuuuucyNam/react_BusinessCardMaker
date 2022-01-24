import React, { useRef, useState } from "react";
import styles from "./file_input_upload.module.css";

const FileInputUpload = ({ cloudinaryService, onFileChange, name }) => {
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();
  const handleProcessFile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploaded = await cloudinaryService.processFile(e.target.files[0]);
    setLoading(false);
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
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={handleFileClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading} />}
    </div>
  );
};
export default FileInputUpload;
