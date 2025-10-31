// src/pages/student/RegisterStudent.tsx
import React, { useState } from "react";
import { IoChevronBack, IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RegisterStudent: React.FC = () => {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [selectedClass, setSelectedClass] = useState("중등 1학년 수학 I반");
  const [phoneNumbers, setPhoneNumbers] = useState([
    { type: "어머님", number: "" }, // 첫 번째는 어머님으로 시작
  ]);
  const [notes, setNotes] = useState("");

  const classes = [
    "중등 1학년 수학 I반",
    "중등 2학년 수학 I반",
    "고등 1학년 수학 I반",
  ];

  // 번호 추가: 순서대로 어머님 → 학생 → 선택
  const addPhone = () => {
    let newType = "선택";
    if (phoneNumbers.length === 0) newType = "어머님";
    else if (phoneNumbers.length === 1) newType = "학생";

    setPhoneNumbers([...phoneNumbers, { type: newType, number: "" }]);
  };

  const updatePhone = (index: number, value: string) => {
    const updated = [...phoneNumbers];
    updated[index].number = value;
    setPhoneNumbers(updated);
  };

  const updatePhoneType = (index: number, type: string) => {
    const updated = [...phoneNumbers];
    updated[index].type = type;
    setPhoneNumbers(updated);
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
        {/* 상단 헤더 */}
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 10,
            padding: "16px 20px",
            borderBottom: "1px solid #F0F0F0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <IoChevronBack size={24} color="#333" />
          </button>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#333" }}>
            학생 추가
          </div>
          <button
            onClick={() => alert("학생 등록 완료!")}
            style={{
              background: "none",
              border: "none",
              color: "#0088FF",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            완료
          </button>
        </div>

        {/* 폼 영역 */}
        <div style={{ padding: "20px" }}>
          {/* 학생 이름 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 14, color: "#333", marginBottom: 6, display: "block" }}>
              학생 이름 <span style={{ color: "#FF3B30" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="학생 이름을 입력해 주세요"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={{
                width: "100%",
                height: 48,
                borderRadius: 8,
                border: "1px solid #D9D9D9",
                padding: "0 16px",
                fontSize: 16,
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* 나이 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 14, color: "#333", marginBottom: 6, display: "block" }}>
              나이
            </label>
            <input
              type="text"
              placeholder="생년월일 8자리를 입력해 주세요"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{
                width: "100%",
                height: 48,
                borderRadius: 8,
                border: "1px solid #D9D9D9",
                padding: "0 16px",
                fontSize: 16,
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* 참여 수업 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 14, color: "#333", marginBottom: 6, display: "block" }}>
              참여 수업 <span style={{ color: "#FF3B30" }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                style={{
                  width: "100%",
                  height: 48,
                  borderRadius: 8,
                  border: "1px solid #D9D9D9",
                  padding: "0 40px 0 16px",
                  fontSize: 16,
                  appearance: "none",
                  backgroundColor: "white",
                }}
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <IoChevronDown
                size={20}
                color="#999"
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            </div>
            <button
              style={{
                marginTop: 8,
                width: "100%",
                height: 36,
                borderRadius: 8,
                backgroundColor: "#E6F3FF",
                border: "none",
                color: "#0088FF",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              + 수업 추가
            </button>
          </div>

          {/* 전화 번호 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 14, color: "#333", marginBottom: 6, display: "block" }}>
              전화 번호
            </label>
            {phoneNumbers.map((phone, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <select
                  value={phone.type}
                  onChange={(e) => updatePhoneType(i, e.target.value)}
                  style={{
                    width: 90,
                    height: 48,
                    borderRadius: 8,
                    border: "1px solid #D9D9D9",
                    padding: "0 8px",
                    fontSize: 16,
                    backgroundColor: "white",
                  }}
                >
                  <option>어머님</option>
                  <option>아버님</option>
                  <option>학생</option>
                  <option>선택</option>
                </select>
                <input
                  type="tel"
                  placeholder="번호를 입력해 주세요"
                  value={phone.number}
                  onChange={(e) => updatePhone(i, e.target.value)}
                  style={{
                    flex: 1,
                    height: 48,
                    borderRadius: 8,
                    border: "1px solid #D9D9D9",
                    padding: "0 16px",
                    fontSize: 16,
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
            <button
              onClick={addPhone}
              style={{
                marginTop: 8,
                width: "100%",
                height: 36,
                borderRadius: 8,
                backgroundColor: "#E6F3FF",
                border: "none",
                color: "#0088FF",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              + 번호 추가
            </button>
          </div>

          {/* 기타 정보 */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 14, color: "#333", marginBottom: 6, display: "block" }}>
              기타 정보
            </label>
            <textarea
              placeholder="선택 사항입니다"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: "100%",
                minHeight: 100,
                borderRadius: 8,
                border: "1px solid #D9D9D9",
                padding: "12px 16px",
                fontSize: 16,
                resize: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* 하단 완료 버튼 */}
          <button
            onClick={() => {
              alert("학생 등록 완료!");
              navigate(-1);
            }}
            style={{
              width: "100%",
              height: 52,
              borderRadius: 12,
              backgroundColor: "#0088FF",
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

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
};

export default RegisterStudent;