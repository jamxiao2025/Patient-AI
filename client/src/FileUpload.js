import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './spinner';
import styles from './FileUpload.module.css'; // Import CSS module

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const submitFile = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.data);
      alert("File Upload success");
      setLoading(false);
      setOutput(response.data.data);
    } catch (error) {
      console.error(error);
      alert("File Upload Error");
    }
  };

  return (
  <div className={styles.container}>
    <form  className={styles.upload}onSubmit={submitFile}>
      <input
        type="file"
        className={styles.fileInput}
        onChange={event => setFile(event.target.files[0])}
      />
      <button type="submit" className={styles.uploadButton}>Upload</button>
    </form>
    <div className={styles.result}>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.outputContainer} dangerouslySetInnerHTML={{ __html: output }} />
      )}
    </div>
    </div>
  );
};

export default FileUpload;
