import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
