// src/pages/entry/RoleSetting.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AcademyCodeModal: React.FC<{ isOpen: boolean; onClose: () => void; onRegisterNew: () => void }> = ({
  isOpen,
  onClose,
  onRegisterNew,
}) => {
  const [academyCode, setAcademyCode] = useState("");

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        padding: "24px 20px",
        zIndex: 1000,
      }}
    >
      <h3 style={{ fontSize: 18, fontWeight: 600, textAlign: "center" }}>
        이미 학원 등록이 되어있나요?
      </h3>
      <input
        type="text"
        placeholder="학원 등록 코드 입력"
        value={academyCode}
        onChange={(e) => setAcademyCode(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: 16,
          borderRadius: 8,
          border: "1px solid #D9D9D9",
          fontSize: 14,
        }}
      />
      <button
        style={{
          marginTop: 12,
          background: "none",
          border: "none",
          color: "#007AFF",
          cursor: "pointer",
          fontWeight: 500,
        }}
        onClick={onRegisterNew}
      >
        아니오, 새롭게 등록할게요
      </button>
      <button
        style={{
          width: "100%",
          height: 48,
          background: "#007AFF",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontWeight: 600,
          cursor: "pointer",
          marginTop: 20,
        }}
        onClick={() => {
          if (academyCode.trim()) {
            console.log("입력된 학원 코드:", academyCode);
            onClose();
          } else {
            alert("학원 코드를 입력해주세요.");
          }
        }}
      >
        완료
      </button>
    </div>
  );
};

const RoleSettingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"teacher" | "parent" | null>(null);
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    if (selectedRole) {
      setIsModalOpen(true); // "다음" 버튼 클릭 시 모달 열기
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/home"); // 모달 닫힐 때 홈으로 이동
  };

  const handleRegisterNew = () => {
    setIsModalOpen(false);
    navigate("/register-academy"); // 새 학원 등록 페이지로 이동
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#E5E5E5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {}
      <div
        style={{
          width: 375,
          height: 812,
          backgroundColor: "white",
          borderRadius: 20,
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {}
        <div
          style={{
            width: "100%",
            padding: "112px 24px 0 24px", // ✅ 좌우 패딩 늘림
          }}
        >
          <div
            style={{
              color: "#4A4A4A",
              fontSize: 24,
              fontWeight: 600,
              fontFamily: "Pretendard",
              lineHeight: "33.6px",
              marginBottom: 8,
            }}
          >
            환영합니다!
            <br />
            회원가입이 완료되었습니다.
          </div>
          <div
            style={{
              color: "#868686",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: "Pretendard",
              lineHeight: "24px",
            }}
          >
            어떤 역할로 시작할까요?
          </div>
        </div>

        {}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            width: "100%",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          {}
          <div
            onClick={() => setSelectedRole("teacher")}
            style={{
              width: "100%",
              height: 160,
              background: selectedRole === "teacher" ? "#E6F3FF" : "#F3F3F3",
              borderRadius: 8,
              border:
                selectedRole === "teacher"
                  ? "1px solid #0088FF"
                  : "1px solid #D9D9D9",
              cursor: "pointer",
              transition: "0.25s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 24,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: selectedRole === "teacher" ? "#0088FF" : "#4A4A4A",
                marginBottom: 4,
              }}
            >
              선생님
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: selectedRole === "teacher" ? "#0088FF" : "#868686",
              }}
            >
              학습 일지를 작성하고 확인할 수 있습니다.
            </div>
          </div>

          {}
          <div
            onClick={() => setSelectedRole("parent")}
            style={{
              width: "100%",
              height: 160,
              background: selectedRole === "parent" ? "#E6F3FF" : "#F3F3F3",
              borderRadius: 8,
              border:
                selectedRole === "parent"
                  ? "1px solid #0088FF"
                  : "1px solid #D9D9D9",
              cursor: "pointer",
              transition: "0.25s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 24,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: selectedRole === "parent" ? "#0088FF" : "#4A4A4A",
                marginBottom: 4,
              }}
            >
              학부모
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: selectedRole === "parent" ? "#0088FF" : "#868686",
              }}
            >
              학생의 학습 현황을 확인할 수 있습니다.
            </div>
          </div>
        </div>

        {}
        <div
          style={{
            width: "100%",
            padding: "0 24px 24px 24px", // ✅ 버튼도 좌우 여백 추가
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={handleNext}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            disabled={!selectedRole}
            style={{
              width: "100%",
              height: 52,
              borderRadius: 6,
              border: "none",
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "Pretendard",
              color: "white",
              backgroundColor: !selectedRole
                ? "#D9D9D9"
                : hovered
                ? "#0077E6"
                : "#0088FF",
              cursor: selectedRole ? "pointer" : "not-allowed",
              transition: "background-color 0.2s ease",
            }}
          >
            다음
          </button>
        </div>

        <AcademyCodeModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onRegisterNew={handleRegisterNew}
        />
      </div>
    </div>
  );
};

export default RoleSettingPage;