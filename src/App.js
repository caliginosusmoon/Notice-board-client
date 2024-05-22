import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";
import AddNotice from "./Components/AddNotice";
import AdminLogin from "./Components/AdminLogin";
import AdminDash from "./Components/AdminDash";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/admin/add" element={<AddNotice />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
