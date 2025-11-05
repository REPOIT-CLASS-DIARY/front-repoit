// src/pages/main/LessonAddPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LessonAddPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      {/* 모바일 카드 영역 */}
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          height: "100%",
          maxHeight: 932,
          background: "white",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          paddingBottom: 108,
          paddingLeft: 16,
          paddingRight: 16,
          position: "relative",
        }}
      >
        {/* 헤더 */}
        <div
          style={{
            width: "100%",
            height: 104,
            maxWidth: 600,
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: 375, height: 44 }} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 8px",
            }}
          >
            <div
              onClick={() => navigate(-1)}
              style={{
                width: 44,
                height: 44,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 13.5,
                  height: 12.75,
                  borderLeft: "2px solid #0088FF",
                  borderBottom: "2px solid #0088FF",
                  transform: "rotate(45deg)",
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#4A4A4A",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              수업 추가
            </div>

            <div
              style={{
                width: 44,
                height: 44,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/student-select")}
            >
              <div
                style={{
                  color: "#0088FF",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                다음
              </div>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 20,
          }}
        >
          {/* 지도 강사 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                color: "#4A4A4A",
                fontSize: 17,
                fontWeight: 500,
              }}
            >
              지도 강사
            </div>
            <div
              style={{
                height: 52,
                padding: "12px 16px",
                borderRadius: 8,
                border: "1px solid #D9D9D9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ color: "#9E9E9E", fontSize: 16 }}>강사 선택</div>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "6px solid #4A4A4A",
                }}
              />
            </div>
          </div>

          {/* 수업 이름 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                color: "#4A4A4A",
                fontSize: 17,
                fontWeight: 500,
              }}
            >
              수업 이름
            </div>
            <input
              placeholder="수업명을 입력해 주세요"
              style={{
                height: 52,
                padding: "12px 16px",
                borderRadius: 8,
                border: "1px solid #D9D9D9",
                fontSize: 16,
                color: "#333",
                outline: "none",
                width: "100%",
              }}
            />
          </div>

          {/* 수업 시간 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                color: "#4A4A4A",
                fontSize: 17,
                fontWeight: 500,
              }}
            >
              수업 시간
            </div>

            {/* 시간 선택 2세트 */}
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                {/* 요일 */}
                <div
                  style={{
                    width: 90,
                    height: 52,
                    border: "1px solid #D9D9D9",
                    borderRadius: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    color: "#9E9E9E",
                    fontSize: 16,
                  }}
                >
                  요일
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTop: "6px solid #4A4A4A",
                    }}
                  />
                </div>

                {/* 시간 */}
                <div
                  style={{
                    flex: 1,
                    height: 52,
                    border: "1px solid #D9D9D9",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    color: "#9E9E9E",
                    fontSize: 16,
                  }}
                >
                  <span>00:00</span>
                  <span style={{ color: "#4A4A4A", fontWeight: 500 }}>~</span>
                  <span>00:00</span>
                </div>
              </div>
            ))}

            {/* + 시간 추가 */}
            <div
              style={{
                textAlign: "right",
                width: "100%",
                color: "#33A0FF",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              + 시간 추가
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
