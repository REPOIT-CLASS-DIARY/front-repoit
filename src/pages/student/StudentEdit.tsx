// src/pages/student/StudentEdit.tsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

interface StudentForm {
  name: string;
  birth: string;
  classes: string[];
  momRelation: string;
  momPhone: string;
  dadRelation: string;
  dadPhone: string;
  note: string;
}

const StudentEdit: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();

  // studentId 사용: 디버그 로그 또는 API 연동 준비
  console.log("Editing student ID:", studentId); // 실제로는 API 호출

  // 더미 초기값
  const [form, setForm] = useState<StudentForm>({
    name: "이서윤",
    birth: "2008.12.12",
    classes: ["중등 1학년 수학 I반"],
    momRelation: "어머님",
    momPhone: "010-1234-5678",
    dadRelation: "학생",
    dadPhone: "010-1234-5678",
    note: "집중력 우수",
  });

  const relations = ["어머님", "아버님", "학생", "기타"];
  // classOptions 제거 → 실제로는 모달에서 사용

  const handleSave = () => {
    alert(`학생 정보가 수정되었습니다. (ID: ${studentId})`);
    navigate(-1);
  };

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
          }}
        >
          <IoArrowBack
            size={24}
            color="#333"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <div style={{ fontSize: 16, fontWeight: 600, color: "#333", marginLeft: 12 }}>
            학생 정보 수정
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          {/* 학생 이름 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "#333", display: "block", marginBottom: 8 }}>
              학생 이름
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                fontSize: 16,
              }}
            />
          </div>

          {/* 생년월일 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "#333", display: "block", marginBottom: 8 }}>
              생년월일
            </label>
            <input
              type="text"
              value={form.birth}
              onChange={(e) => setForm({ ...form, birth: e.target.value })}
              placeholder="YYYY.MM.DD"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                fontSize: 16,
              }}
            />
          </div>

          {/* 참여 수업 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "#333", display: "block", marginBottom: 8 }}>
              참여 수업<sup style={{ color: "red" }}>*</sup>
            </label>
            {form.classes.map((cls, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <select
                  value={cls}
                  onChange={(e) => {
                    const newClasses = [...form.classes];
                    newClasses[i] = e.target.value;
                    setForm({ ...form, classes: newClasses });
                  }}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #E0E0E0",
                    borderRadius: 8,
                    fontSize: 16,
                    backgroundColor: "white",
                  }}
                >
                  <option>중등 1학년 수학 I반</option>
                  <option>중등 1학년 영어 S반</option>
                  <option>중등 1학년 과학 A반</option>
                </select>
              </div>
            ))}
            <button
              onClick={() => setForm({ ...form, classes: [...form.classes, ""] })}
              style={{
                marginTop: 8,
                color: "#0088FF",
                background: "none",
                border: "none",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              + 수업 추가
            </button>
          </div>

          {/* 전화번호 */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "#333", display: "block", marginBottom: 8 }}>
              전화 번호
            </label>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <select
                value={form.momRelation}
                onChange={(e) => setForm({ ...form, momRelation: e.target.value })}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: 8,
                  fontSize: 16,
                  flex: 1,
                }}
              >
                {relations.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <input
                type="tel"
                value={form.momPhone}
                onChange={(e) => setForm({ ...form, momPhone: e.target.value })}
                style={{
                  flex: 2,
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: 8,
                  fontSize: 16,
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <select
                value={form.dadRelation}
                onChange={(e) => setForm({ ...form, dadRelation: e.target.value })}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: 8,
                  fontSize: 16,
                  flex: 1,
                }}
              >
                {relations.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <input
                type="tel"
                value={form.dadPhone}
                onChange={(e) => setForm({ ...form, dadPhone: e.target.value })}
                style={{
                  flex: 2,
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: 8,
                  fontSize: 16,
                }}
              />
            </div>
            <button
              style={{
                marginTop: 8,
                color: "#0088FF",
                background: "none",
                border: "none",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              + 번호 추가
            </button>
          </div>

          <div style={{ marginBottom: 32 }}>
            <label style={{ fontSize: 12, color: "#333", display: "block", marginBottom: 8 }}>
              기타 정보
            </label>
            <textarea
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              placeholder="없음"
              style={{
                width: "100%",
                minHeight: 80,
                padding: "12px 16px",
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                fontSize: 16,
                resize: "none",
              }}
            />
          </div>

          {/* 버튼 */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={handleSave}
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#0088FF",
                color: "white",
                fontSize: 16,
                fontWeight: 600,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              완료
            </button>
          </div>
        </div>

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
};

export default StudentEdit;