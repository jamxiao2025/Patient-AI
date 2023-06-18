// client/src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [output, setOutput] = useState('')

  const submitFile = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    await axios.post('http://localhost:8000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data.data);
      alert("File Upload success");
      setOutput(response.data.data)
    }).catch(error => {
      console.error(error);
      alert("File Upload Error");
    });
  };

  return (
    <form onSubmit={submitFile}>
      <input 
        type="file" 
        onChange={event => setFile(event.target.files[0])}
      />
      <button type="submit">Upload</button>
      <pre>{output}</pre>
    </form>
  );
};

export default FileUpload;