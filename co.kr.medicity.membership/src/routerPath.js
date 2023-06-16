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

const path = {
  // 메인
  main_url: `${base_url}`,

  // 마이페이지
  myPage_url: `${base_url}mypage${slash}`,

  // 회원가입
  signup_url: `${base_url}signup${slash}`,
};

export { path };
