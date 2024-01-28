import React from 'react';
import CustomList from '@pages/custom-list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/custom-list" element={<CustomList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
