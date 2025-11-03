import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LessonLog() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("태도");

  const tabContents: Record<string, string[]> = {
    태도: [
      "수업 시간에 집중력이 높아 학습 내용을 잘 이해하고 있습니다.",
      "질문에 적극적으로 대답하며 수업에 활발히 참여했습니다.",
      "질문에 대답할 때 다소 망설이는 모습이 있었습니다.",
    ],
    적극성: [
      "발표 활동에 적극적으로 참여했습니다.",
      "새로운 문제를 스스로 해결하려는 태도를 보였습니다.",
    ],
    사교성: [
      "친구들과 협력하며 긍정적인 학습 분위기를 이끌었습니다.",
      "조별 활동에서 리더 역할을 수행했습니다.",
    ],
    요청: [
      "복습 시 어려운 개념이 있을 경우 다시 설명이 필요합니다.",
      "문제 풀이 연습 시간을 조금 더 확보해야 합니다.",
    ],
  };

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
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          height: "100vh",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* 헤더 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #EEE",
            position: "sticky",
            top: 0,
            background: "white",
            zIndex: 10,
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              color: "#4A4A4A",
              cursor: "pointer",
            }}
          >
            ←
          </button>
          <div style={{ fontWeight: 600, fontSize: 18, color: "#4A4A4A" }}>
            중등 1학년 수학 I반
          </div>
          <button
            onClick={() => navigate("/home")}
            style={{
              background: "none",
              border: "none",
              color: "#0088FF",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            완료
          </button>
        </div>

        {/* 학생 이름 */}
        <div
          style={{
            width: "100%",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              color: "#868686",
            }}
          >
            〈
          </button>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#4A4A4A",
            }}
          >
            김민준 학생
          </div>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              color: "#868686",
            }}
          >
            〉
          </button>
        </div>

        {/* 학부모님 전달 */}
        <div style={{ padding: "0 16px", marginBottom: 24 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 500,
              color: "#4A4A4A",
              marginBottom: 8,
            }}
          >
            학부모님 전달
          </div>

          <div
            style={{
              border: "1px solid #D9D9D9",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {/* 탭 메뉴 */}
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #EEE",
              }}
            >
              {["태도", "적극성", "사교성", "요청"].map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "16px 0",
                    fontSize: 15,
                    fontWeight: 500,
                    color: activeTab === tab ? "#0088FF" : "#9E9E9E",
                    borderBottom:
                      activeTab === tab ? "2px solid #0088FF" : "none",
                    cursor: "pointer",
                    background:
                      activeTab === tab ? "#FAFAFA" : "transparent",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* 탭 내용 */}
            <div style={{ padding: 8 }}>
              {tabContents[activeTab].map((text, idx) => (
                <div
                  key={idx}
                  style={{
                    background:
                      idx === 1 ? "#E6F3FF" : "transparent",
                    borderRadius: 8,
                    padding: "12px 16px",
                    marginBottom: 8,
                    color: "#4A4A4A",
                    fontSize: 16,
                    lineHeight: "24px",
                    position: "relative",
                  }}
                >
                  {text}
                  {idx === 1 && (
                    <div
                      style={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        width: 22,
                        height: 22,
                        background: "#0088FF",
                        borderRadius: 4,
                        color: "white",
                        fontSize: 14,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      1
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 추가 전달 */}
        <InputSection title="추가 전달" placeholder="추가 전달 사항을 입력해 주세요" height={88} />
        <InputSection title="주간 평가" placeholder="주간 시험 점수를 입력해 주세요" />
        <InputSection title="월간 평가" placeholder="월간 시험 점수를 입력해 주세요" />

        <div style={{ height: 60 }} />
      </div>
    </div>
  );
}

function InputSection({
  title,
  placeholder,
  height = 52,
}: {
  title: string;
  placeholder: string;
  height?: number;
}) {
  return (
    <div style={{ padding: "0 16px", marginBottom: 20 }}>
      <div
        style={{
          fontSize: 17,
          fontWeight: 500,
          color: "#4A4A4A",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div
        style={{
          height,
          border: "1px solid #D9D9D9",
          borderRadius: 8,
          padding: "12px 16px",
          color: "#9E9E9E",
          fontSize: 16,
          lineHeight: "24px",
        }}
      >
        {placeholder}
      </div>
    </div>
  );
}
