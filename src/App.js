import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";
import AddNotice from "./Components/AddNotice";
import AdminLogin from "./Components/AdminLogin";
import AdminDash from "./Components/AdminDash";
import Login from "./Pages/Login";
import NoticeDetails from "./Pages/NoticeDetails";
import SideBar from "./Components/SideBar";

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
          <Route path="/notice-detail" element={<NoticeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
