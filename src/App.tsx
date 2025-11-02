import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/entry/Login";
import TermsPage from "./pages/entry/Terms";
import RoleSettingPage from "./pages/entry/RoleSetting";
import HomePage from "./pages/Home";
import AcademyInfo from "./pages/teacher/AcademyInfo";
import TeacherInfo from "./pages/teacher/TeacherInfo";
import RegisterAcademyPage from "./pages/teacher/RegisterAcademy";
import RegisterStudentPage from "./pages/student/RegisterStudent";
import StudentList from "./pages/student/StudentList";
import StudentDiary from "./pages/student/StudentDiary";
import StudentInfo from "./pages/student/StudentInfo";
import StudentEdit from "./pages/student/StudentEdit";

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
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/student-diary/:studentId" element={<StudentDiary />} />
        <Route path="/student-info/:studentId" element={<StudentInfo />} />
        <Route path="/student-edit/:studentId" element={<StudentEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;