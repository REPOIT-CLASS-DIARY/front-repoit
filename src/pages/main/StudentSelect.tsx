// src/pages/main/StudentSelectPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentSelectPage() {
  const navigate = useNavigate();
  const students = {
    "중등 1학년": ["김민준", "이서윤", "박도현", "최하은"],
    "중등 2학년": ["정예준", "강시우", "윤채원", "임준서"],
  };
  const [selected, setSelected] = useState<string[]>([]);

  const toggleStudent = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16,
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0",
        }}
      >
        <div style={{ fontWeight: 600 }}>수강생 선택</div>
        <button
          onClick={() => navigate("/lesson-list")}
          style={{
            background: "none",
            border: "none",
            color: "#3366FF",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          완료
        </button>
      </div>

      {/* 학생 목록 */}
      <div style={{ width: "100%", maxWidth: 400 }}>
        {Object.entries(students).map(([grade, names]) => (
          <div
            key={grade}
            style={{
              border: "1px solid #EEE",
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                background: "#F5F5F5",
                padding: 8,
                fontWeight: 500,
              }}
            >
              {grade}
            </div>
            {names.map((name) => (
              <div
                key={name}
                onClick={() => toggleStudent(name)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                <div>{name}</div>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: "2px solid #C7C7C7",
                    background: selected.includes(name) ? "#3366FF" : "white",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
