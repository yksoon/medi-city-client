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
  return (
    <>
      <Header />
      <div className="main-wrapper">
        {/* <Login /> */}

        <MainCarousel />

        <div className="content main-content">
          <MainMenu />

          <MainHotel />

          <MainBanner />

          <MainNews />

          <MainBoard />
        </div>

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
