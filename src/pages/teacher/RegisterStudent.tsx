import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RegisterStudent: React.FC = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    { name: "", birth: "", guardianType: "어머님", guardianPhone: "" },
  ]);

  const handleAddStudent = () => {
    setStudents([
      ...students,
      { name: "", birth: "", guardianType: "어머님", guardianPhone: "" },
    ]);
  };

  const handleChange = (
    index: number,
    field: keyof (typeof students)[0],
    value: string
  ) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#F9F9F9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* 카드 */}
      <div
        style={{
          width: "100%",
          maxWidth: 375,
          minHeight: 812,
          backgroundColor: "white",
          borderRadius: 20,
          boxShadow: "0 0 20px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* 뒤로가기 */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: 24,
            left: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <IoChevronBack size={26} color="#333" />
        </button>

        {/* 상단 제목 */}
        <div
          style={{
            padding: "80px 24px 0",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: 14, color: "#7A7A7A", marginBottom: 4 }}>
            ABC 학원
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, lineHeight: "33.6px" }}>
            <span style={{ color: "#0088FF" }}>학생 정보</span>를 입력해 주세요
          </div>
        </div>

        {/* 폼 영역 */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "24px 24px 0",
            boxSizing: "border-box",
          }}
        >
          {students.map((student, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                marginBottom: 20,
                borderBottom: "1px solid #F0F0F0",
                paddingBottom: 16,
              }}
            >
              {/* 학생 이름 */}
              <input
                placeholder="학생 이름을 입력해 주세요"
                value={student.name}
                onChange={(e) => handleChange(i, "name", e.target.value)}
                style={{
                  width: "100%",
                  height: 52,
                  borderRadius: 8,
                  border: "1px solid #D9D9D9",
                  padding: "12px 16px",
                  fontSize: 16,
                  marginBottom: 8,
                  boxSizing: "border-box",
                }}
              />

              {/* 생년월일 */}
              <input
                placeholder="생년월일 8자리를 입력해 주세요"
                value={student.birth}
                onChange={(e) => handleChange(i, "birth", e.target.value)}
                style={{
                  width: "100%",
                  height: 52,
                  borderRadius: 8,
                  border: "1px solid #D9D9D9",
                  padding: "12px 16px",
                  fontSize: 16,
                  marginBottom: 8,
                  boxSizing: "border-box",
                }}
              />

              {/* 보호자 */}
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  value={student.guardianType}
                  onChange={(e) =>
                    handleChange(i, "guardianType", e.target.value)
                  }
                  style={{
                    width: 90,
                    height: 52,
                    borderRadius: 8,
                    border: "1px solid #D9D9D9",
                    paddingLeft: 10,
                    fontSize: 16,
                    color: "#4A4A4A",
                    boxSizing: "border-box",
                  }}
                >
                  <option>어머님</option>
                  <option>아버님</option>
                  <option>기타</option>
                </select>

                <input
                  placeholder="보호자 번호를 입력해 주세요"
                  value={student.guardianPhone}
                  onChange={(e) =>
                    handleChange(i, "guardianPhone", e.target.value)
                  }
                  style={{
                    flex: 1,
                    height: 52,
                    borderRadius: 8,
                    border: "1px solid #D9D9D9",
                    padding: "12px 16px",
                    fontSize: 16,
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          ))}

          {/* 추가 버튼 */}
          <button
            onClick={handleAddStudent}
            style={{
              width: "100%",
              height: 44,
              borderRadius: 8,
              background: "#E6F3FF",
              border: "none",
              color: "#0088FF",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              marginTop: 4,
            }}
          >
            + 학생 추가
          </button>
        </div>

        {/* 하단 완료 버튼 */}
        <div
          style={{
            width: "100%",
            padding: "16px 24px 24px",
            boxSizing: "border-box",
            backgroundColor: "white",
          }}
        >
          <button
            onClick={() => alert("등록 완료")}
            style={{
              width: "100%",
              height: 52,
              borderRadius: 8,
              background: "#0088FF",
              border: "none",
              color: "white",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterStudent;
