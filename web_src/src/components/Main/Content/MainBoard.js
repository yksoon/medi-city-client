import React from "react";
import { Box } from "@mui/material";

function MainBoard() {
  const faqItems = [
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
  ];

  const noticeItems = [
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
  ];

  return (
    <div className="board-wrapper">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div class="faq-wrapper">
          <div class="title">
            <h3>FAQ</h3>
            <p>자주묻는질문</p>
          </div>
          <ul>
            {faqItems.map((item, idx) => (
              <div className="faq-item" idx={`faq_${idx}`}>
                <h4 class="font-21">Q. {item.title}</h4>
              </div>
            ))}
          </ul>
        </div>
        <div class="notice-wrapper">
          <div class="title">
            <h3>NOTICE</h3>
            <p>공지사항</p>
          </div>
          <ul>
            {noticeItems.map((item, idx) => (
              <div className="notice-item" idx={`notice_${idx}`}>
                <h4 class="font-21">Q. {item.title}</h4>
              </div>
            ))}
          </ul>
        </div>
      </Box>
    </div>
  );
}

export default MainBoard;
