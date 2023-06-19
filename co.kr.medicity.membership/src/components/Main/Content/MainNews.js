import React from "react";
import { Box } from "@mui/material";

function MainNews() {
  const items = [
    {
      title: "IANR 2023",
      date: "2023. 11. 03 ~ 04",
      location: "세종컨벤션",
    },
    {
      title: "IANR 2023",
      date: "2023. 11. 03 ~ 04",
      location: "세종컨벤션",
    },
    {
      title: "IANR 2023",
      date: "2023. 11. 03 ~ 04",
      location: "세종컨벤션",
    },
  ];

  return (
    <div className="news-wrapper">
      <div class="title">
        <h3>학회소식</h3>
        <p>의료관련 학회소식</p>
      </div>
      <div className="news-items">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {items.map((item, idx) => (
            <Box
              sx={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                borderRadius: "50px",
                padding: "2%",
              }}
            >
              <Box>
                <h4 class="font-24">{item.title}</h4>
                <p class="font-18 gray-6">{item.date}</p>
                <p class="font-18 gray-6">{item.location}</p>
              </Box>
              <Box>
                <img src="/img/common/home.png" alt="" />
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default MainNews;
