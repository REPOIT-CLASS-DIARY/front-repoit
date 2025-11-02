// src/pages/student/StudentDiary.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  IoArrowBack,
  IoChevronBack,
  IoChevronForward,
  IoPencil,
  IoCopyOutline,
} from "react-icons/io5";

interface DiaryEntry {
  date: string;
  time: string;
  className: string;
  title: string;
  content: string;
  rating: number;
  homework: string;
}

const StudentDiary: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();

  // 더미 데이터
  const studentName = {
    "1": "김민준",
    "2": "이서연",
    "3": "박지호",
    "4": "최은지",
    "5": "정하윤",
    "6": "한승민",
  }[studentId ?? ""] ?? "알 수 없음";

  // 탭 상태
  const [activeTab, setActiveTab] = useState<"daily" | "stats">("daily");

  // URL 기반 탭 초기화
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/student-diary/")) {
      setActiveTab("daily");
    } else if (path.includes("/student-stats/")) {
      setActiveTab("stats");
    }
  }, [studentId]);

  const [diary] = useState<DiaryEntry>({
    date: "2025년 09월 25일(수)",
    time: "15:00~16:30",
    className: "수학 I반",
    title: "프린트물 P.5~7",
    content: `<4-2> 2단원 삼각형

과제 성취도 : ★★★★★

학부모님 전달
서윤이는
수업 시간에 집중력이 높아 학습 내용을 잘 이해하고 있습니다.
이해력과 문제 해결 능력이 꾸준히 향상되고 있습니다.

작은 실수에서 배워 점점 나아지는 모습을 보여주고 있습니다.
꾸준한 학습 습관을 유지할 수 있도록 가정에서도 격려해 주세요.`,
    rating: 5,
    homework: "",
  });

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#F9F9F9",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 44,
      }}
    >
      <div
        style={{
          width: 375,
          backgroundColor: "white",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ===== 헤더 ===== */}
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 10,
            padding: "12px 20px",
            borderBottom: "1px solid #F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IoArrowBack
            size={24}
            color="#333"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>
            {studentName} 학생
          </div>
          <div
            style={{ fontSize: 14, color: "#0088FF", cursor: "pointer" }}
            onClick={() => navigate(`/student-info/${studentId}`)}
          >
            정보
          </div>
        </div>

        {/* ===== 탭 ===== */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #F0F0F0",
            backgroundColor: "white",
          }}
        >
          <button
            onClick={() => {
              setActiveTab("daily");
              navigate(`/student-diary/${studentId}`, { replace: true });
            }}
            style={{
              flex: 1,
              padding: "12px 0",
              fontSize: 14,
              fontWeight: activeTab === "daily" ? 600 : 400,
              color: activeTab === "daily" ? "#0088FF" : "#868686",
              background: "none",
              border: "none",
              borderBottom: activeTab === "daily" ? "2px solid #0088FF" : "none",
              cursor: "pointer",
            }}
          >
            당일 기록
          </button>
          <button
            onClick={() => {
              setActiveTab("stats");
              navigate(`/student-stats/${studentId}`, { replace: true });
            }}
            style={{
              flex: 1,
              padding: "12px 0",
              fontSize: 14,
              fontWeight: activeTab === "stats" ? 600 : 400,
              color: activeTab === "stats" ? "#0088FF" : "#868686",
              background: "none",
              border: "none",
              borderBottom: activeTab === "stats" ? "2px solid #0088FF" : "none",
              cursor: "pointer",
            }}
          >
            누적 통계
          </button>
        </div>

        {/* ===== 당일 기록 탭 내용 ===== */}
        {activeTab === "daily" && (
          <div style={{ padding: "20px" }}>
            {/* 날짜 + 화살표 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <IoChevronBack size={20} color="#868686" style={{ cursor: "pointer" }} />
              <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>
                {diary.date}
              </div>
              <IoChevronForward size={20} color="#868686" style={{ cursor: "pointer" }} />
            </div>

            {/* 수학 I반 */}
            <div style={{ fontSize: 14, color: "#0088FF", marginBottom: 8 }}>
              {diary.className}
            </div>

            {/* 수업 시간 */}
            <div style={{ fontSize: 18, fontWeight: 600, color: "#333", marginBottom: 24 }}>
              {diary.time}
            </div>

            {/* 오늘 과제 */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 14, color: "#333", marginBottom: 4 }}>
                오늘 과제
              </div>
              <div style={{ fontSize: 14, color: "#333", whiteSpace: "pre-wrap" }}>
                {diary.title}
              </div>
            </div>

            {/* 수업 내용 */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 14, color: "#333", marginBottom: 8 }}>
                수업 내용
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#333",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  backgroundColor: "#F8F8F8",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                {diary.content}
              </div>
            </div>
          </div>
        )}

        {/* ===== 누적 통계 탭 내용 ===== */}
        {activeTab === "stats" && (
          <div style={{ padding: "20px", textAlign: "center", color: "#868686" }}>
            누적 통계는 <strong>/student-stats/{studentId}</strong>에서 확인 가능합니다.
          </div>
        )}

        {/* ===== 하단 액션 바 ===== */}
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
            padding: "0 40px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => alert("수정 기능은 준비 중입니다.")}
          >
            <IoPencil size={20} color="#0088FF" />
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("링크가 복사되었습니다!");
            }}
          >
            <IoCopyOutline size={20} color="#0088FF" />
          </button>
        </div>

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
};

export default StudentDiary;