// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/entry/Login";
import TermsPage from "./pages/entry/Terms";
import RoleSettingPage from "./pages/entry/RoleSetting";
import HomePage from "./pages/Home";
import AcademyInfo from "./pages/teacher/AcademyInfo";
import TeacherInfo from "./pages/teacher/TeacherInfo";
import RegisterAcademyPage from "./pages/teacher/RegisterAcademy";
import RegisterStudentPage from "./pages/teacher/RegisterStudent";
import LessonListStart from "./pages/main/LessonListStart";
import LessonAdd from "./pages/main/LessonAdd";
import StudentSelect from "./pages/main/StudentSelect";
import LessonList from "./pages/main/LessonList";
import Assignment from "./pages/main/Assignment";
import LessonLog from "./pages/main/LessonLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/role" element={<RoleSettingPage />} />
        <Route path="/academy-info" element={<AcademyInfo />} />
        <Route path="/teacher-info" element={<TeacherInfo />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-academy" element={<RegisterAcademyPage />} />
        <Route path="/register-student" element={<RegisterStudentPage />} />
        <Route path="/lesson-list-start" element={<LessonListStart />} />
        <Route path="/lesson-add" element={<LessonAdd />} />
        <Route path="/student-select" element={<StudentSelect />} />
        <Route path="/lesson-list" element={<LessonList />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/lesson-log" element={<LessonLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
