import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { apiPath, routerPath } from "webPath";

import Instance from "common/js/Instance";
import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

const url = apiPath.api_user_check;

function SignUpMain() {
  const inputID = useRef();

  const idDuplicateCheck = (e) => {
    console.log(inputID.current.value);

    Instance.post(url, {
      user_id: `${inputID.current.value}`
    })
      .then(function (response) {
        // response
        console.log(response);
        // let user_info;
        // let result_code = response.headers.result_code;

        // if (result_code === "0000") {
        //   user_info = response.data.result_info;
        //   localStorage.setItem("userInfo", user_info);
        // }
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div id="con_area">
        <div class="form sign" id="sign_form">
          <h3 class="title">회원가입</h3>
          <div>
            <h5>
              아이디 <span class="red">*</span>
            </h5>
            <div class="flex">
              <div>
                <input type="email" class="input w600" autofocus onKeyUp={idDuplicateCheck} ref={inputID} />
              </div>
              <p class="mark" id="mark_id">
                아이디는 이메일 형식으로 입력하세요
              </p>
            </div>
            <div class="flex">
              <div>
                <h5>
                  비밀번호 <span class="red">*</span>
                </h5>
                <input type="password" class="input w370" />
              </div>
              <div>
                <h5>
                  비밀번호 확인 <span class="red">*</span>
                </h5>
                <input type="password" class="input w370" />
              </div>
              <div>
                <h5>&nbsp;</h5>
                <p class="mark" id="mark_pw">
                  비밀번호는 4-16자리로 입력해주세요
                </p>
              </div>
            </div>
            <div class="flex">
              <div>
                <h5>
                  성명 (국문) <span class="red">*</span>
                </h5>
                <input type="name" class="input w180" placeholder="성" />
                <input type="name" class="input w180" placeholder="이름" />
              </div>
              <div>
                <h5>
                  성명 (영문) <span class="red">*</span>
                </h5>
                <input
                  type="name"
                  class="input w180"
                  placeholder="First name"
                />
                <input type="name" class="input w180" placeholder="Last name" />
              </div>
            </div>
            <div class="flex end">
              <div>
                <div class="flex mb15">
                  <h5 class="m0">
                    휴대전화 <span class="red">*</span>
                  </h5>
                  <div id="phone_check_after_btn">
                    <a
                      href="javascript:void(0);"
                      class="font-12 mr10 ml10"
                      onclick="phoneCheck(3);"
                    >
                      인증번호가 오지 않았나요?
                    </a>
                    <a
                      href="javascript:void(0);"
                      class="font-12"
                      onclick="phoneCheck(4);"
                    >
                      휴대전화 재입력
                    </a>
                  </div>
                </div>
                <div class="flex">
                  <div id="phone_num" class="m0">
                    <input type="tel" class="input w120" id="phone_num1" />
                    <input type="tel" class="input w140" id="phone_num2" />
                    <input type="tel" class="input w140" id="phone_num3" />
                  </div>
                </div>
              </div>
              <div id="phone_check_before">
                <a
                  href="javascript:void(0);"
                  class="subbtn on m0"
                  onclick="phoneCheck(1);"
                >
                  인증 번호
                </a>
              </div>
              <div id="phone_check_after">
                <h5>
                  인증번호 <span class="red">*</span>
                </h5>
                <div class="flex">
                  <input type="text" class="input w180" id="phone_d_num" />
                  <a
                    href="javascript:void(0);"
                    class="subbtn on"
                    onclick="phoneCheck(2);"
                    id="phoneCheck"
                  >
                    인증 확인
                  </a>
                </div>
              </div>
              <p class="mark" id="mark_tel">
                휴대폰 인증을 진행해주세요.
              </p>
            </div>
            <div>
              <h5>면허번호</h5>
              <input type="text" class="input w370" />
            </div>
            <div class="flex">
              <div>
                <h5>소속 기관</h5>
                <input type="text" class="input w280" />
              </div>
              <div>
                <h5>전공과</h5>
                <input type="text" class="input w280" />
              </div>
              <div>
                <h5>전공분야</h5>
                <input type="text" class="input w280" />
              </div>
            </div>
            <div class="term_wrap">
              <div class="term_top flex start between">
                <div class="flex start ">
                  <h5>
                    약관에 동의하겠습니까? <span class="red">*</span>
                  </h5>
                  <p class="mark red" id="mark_tel">
                    이용약관을 확인해주세요
                  </p>
                </div>
                <input type="checkbox" id="agree_all" class="hide" />
                <label for="agree_all" class="checkbox">
                  <svg
                    width="9.772"
                    height="7.181"
                    viewBox="0 0 9.772 7.181"
                    fill="#bdbdbd"
                  >
                    <path
                      d="M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z"
                      transform="translate(3.591 1)"
                    />
                    <path
                      d="M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z"
                      transform="translate(1 3.591)"
                    />
                  </svg>
                </label>
              </div>
              <div class="linebox">
                <div class="flex between">
                  <h6>
                    이용약관{" "}
                    <a
                      href="javascript:void(0);"
                      class="font-12"
                      onclick="modal_open(term);"
                    >
                      전문보기
                    </a>
                  </h6>
                  <input type="checkbox" id="agree_term" class="hide" />
                  <label for="agree_term" class="checkbox">
                    <svg
                      width="9.772"
                      height="7.181"
                      viewBox="0 0 9.772 7.181"
                      fill="#bdbdbd"
                    >
                      <path
                        d="M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z"
                        transform="translate(3.591 1)"
                      />
                      <path
                        d="M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z"
                        transform="translate(1 3.591)"
                      />
                    </svg>
                  </label>
                </div>
                <div class="flex between">
                  <h6>
                    개인정보처리동의{" "}
                    <a
                      href="javascript:void(0);"
                      class="font-12"
                      onclick="modal_open(privacy);"
                    >
                      전문보기
                    </a>
                  </h6>
                  <input type="checkbox" id="agree_privacy" class="hide" />
                  <label for="agree_privacy" class="checkbox">
                    <svg
                      width="9.772"
                      height="7.181"
                      viewBox="0 0 9.772 7.181"
                      fill="#bdbdbd"
                    >
                      <path
                        d="M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z"
                        transform="translate(3.591 1)"
                      />
                      <path
                        d="M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z"
                        transform="translate(1 3.591)"
                      />
                    </svg>
                  </label>
                </div>
                <div class="flex between">
                  <div>
                    <h6>
                      마케팅 수신 동의 (선택){" "}
                      <a href="privacy.html" class="font-12">
                        전문보기
                      </a>
                    </h6>
                    <div class="flex marketing">
                      <div>
                        <input
                          type="checkbox"
                          id="marketing_sms"
                          class="hide"
                        />
                        <label for="marketing_sms">
                          <svg
                            width="9.772"
                            height="7.181"
                            viewBox="0 0 3.585 2.635"
                            fill="#bdbdbd"
                          >
                            <path
                              id="선_77"
                              data-name="선 77"
                              d="M-.633,1.635a.366.366,0,0,1-.259-.107.367.367,0,0,1,0-.519l1.9-1.9a.367.367,0,0,1,.519,0,.367.367,0,0,1,0,.519l-1.9,1.9A.366.366,0,0,1-.633,1.635Z"
                              transform="translate(1.951 1)"
                            />
                            <path
                              id="선_76"
                              data-name="선 76"
                              d="M.317.684A.366.366,0,0,1,.058.577L-.893-.374a.367.367,0,0,1,0-.519.367.367,0,0,1,.519,0L.577.058A.367.367,0,0,1,.317.684Z"
                              transform="translate(1 1.951)"
                            />
                          </svg>
                          SMS
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="marketing_mail"
                          class="hide"
                        />
                        <label for="marketing_mail">
                          <svg
                            width="9.772"
                            height="7.181"
                            viewBox="0 0 3.585 2.635"
                            fill="#bdbdbd"
                          >
                            <path
                              id="선_77"
                              data-name="선 77"
                              d="M-.633,1.635a.366.366,0,0,1-.259-.107.367.367,0,0,1,0-.519l1.9-1.9a.367.367,0,0,1,.519,0,.367.367,0,0,1,0,.519l-1.9,1.9A.366.366,0,0,1-.633,1.635Z"
                              transform="translate(1.951 1)"
                            />
                            <path
                              id="선_76"
                              data-name="선 76"
                              d="M.317.684A.366.366,0,0,1,.058.577L-.893-.374a.367.367,0,0,1,0-.519.367.367,0,0,1,.519,0L.577.058A.367.367,0,0,1,.317.684Z"
                              transform="translate(1 1.951)"
                            />
                          </svg>
                          E-mail
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="marketing_web"
                          class="hide"
                        />
                        <label for="marketing_web">
                          <svg
                            width="9.772"
                            height="7.181"
                            viewBox="0 0 3.585 2.635"
                            fill="#bdbdbd"
                          >
                            <path
                              id="선_77"
                              data-name="선 77"
                              d="M-.633,1.635a.366.366,0,0,1-.259-.107.367.367,0,0,1,0-.519l1.9-1.9a.367.367,0,0,1,.519,0,.367.367,0,0,1,0,.519l-1.9,1.9A.366.366,0,0,1-.633,1.635Z"
                              transform="translate(1.951 1)"
                            />
                            <path
                              id="선_76"
                              data-name="선 76"
                              d="M.317.684A.366.366,0,0,1,.058.577L-.893-.374a.367.367,0,0,1,0-.519.367.367,0,0,1,.519,0L.577.058A.367.367,0,0,1,.317.684Z"
                              transform="translate(1 1.951)"
                            />
                          </svg>
                          웹
                        </label>
                      </div>
                    </div>
                  </div>
                  <input type="checkbox" id="agree_marketing" class="hide" />
                  <label for="agree_marketing" class="checkbox">
                    <svg
                      width="9.772"
                      height="7.181"
                      viewBox="0 0 9.772 7.181"
                      fill="#bdbdbd"
                    >
                      <path
                        d="M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z"
                        transform="translate(3.591 1)"
                      />
                      <path
                        d="M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z"
                        transform="translate(1 3.591)"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div class="btn_box">
                <a href="sign_ok.html" class="mainbtn btn01">
                  가입하기
                </a>
                <a href="javascript:void();" class="mainbtn btn02">
                  뒤로가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpMain;
