// src/pages/academy/RegisterAcademy.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const RegisterAcademy: React.FC = () => {
  const navigate = useNavigate();
  const [academyName, setAcademyName] = useState("ABC학원");
  const [contacts, setContacts] = useState([
    { role: "학원", number: "" },
    { role: "원장님", number: "" },
  ]);

  const handleAddContact = () => {
    setContacts([...contacts, { role: "선택", number: "" }]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...contacts];
    updated[index][field as "role" | "number"] = value;
    setContacts(updated);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F9F9F9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 메인 카드 */}
      <div
        style={{
          width: "100%",
          maxWidth: 375,
          height: 812,
          backgroundColor: "white",
          borderRadius: 20,
          boxShadow: "0 0 20px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: 24,
            left: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <IoChevronBack size={26} color="#333" />
        </button>

        {/* 중앙 컨텐츠 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "80px 24px 0",
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box"
          }}
        >
          {/* 타이틀 */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
                lineHeight: "33.6px",
              }}
            >
              <span style={{ color: "#0088FF" }}>학원 정보</span>
              를 입력해 주세요
            </div>
          </div>

          {/* 이름 */}
          <div style={{ width: "100%",marginBottom: 20  }}>
            <label
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: "#4A4A4A",
                marginBottom: 8,
                display: "block",
              }}
            >
              이름
            </label>
            <div
              style={{
                display: "flex",
                width: "100%",
                boxSizing: "border-box", // ✅ 동일하게 처리
              }}
            >
            <input
              type="text"
              value={academyName}
              onChange={(e) => setAcademyName(e.target.value)}
              placeholder="학원명을 입력해 주세요"
              style={{
                flex:1,
                width: "100%",
                height: 52,
                border: "1px solid #D9D9D9",
                borderRadius: 8,
                padding: "12px 16px",
                fontSize: 16,
              }}
            />
          </div>
          </div>

          {/* 대표 번호 */}
          <div style={{ width: "100%" }}>
            <label
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: "#4A4A4A",
                marginBottom: 8,
                display: "block",
              }}
            >
              대표 번호
            </label>

            {contacts.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <select
                  value={c.role}
                  onChange={(e) =>
                    handleChange(i, "role", e.target.value)
                  }
                  style={{
                    width: 90,
                    height: 52,
                    border: "1px solid #D9D9D9",
                    borderRadius: 8,
                    paddingLeft: 12,
                    fontSize: 16,
                    color: "#4A4A4A",
                  }}
                >
                  <option>학원</option>
                  <option>원장님</option>
                  <option>선택</option>
                </select>

                <input
                  placeholder="번호를 입력해 주세요"
                  value={c.number}
                  onChange={(e) =>
                    handleChange(i, "number", e.target.value)
                  }
                  style={{
                    flex: 1,
                    height: 52,
                    border: "1px solid #D9D9D9",
                    borderRadius: 8,
                    padding: "12px 16px",
                    fontSize: 16,
                  }}
                />
              </div>
            ))}

            {/* 추가 버튼 */}
            <button
              onClick={handleAddContact}
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
              + 추가
            </button>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div
          style={{
            width: "100%",
            padding: "16px 24px 24px",
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={() => navigate("/register-student")}
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
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAcademy;
