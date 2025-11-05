import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LessonAssignment() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { name: "김민준", status: "O" },
    { name: "이서윤", status: "X" },
    { name: "박도현", status: "O" },
    { name: "최하은", status: "O" },
  ]);

  const toggleStatus = (index: number) => {
    setStudents((prev) =>
      prev.map((s, i) => {
        if (i === index) {
          return { ...s, status: s.status === "O" ? "X" : "O" };
        }
        return s;
      })
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F2F2F2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 중앙 고정된 화면 */}
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          height: "100vh",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        {/* 상단 헤더 */}
        <div
          style={{
            width: "100%",
            maxWidth: 430,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #F2F2F2",
            background: "#fff",
            position: "sticky",
            top: 0,
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

        {/* 내용 */}
        <div
          style={{
            width: "100%",
            maxWidth: 430,
            padding: "24px 16px 100px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* 안내 문구 */}
          <div style={{ color: "#868686", fontSize: 16 }}>
            다음 내용은 모든 학생에게 동일하게 적용됩니다.
          </div>

          {/* 오늘 날짜 */}
          <Section label="오늘 날짜">
            <InputBox>2025년 09월 25일</InputBox>
          </Section>

          {/* 지난 과제 */}
          <Section label="지난 과제">
            <div
              style={{
                border: "1px solid #D9D9D9",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {students.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 12px 16px 16px",
                    borderBottom:
                      i === students.length - 1
                        ? "none"
                        : "1px solid #F3F3F3",
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#4A4A4A",
                    }}
                  >
                    {s.name}
                  </div>

                  <div
                    onClick={() => toggleStatus(i)}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background:
                        s.status === "O" ? "#E6F3FF" : "#FFE6E6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {s.status === "O" ? (
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          border: "1.5px solid #0088FF",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          border: "1.5px solid #EB0000",
                          transform: "rotate(45deg)",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 수업 내용 */}
          <Section label="수업 내용">
            <InputBox>{"<4-2> 2단원 삼각형"}</InputBox>
          </Section>

          {/* 오늘 과제 */}
          <Section label="오늘 과제">
            <InputBox>프린트물과 오답 고치고 오답 노트 쓰기</InputBox>
          </Section>

          {/* 일부 학생 과제 수정 */}
          <Section label="일부 학생 과제 수정">
            <div
              style={{
                border: "1px solid #D9D9D9",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: 16,
                  borderBottom: "1px solid #F3F3F3",
                  color: "#9E9E9E",
                }}
              >
                학생 선택
              </div>
              <div
                style={{
                  padding: 16,
                  color: "#9E9E9E",
                }}
              >
                개별 과제 내용을 작성해 주세요
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                color: "#33A0FF",
                fontWeight: 600,
                fontSize: 15,
                marginTop: 4,
                cursor: "pointer",
              }}
            >
              + 학생 추가
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

/* --- 공통 스타일 컴포넌트 --- */
const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <div
      style={{
        fontSize: 17,
        fontWeight: 500,
        color: "#4A4A4A",
      }}
    >
      {label}
    </div>
    {children}
  </div>
);

const InputBox = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#FAFAFA",
      border: "1px solid #D9D9D9",
      borderRadius: 8,
      padding: "12px 16px",
      fontSize: 16,
      color: "#4A4A4A",
    }}
  >
    {children}
  </div>
);
