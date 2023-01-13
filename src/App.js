import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
