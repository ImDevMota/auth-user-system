import { useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import ListUsers from "./pages/ListUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-users" element={<ListUsers />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
