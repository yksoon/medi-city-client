// 콜론, slash
const colon = ":";
const slash = "/";

// 프로토콜
// 호스트
// 포트
// 버전
const protocol = "http://";

const host = "dev-api.medi-city.co.kr";

const port = "60000";

const version = "v1";

// 기본 url
// const base_url = protocol + host + colon + port + slash + version + slash;
const base_url = "/";
const base_api_url = protocol + host + colon + port;

// Auth
const auth = "auth";

// Management Service
const mng = "mng";

// Account Service
const account = "account";

// route
const routerPath = {
  // 메인
  main_url: `${base_url}`,

  // 마이페이지
  myPage_url: `${base_url}mypage${slash}`,

  // 회원가입
  signup_url: `${base_url}signup${slash}`,
  signup_ok_url: `${base_url}signupok${slash}`,

  // 약관
  terms_url: `${base_url}terms${slash}`,
  privacy_url: `${base_url}privacy${slash}`,
};

// api
const apiPath = {
  // http://dev-api.medi-city.co.kr:60000/auth/v1/signin
  // ------------------ Auth ------------------
  // Refresh POST
  api_refresh: `${
    base_api_url + slash + auth + slash + version + slash
  }refresh`,

  // 로그인 POST
  api_login: `${base_api_url + slash + auth + slash + version + slash}signin`,

  // 로그아웃 POST
  api_signout: `${
    base_api_url + slash + auth + slash + version + slash
  }signout`,

  // ------------------ Management Service ------------------
  // 게시판관리 GET PUT POST DELETE
  api_board: `${base_api_url + slash + mng + slash + version + slash}board`,

  // 게시판목록 POST
  api_boards: `${base_api_url + slash + mng + slash + version + slash}boards`,

  // 게시판 GET DELETE
  api_board_idx: `${
    base_api_url + slash + mng + slash + version + slash
  }board${slash}`,

  // ------------------ Account Service ------------------
  // 사용자 상세 GET
  // 사용자 수정 PUT
  api_user: `${base_api_url + slash + account + slash + version + slash}user`,

  // 사용자 정보 조회 POST
  // 사용자 정보 수정 PUT
  api_user_info: `${
    base_api_url + slash + account + slash + version + slash
  }user/info`,

  // 사용자 목록 POST
  api_users: `${base_api_url + slash + account + slash + version + slash}users`,

  // 사용자 확인 POST
  api_user_licenses: `${
    base_api_url + slash + account + slash + version + slash
  }user/_licenses`,

  // 사용자 확인 POST
  api_user_check: `${
    base_api_url + slash + account + slash + version + slash
  }user/_check`,
};

export { routerPath, apiPath };
