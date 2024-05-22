import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelDisplay from './components/ModelDisplay'
import UploadModel from './pages/UploadModel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelDisplay />} />
        <Route path="/upload" element={<UploadModel />} />
      </Routes>
    </Router>
  );
};

export default App;
