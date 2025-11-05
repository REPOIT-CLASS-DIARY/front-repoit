// src/pages/teacher/TeacherInfo.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5"; // ← 아이콘 (npm install react-icons 필요)

const TeacherInfo: React.FC = () => {
  const navigate = useNavigate();
  const academyName = "ABC학원";

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
        }}
      >
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-1)} // 이전 페이지로 이동
          style={{
            position: "absolute",
            top: 24,
            left: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
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
            justifyContent: "center", // 세로 중앙 정렬
            alignItems: "center",
            textAlign: "left",
            padding: "0 24px",
            gap: 24,
          }}
        >
          {/* 학원 이름 */}
          <div
            style={{
              width: "100%",
              color: "#868686",
              fontSize: 16,
              fontFamily: "Pretendard",
              fontWeight: 300,
            }}
          >
            ABC 학원
          </div>

          {/* 타이틀 */}
          <div
            style={{
              width: "100%",
              fontSize: 24,
              fontWeight: 600,
              lineHeight: "33.6px",
            }}
          >
            <span style={{ color: "#0088FF" }}>선생님의 정보</span>를 입력해 주세요
          </div>

          {/* 입력 폼 */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginTop: 20,
            }}
          >
            {/* 성함 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  color: "#4A4A4A",
                }}
              >
                성함
              </label>
              <input
                type="text"
                placeholder="강사명을 입력해 주세요"
                style={{
                  height: 52,
                  borderRadius: 8,
                  border: "1px solid #D9D9D9",
                  padding: "12px 16px",
                  fontSize: 16,
                  color: "#4A4A4A",
                  outline: "none",
                }}
              />
            </div>

            {/* 담당 과목 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  color: "#4A4A4A",
                }}
              >
                담당 과목
              </label>
              <input
                type="text"
                placeholder="과목명을 입력해 주세요"
                style={{
                  height: 52,
                  borderRadius: 8,
                  border: "1px solid #D9D9D9",
                  padding: "12px 16px",
                  fontSize: 16,
                  color: "#4A4A4A",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div
          style={{
            width: "100%",
            padding: "0 24px 24px",
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={() => navigate("/lesson-list-start", {
              state: {academyName},
            })
            } // 시작하기 → 홈 이동
            style={{
              width: "100%",
              height: 52,
              borderRadius: 6,
              border: "none",
              fontSize: 16,
              fontWeight: 600,
              color: "white",
              backgroundColor: "#0088FF",
              cursor: "pointer",
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
