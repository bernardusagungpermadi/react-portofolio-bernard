import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import HomePages from './pages/HomePages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
