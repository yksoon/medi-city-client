import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function MainNews() {
  const items = [
    {
      title: "IANR 2023",
      date: "2023. 11. 03 ~ 04",
      location: "세종컨벤션",
      url: "https://ianr2023korea.org/",
      comming: "Y",
    },
    {
      title: "IANR 2023",
      date: "2023. 11. 03 ~ 04",
      location: "세종컨벤션",
      url: "https://ianr2023korea.org/",
    },
    {
      title: "IANR 2023",
      date: "2023. 11. 03 ~ 04",
      location: "세종컨벤션",
      url: "https://ianr2023korea.org/",
    },
  ];

  return (
    <div className="main_news">
      <div className="title">
        <h3>학회소식</h3>
        <p>의료관련 학회소식</p>
      </div>
      <ul>
        {items.map((item, idx) => (
          <li
            className={item.comming === "Y" ? "comming" : ""}
            key={`main_news_${idx}`}
          >
            <a href="">
              <h4 className="font-24">IANR 2023</h4>
              <p className="font-18 gray-6">2023. 11. 03 ~ 04</p>
              <p className="font-18 gray-6">세종컨벤션</p>
            </a>
            <Link to={item.url} target="_blank" className="home_btn">
              <img src="img/common/home.png" alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainNews;
