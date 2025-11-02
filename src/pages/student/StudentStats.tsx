// src/pages/student/StudentStats.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack} from "react-icons/io5";

const StudentStats: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();

  const studentName = {
    "1": "김민준", "2": "이서연", "3": "박지호",
    "4": "최은지", "5": "정하윤", "6": "한승민",
  }[studentId ?? ""] ?? "알 수 없음";

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
          <div style={{ fontSize: 14, color: "#0088FF", cursor: "pointer" }}>정보</div>
        </div>

        {/* ===== 탭 ===== */}
        <div
            style={{
                display: "flex",
                backgroundColor: "#F5F5F5",
                margin: "0 20px",
                borderRadius: 8,
                overflow: "hidden",
            }}
            >
            <button
                onClick={() => navigate(`/student-diary/${studentId}`)}  // 이동 추가!
                style={{
                flex: 1,
                padding: "10px 0",
                backgroundColor: "#E0E0E0",
                color: "#868686",
                fontSize: 14,
                border: "none",
                cursor: "pointer",
                }}
            >
                당일 기록
            </button>
            <button
                style={{
                flex: 1,
                padding: "10px 0",
                backgroundColor: "white",
                color: "#0088FF",
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
            >
                누적 통계
            </button>
        </div>

        <div style={{ padding: "20px" }}>
          {/* ===== 요약 박스 ===== */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "#F0F8FF",
                padding: "12px",
                borderRadius: 12,
                textAlign: "center",
                marginRight: 8,
              }}
            >
              <div style={{ fontSize: 12, color: "#868686" }}>총 일지 수</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: "#333" }}>24</div>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: "#F0F8FF",
                padding: "12px",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 12, color: "#868686" }}>과제 성취도</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: "#333" }}>60%</div>
            </div>
          </div>

          {/* ===== 5월 2주차 과제 ===== */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 12 }}>
              5월 2주차 과제
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
              {[3, 4, 5, 6].map((day) => (
                <div
                  key={day}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#0088FF",
                    color: "white",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {day}일
                </div>
              ))}
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FFEBEE",
                  color: "#FF5252",
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                7일
              </div>
              {[8, 9].map((day) => (
                <div
                  key={day}
                  style={{
                    width: 40,
                    height: 40,
                    border: "2px dashed #E0E0E0",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: "#E0E0E0",
                  }}
                >
                  {day}일
                </div>
              ))}
            </div>
          </div>

          {/* ===== 연간 평가 ===== */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 12 }}>
              2025 월간 평가
            </div>
            <div style={{ position: "relative", height: 120, marginBottom: 8 }}>
              <svg width="100%" height="120" style={{ overflow: "visible" }}>
                {/* Y축 라인 */}
                {[0, 20, 40, 60, 80, 100].map((y) => (
                  <line
                    key={y}
                    x1="10%" x2="90%" y1={120 - y} y2={120 - y}
                    stroke="#E0E0E0" strokeWidth="1"
                  />
                ))}
                {/* 점들 */}
                {[1, 2, 3, 4, 5].map((m, i) => {
                  const y = [60, 70, 80, 90, 100][i];
                  return (
                    <circle
                      key={m}
                      cx={`${15 + i * 18}%`}
                      cy={120 - y}
                      r="6"
                      fill={i === 4 ? "#0088FF" : "#BBDEFB"}
                      stroke={i === 4 ? "#0088FF" : "none"}
                      strokeWidth="2"
                    />
                  );
                })}
                {/* 선 */}
                <polyline
                  points="15%,60 33%,50 51%,40 69%,30 87%,20"
                  fill="none"
                  stroke="#0088FF"
                  strokeWidth="2"
                />
                {/* 툴팁 */}
                <g transform="translate(78%, 20)">
                  <rect x="-20" y="-30" width="40" height="24" fill="#333" rx="4" />
                  <text x="-2" y="-12" fill="white" fontSize="12" textAnchor="middle">100</text>
                </g>
              </svg>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10%" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                <div
                  key={m}
                  style={{
                    fontSize: 12,
                    color: m === 5 ? "#0088FF" : "#868686",
                    fontWeight: m === 5 ? 600 : 400,
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* ===== 주간 평가 ===== */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 12 }}>
              5월 주간 평가
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: 100 }}>
              {[40, 50, 70, 100, 90].map((h, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: 20,
                      height: h,
                      backgroundColor: "#0088FF",
                      borderRadius: 4,
                      marginBottom: 8,
                    }}
                  />
                  <div style={{ fontSize: 12, color: "#868686" }}>
                    {i + 1}주차
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              {[40, 50, 70, 100, 90].map((v, i) => (
                <div key={i} style={{ fontSize: 12, color: "#868686" }}>{v}</div>
              ))}
            </div>
          </div>

          {/* ===== 요약 메시지 ===== */}
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "16px",
              borderRadius: 12,
              fontSize: 14,
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            <strong>최근 일지 요약</strong>
            <br />
            수업 시간에 집중력이 높아 학습 내용을 잘 이해하고 있습니다.
          </div>
        </div>

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
};

export default StudentStats;