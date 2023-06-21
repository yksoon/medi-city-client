import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import "common/css/style/SignUp/SignUpOk.css";

function SignUpOk() {
  return (
    <>
      <div className="signup-ok-wrapper">
        <div className="con_area">
          <div className="ok">
            <span>
              <img src="/img/common/sign.png" alt="" />
            </span>
            <h3>회원가입이 완료되었습니다.</h3>
            <p>다양한 회원전용 서비스를 마음껏 누리세요! 감사합니다.</p>
            <div className="btn_box">
              <a href="/" class="backbtn">
                메인화면 바로가기{" "}
                <span>
                  <img src="/img/common/arrow.png" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpOk;
