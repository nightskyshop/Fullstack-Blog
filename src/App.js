import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import Category from './components/Category';
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Posts title="전체 글" apiUrl="http://127.0.0.1:8000/api/" />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
