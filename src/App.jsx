import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import PostsPage from "./components/pages/PostsPage";
import CommentsPage from "./components/pages/CommentsPage";
import TodosPage from "./components/pages/TodosPage";
import UsersPage from "./components/pages/UsersPage";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 py-8 h-full">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
