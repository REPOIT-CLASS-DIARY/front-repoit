// src/pages/main/LessonListStart.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LessonListStart() {
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
      {/* 📱 모바일 화면 전체 (가운데 고정된 카드형) */}
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* 상단 헤더 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #F2F2F2",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 18 }}>ABC학원</div>
          <button
            onClick={() => navigate("/lesson-add")}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#3366FF",
              fontSize: 28,
              fontWeight: 500,
            }}
          >
            +
          </button>
        </div>

        {/* 가운데 내용 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#4A4A4A",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#E6F3FF",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
              color: "#3366FF",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            +
          </div>
          <div
            style={{
              fontSize: 16,
              lineHeight: "24px",
              color: "#666",
            }}
          >
            우측 상단 버튼을 눌러
            <br />
            수업을 추가해 보세요
          </div>
        </div>

        {/* 하단 탭 */}
        <div
          style={{
            borderTop: "1px solid #EEE",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "12px 0",
            background: "#fff",
          }}
        >
          <div
            style={{
              color: "#3366FF",
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                border: "2px solid #3366FF",
                marginBottom: 4,
              }}
            />
            수업목록
          </div>
          <div
            style={{
              color: "#C7C7C7",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "2px solid #C7C7C7",
                marginBottom: 4,
              }}
            />
            학생목록
          </div>
        </div>
      </div>
    </div>
  );
}
