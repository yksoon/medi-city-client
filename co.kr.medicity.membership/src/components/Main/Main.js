import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { routerPath } from "webPath";

import Login from "common/js/Login";
import { CommonAlert, CommonConfirm } from "common/js/Common";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleCountPlus = () => {
    let countUp = count + 1;
    setCount(countUp);
  };

  const handleCountMinus = () => {
    let countDown = count - 1;
    setCount(countDown);
  };

  return (
    <>
      <Login />
      <div>
        <h1>메인</h1>
      </div>
      <div>
        <Link to={routerPath.myPage_url}>
          <Button>테스트 버튼 마이페이지</Button>
        </Link>

        <Link to={routerPath.signup_url}>
          <Button>테스트 버튼 회원가입</Button>
        </Link>
      </div>
      <div>
        <Button onClick={handleOpen}>알럿 테스트</Button>
      </div>
      {/* <div>
        <Button onClick={handleOpen}>컨펌 테스트</Button>
      </div> */}

      <div>
        <Form.Control
          type="text"
          placeholder="Disabled input"
          aria-label="Disabled input example"
          value={count}
          readOnly
        />
        <Button onClick={handleCountMinus}>숫자내려</Button>
        <Button onClick={handleCountPlus}>숫자올려</Button>
      </div>

      <CommonAlert
        isOpen={isModalOpen}
        title="알럿"
        content="내용입니다22222"
        btn="메롱"
        closeModal={handleClose}
      />
    </>
  );
}

export default Main;
