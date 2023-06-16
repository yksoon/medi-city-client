import React from "react";
import { Link } from "react-router-dom";
import { path } from "routerPath";

function SignUpMain() {
  return (
    <>
      <div>
        <h1>회원가입</h1>
      </div>
      <div>
        <button>
          <Link to={path.myPage_url}>테스트 버튼 마이페이지</Link>
        </button>
        <button>
          <Link to="/mypage">테스트 버튼2</Link>
        </button>
        <button>
          <Link to={path.main_url}>테스트 버튼 홈</Link>
        </button>
      </div>
    </>
  );
}

export default SignUpMain;
