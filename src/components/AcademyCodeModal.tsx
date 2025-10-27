// // pages/entry/components/TeacherAcademyModal.tsx
// import React from "react";

// interface TeacherAcademyModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const TeacherAcademyModal: React.FC<TeacherAcademyModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: 0,
//         left: 0,
//         width: "100%",
//         background: "#fff",
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//         boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
//         padding: "24px 20px",
//         zIndex: 1000,
//       }}
//     >
//       <h3 style={{ fontSize: 18, fontWeight: 600, textAlign: "center" }}>
//         학원 등록이 되어있나요?
//       </h3>

//       <input
//         type="text"
//         placeholder="학원 등록 코드 입력"
//         style={{
//           width: "100%",
//           padding: "12px",
//           marginTop: 16,
//           borderRadius: 8,
//           border: "1px solid #D9D9D9",
//           fontSize: 14,
//         }}
//       />

//       <button
//         style={{
//           marginTop: 12,
//           background: "none",
//           border: "none",
//           color: "#007AFF",
//           cursor: "pointer",
//           fontWeight: 500,
//         }}
//       >
//         아니오, 새롭게 등록할게요
//       </button>

//       <button
//         style={{
//           width: "100%",
//           height: 48,
//           background: "#007AFF",
//           color: "#fff",
//           border: "none",
//           borderRadius: 8,
//           fontWeight: 600,
//           cursor: "pointer",
//           marginTop: 20,
//         }}
//       >
//         완료
//       </button>
//     </div>
//   );
// };

// export default TeacherAcademyModal;
