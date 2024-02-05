import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/main';
import Production from '@pages/production';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
