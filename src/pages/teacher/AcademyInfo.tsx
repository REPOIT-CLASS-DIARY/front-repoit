// src/pages/teacher/AcademyInfo.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5"; // 뒤로가기 아이콘 (react-icons 설치 필요)

const AcademyInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F9F9F9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 375,
          height: 812,
          backgroundColor: "white",
          borderRadius: 20,
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          padding: "0 24px 24px",
          boxSizing: "border-box",
        }}
      >
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-2)}
          style={{
            position: "absolute",
            top: 24,
            left: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <IoChevronBack size={28} color="#333" />
        </button>

        {/* 중앙 컨텐츠 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // 가운데 정렬
            textAlign: "center",
            gap: 24,
          }}
        >
          {/* 학원 로고 */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "#D9D9D9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 600,
              color: "#000",
            }}
          >
            학원 로고
          </div>

          {/* 등록 완료 문구 */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              lineHeight: "1.5",
              color: "#333",
            }}
          >
            <span style={{ color: "#2979FF" }}>ABC 학원</span>이
            <br />
            등록되었습니다
          </div>
        </div>

        {/* 하단 다음 버튼 */}
        <button
          onClick={() => navigate("/teacher-info")}
          style={{
            width: "100%",
            height: 52,
            backgroundColor: "#2979FF",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AcademyInfo;
