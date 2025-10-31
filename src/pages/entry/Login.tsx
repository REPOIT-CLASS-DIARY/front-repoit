import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // 카카오 로그인 버튼 클릭 시 약관 동의 페이지로 이동
  const handleKakaoLogin = () => {
    navigate("/terms");
  };

  // 네이버 로그인 (추후 기능 확장 가능)
  const handleNaverLogin = () => {
    navigate("/terms");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {}
      <div
        style={{
          width: "100%",
          maxWidth: 375,
          backgroundColor: "white",
          borderRadius: 16,
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 0",
          height: "80vh",
        }}
      >
        {}
        <header
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: 30,
            color: "#4A4A4A",
          }}
        >
          Repoit
        </header>

        {}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "#D9D9D9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#000",
              fontFamily: "Pretendard",
              textAlign: "center",
            }}
          >
            학생 일지 서비스
          </span>
        </div>

        {}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          {}
          <button
            onClick={handleKakaoLogin}
            style={{
              width: 320,
              height: 52,
              background: "#FEE500",
              borderRadius: 8,
              fontWeight: 500,
              fontFamily: "Noto Sans",
              color: "rgba(0,0,0,0.85)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="20"      
              height="20"  
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"
              />
            </svg>
            카카오로 시작하기
          </button>

          {}
          <button
            onClick={handleNaverLogin}
            style={{
              width: 320,
              height: 52,
              background: "#03C75A",
              borderRadius: 8,
              fontWeight: 500,
              fontFamily: "Noto Sans",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
            </svg>
            네이버로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
