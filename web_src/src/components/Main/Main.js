import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { routerPath } from "webPath";
import { CommonAlert, CommonConfirm } from "common/js/Common";

import Header from "components/Common/Header";

import MainCarousel from "./Crousel/MainCarousel";
import MainMenu from "./Content/MainMenu";
import MainHotel from "./Content/MainHotel";
import MainBanner from "./Content/MainBanner";
import MainNews from "./Content/MainNews";
import MainBoard from "./Content/MainBoard";

import Login from "common/js/Login";
import "common/css/style/Main/Main.css";

function Main() {
  const carouselItems = [
    {
      imgUrl: "/img/main/mainvisual01.png",
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      imgUrl: "/img/main/mainvisual02.png",
      title: "Slide 2",
      description: "This is the second slide.",
    },
  ];

  const hotelItems = [
    {
      imgUrl: "/img/main/hotel01.png",
      title: "세인트존스호텔 강릉",
      subtitle: "St.JOHN’S HOTEL",
      event: "Y",
    },
    {
      imgUrl: "/img/main/hotel02.png",
      title: "킨텍스 바이 케이트리 호텔",
      subtitle: "KINTEX by K-TREEL",
    },
    {
      imgUrl: "/img/main/hotel03.png",
      title: "호텔 뮬리아 자카르타",
      subtitle: "HOTEL MULIA & THE SUIT ...",
    },
    {
      imgUrl: "/img/main/hotel04.png",
      title: "웨스틴호텔 자카르타",
      subtitle: "The Westin Jakarta",
    },
    {
      imgUrl: "/img/main/hotel05.png",
      title: "노보텔  보고 골프 리조트 & 컨벤션 센터 자카르타",
      subtitle: "NOVOTEL BOGOR GOLF RESORT & CONVENTION CENTER",
    },
  ];

  return (
    <>
      <div className="main-wrapper">
        {/* <Login /> */}
        <Header />

        <MainCarousel items={carouselItems} />

        <MainMenu />

        <MainHotel items={hotelItems} />

        <MainBanner />

        <MainNews />

        <MainBoard />

        {/* <CarouselMain items={hotelItems} option={hotellOption} /> */}

        {/* <div>
        <Link to={routerPath.myPage_url}>
          <Button>테스트 버튼 마이페이지</Button>
        </Link>

        <Link to={routerPath.signup_url}>
          <Button>테스트 버튼 회원가입</Button>
        </Link>
      </div> */}
        {/* <div>
        <Button onClick={handleOpen}>알럿 테스트</Button>
      </div> */}
        {/* <div>
        <Button onClick={handleOpen}>컨펌 테스트</Button>
      </div> */}

        {/* <CommonAlert
        isOpen={isModalOpen}
        title="알럿"
        content="내용입니다22222"
        btn="메롱"
        closeModal={handleClose}
      /> */}
      </div>
    </>
  );
}

export default Main;
