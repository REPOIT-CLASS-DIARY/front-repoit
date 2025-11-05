import React from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

const lessons = [
  { title: "중등 1학년 수학 I반", time: "수요일 15:00~16:30" },
  { title: "중등 1학년 수학 II반", time: "수요일 15:00~16:30" },
  { title: "중등 1학년 수학 III반", time: "수요일 15:00~16:30" },
];

export default function LessonList() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#F2F2F2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 중앙 고정된 카드형 모바일 뷰 */}
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          height: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          boxShadow: "0 0 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* 상단 헤더 */}
        <div
          style={{
            width: "100%",
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #F3F3F3",
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#2E2E2E" }}>
              ABC학원
            </div>
            <div
              style={{
                width: 8,
                height: 5,
                background: "transparent",
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderTop: "6px solid #2E2E2E",
              }}
            />
          </div>
          <BsGrid3X3Gap size={22} color="#4A4A4A" />
        </div>

        {/* 수업 카드 리스트 */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 16px 100px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            background: "#FAFAFA",
          }}
        >
          {lessons.map((lesson, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 16,
                boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              {/* 제목 + 수정 아이콘 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#2E2E2E",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {lesson.title}
                  <FiEdit3 size={16} color="#4A4A4A" />
                </div>
              </div>

              {/* 수업 시간 */}
              <div
                style={{
                  color: "#9E9E9E",
                  fontSize: 15,
                  marginBottom: 12,
                }}
              >
                {lesson.time}
              </div>

              {/* 버튼 2개 */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                }}
              >
                <button
                  style={{
                    flex: 1,
                    background: "#E6F3FF",
                    color: "#0088FF",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 15,
                    height: 40,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/assignment")}
                >
                  수업 과제
                </button>

                <button
                  style={{
                    flex: 1,
                    background: "#0088FF",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 15,
                    height: 40,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/lesson-log")}
                >
                  학생 일지
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 탭 */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 430,
            background: "#fff",
            borderTop: "1px solid #EEE",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px 0",
            boxShadow: "0 -1px 6px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#0088FF",
              fontWeight: 500,
            }}
          >
            <AiOutlineHome size={24} style={{ marginBottom: 4 }} />
            <div style={{ fontSize: 13 }}>수업목록</div>
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#C7C7C7",
              fontWeight: 500,
            }}
          >
            <AiOutlineUser size={24} style={{ marginBottom: 4 }} />
            <div style={{ fontSize: 13 }}>학생목록</div>
          </div>
        </div>
      </div>
    </div>
  );
}
