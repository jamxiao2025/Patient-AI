import React from 'react';
import FileUpload from './FileUpload';
import Home from './home'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/upload" element = {<FileUpload />} />

    </Routes>
  </Router>
  );
}

export default App;