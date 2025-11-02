// src/pages/student/StudentList.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoChevronDown,
  IoChevronUp,
  IoBookOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";

interface Student {
  id: number;
  name: string;
}

const StudentList: React.FC = () => {
  const navigate = useNavigate();

  // 더미 데이터
  const grade1Students: Student[] = [
    { id: 1, name: "김민준" },
    { id: 2, name: "이서연" },
  ];

  const grade2Students: Student[] = [
    { id: 3, name: "박지호" },
    { id: 4, name: "최은지" },
    { id: 5, name: "정하윤" },
    { id: 6, name: "한승민" },
  ];

  // 전체 학생 수
  const totalCount = grade1Students.length + grade2Students.length;

  // 펼침 상태
  const [expandedGrade, setExpandedGrade] = useState<"grade1" | "grade2" | null>(null);

  const toggleGrade = (grade: "grade1" | "grade2") => {
    setExpandedGrade(expandedGrade === grade ? null : grade);
  };

  // 학생 추가 페이지로 이동
  const handleAddStudent = () => {
    navigate("/register-student");
  };

  // 학생 클릭 → 일지 작성 페이지로 이동
  const handleStudentClick = (studentId: number) => {
    navigate(`/student-diary/${studentId}`);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F9F9F9",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 44,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: 375,
          minHeight: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* 상단 고정 헤더 */}
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 10,
            padding: "16px 20px 12px",
            borderBottom: "1px solid #F0F0F0",
          }}
        >
          {/* 학원명 + 사람 아이콘 + 총 학생수 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, color: "#333" }}>
              ABC 학원
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 14,
                color: "#0088FF",
                cursor: "pointer", // 클릭 가능하게
              }}
              onClick={handleAddStudent}
            >
              <IoPersonOutline size={16} />
            </div>
          </div>

          <div
            style={{
              fontSize: 12,
              color: "#868686",
              textAlign: "left",
              marginBottom: 8,
            }}
          >
            총 {totalCount}명
          </div>
        </div>

        <div style={{ padding: "0 20px" }}>
          <div>
            <button
              onClick={() => toggleGrade("grade1")}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                background: "none",
                border: "none",
                borderBottom: "1px solid #F0F0F0",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>
                중등 1학년
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ fontSize: 14, color: "#868686" }}>
                  {grade1Students.length}명
                </div>
                {expandedGrade === "grade1" ? (
                  <IoChevronUp size={20} color="#333" />
                ) : (
                  <IoChevronDown size={20} color="#333" />
                )}
              </div>
            </button>

            {/* 펼쳐진 학생 목록 */}
            {expandedGrade === "grade1" && (
              <div style={{ padding: "0 0 16px" }}>
                {grade1Students.map((student) => (
                  <div
                    key={student.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid #F0F0F0",
                      cursor: "pointer", // 클릭 가능함을 시각적으로 표시
                    }}
                    onClick={() => handleStudentClick(student.id)} // 클릭 이벤트 추가
                  >
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 500, color: "#333" }}>
                        {student.name}
                      </div>
                      <div style={{ fontSize: 13, color: "#868686", marginTop: 2 }}>
                        수학 I반
                      </div>
                    </div>
                    <div style={{ fontSize: 18, color: "#0088FF" }}>→</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 중등 2학년 */}
          <div>
            <button
              onClick={() => toggleGrade("grade2")}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                background: "none",
                border: "none",
                borderBottom: "1px solid #F0F0F0",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>
                중등 2학년
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ fontSize: 14, color: "#868686" }}>
                  {grade2Students.length}명
                </div>
                {expandedGrade === "grade2" ? (
                  <IoChevronUp size={20} color="#333" />
                ) : (
                  <IoChevronDown size={20} color="#333" />
                )}
              </div>
            </button>

            {/* 펼쳐진 학생 목록 */}
            {expandedGrade === "grade2" && (
              <div style={{ padding: "0 0 16px" }}>
                {grade2Students.map((student) => (
                  <div
                    key={student.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid #F0F0F0",
                      cursor: "pointer", // 클릭 가능함을 시각적으로 표시
                    }}
                    onClick={() => handleStudentClick(student.id)} // 클릭 이벤트 추가
                  >
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 500, color: "#333" }}>
                        {student.name}
                      </div>
                      <div style={{ fontSize: 13, color: "#868686", marginTop: 2 }}>
                        수학 I반
                      </div>
                    </div>
                    <div style={{ fontSize: 18, color: "#0088FF" }}>→</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 375,
            backgroundColor: "white",
            borderTop: "1px solid #F0F0F0",
            display: "flex",
            height: 70,
            zIndex: 20,
          }}
        >
          <button
            onClick={() => navigate("/class-list")}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IoBookOutline size={24} color="#868686" />
            <div style={{ fontSize: 12, color: "#868686" }}>수업목록</div>
          </button>

          <button
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "default",
            }}
          >
            <IoPeopleOutline size={24} color="#0088FF" />
            <div style={{ fontSize: 12, color: "#0088FF", fontWeight: 600 }}>
              학생목록
            </div>
          </button>
        </div>

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
};

export default StudentList;