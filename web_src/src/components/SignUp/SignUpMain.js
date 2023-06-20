import React from "react";
import { Link } from "react-router-dom";
import { routerPath } from "webPath";

function SignUpMain() {
  return (
    <>
      <div>
        <h1>회원가입</h1>
      </div>
      <div>
        <button>
          <Link to={routerPath.myPage_url}>테스트 버튼 마이페이지</Link>
        </button>
        <button>
          <Link to="/mypage">테스트 버튼2</Link>
        </button>
        <button>
          <Link to={routerPath.main_url}>테스트 버튼 홈</Link>
        </button>
      </div>
    </>
  );
}

export default SignUpMain;
