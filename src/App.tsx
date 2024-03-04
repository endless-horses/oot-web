import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/main';
import Production from '@pages/production';
import Result from '@pages/result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/production" element={<Production />} />
          <Route path="/results/*" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
