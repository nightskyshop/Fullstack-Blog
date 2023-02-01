import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
