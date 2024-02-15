import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GridView from './GridView';
import ImageDetail from './ImageDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridView />} />
        <Route path="/image/:imageName" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;