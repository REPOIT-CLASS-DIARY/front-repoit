// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/entry/Login";
import TermsPage from "./pages/entry/Terms";
import RoleSettingPage from "./pages/entry/RoleSetting";
import HomePage from "./pages/Home";
import RegisterAcademyPage from "./pages/teacher/RegisterAcademy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/role" element={<RoleSettingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-academy" element={<RegisterAcademyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;