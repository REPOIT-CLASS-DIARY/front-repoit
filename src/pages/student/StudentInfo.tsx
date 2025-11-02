// src/pages/student/StudentInfo.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack, IoCopyOutline } from "react-icons/io5";

interface Student {
  name: string;
  code: string;
  birth: string;
  grade: string;
  momPhone: string;
  dadPhone: string;
  note: string;
}

const StudentInfo: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();

  // 더미 데이터 (타입 명시)
  const studentData: Record<string, Student> = {
    "1": { name: "김민준", code: "201452", birth: "2008.12.12", grade: "중등 1학년 수학 I반, 중등 1학년 영어 S반", momPhone: "010-1234-5678", dadPhone: "010-1234-5678", note: "" },
    "2": { name: "이서연", code: "201453", birth: "2008.11.05", grade: "중등 1학년 수학 I반", momPhone: "010-9876-5432", dadPhone: "010-9876-5432", note: "집중력 우수" },
    "3": { name: "박지호", code: "201454", birth: "2008.10.20", grade: "중등 1학년 수학 I반, 과학 A반", momPhone: "010-5555-6666", dadPhone: "010-5555-6666", note: "" },
    "4": { name: "최은지", code: "201455", birth: "2008.09.15", grade: "중등 1학년 영어 S반", momPhone: "010-4444-3333", dadPhone: "010-4444-3333", note: "숙제 빠짐없이 제출" },
    "5": { name: "정하윤", code: "201456", birth: "2008.08.08", grade: "중등 1학년 수학 I반", momPhone: "010-7777-8888", dadPhone: "010-7777-8888", note: "" },
    "6": { name: "한승민", code: "201457", birth: "2008.07.30", grade: "중등 1학년 수학 I반", momPhone: "010-9999-0000", dadPhone: "010-9999-0000", note: "" },
  };

  // 안전한 데이터 추출
  const data: Student = studentId && studentData[studentId]
    ? studentData[studentId]
    : {
        name: "알 수 없음",
        code: "000000",
        birth: "0000.00.00",
        grade: "정보 없음",
        momPhone: "000-0000-0000",
        dadPhone: "000-0000-0000",
        note: "",
      };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("복사되었습니다!");
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
                학생 정보
            </div>
            <div
                style={{ fontSize: 14, color: "#0088FF", cursor: "pointer" }}
                onClick={() => navigate(`/student-edit/${studentId}`)}
            >
                수정
            </div>
        </div>

        {/* ===== 학생 코드 ===== */}
        <div
          style={{
            margin: "16px 20px",
            padding: "12px 16px",
            backgroundColor: "#E3F2FD",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: "#868686" }}>학생 코드</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#333" }}>{data.code}</div>
          </div>
          <button
            onClick={() => copyToClipboard(data.code)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <IoCopyOutline size={20} color="#0088FF" />
          </button>
        </div>

        {/* ===== 정보 항목들 ===== */}
        <div style={{ padding: "0 20px" }}>
          <InfoItem label="학생 이름" value={data.name} />
          <InfoItem label="생년월일" value={data.birth} />
          <InfoItem label="참여 수업" value={data.grade} />
          <InfoItem label="어머님 번호" value={data.momPhone} copy />
          <InfoItem label="학생 번호" value={data.dadPhone} copy />
          <InfoItem label="기타 정보" value={data.note || "없음"} />
        </div>

        {/* ===== 하단 여백 ===== */}
        <div style={{ height: 80 }} />
      </div>
    </div>
  );
};

// 재사용 가능한 컴포넌트 (타입 명시)
const InfoItem: React.FC<{ label: string; value: string; copy?: boolean }> = ({ label, value, copy }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    alert("복사되었습니다!");
  };

  return (
    <div
      style={{
        padding: "16px 0",
        borderBottom: "1px solid #F0F0F0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ fontSize: 12, color: "#868686" }}>{label}</div>
        <div style={{ fontSize: 16, color: "#333", marginTop: 4 }}>{value}</div>
      </div>
      {copy && (
        <button
          onClick={copyToClipboard}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <IoCopyOutline size={18} color="#0088FF" />
        </button>
      )}
    </div>
  );
};

export default StudentInfo;