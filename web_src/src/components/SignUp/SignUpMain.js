import React, { useRef, useEffect, useState } from "react";
import { apiPath, routerPath } from "webPath";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

import IdComponent from "./signupComponents/IdComponent";
import PwComponent from "./signupComponents/PwComponent";
import NameComponent from "./signupComponents/NameComponent";
import MobileComponent from "./signupComponents/MobileComponent";

function SignUpMain() {
    return (
        <>
            <Header />
            <div id="con_area">
                <div className="form sign" id="sign_form">
                    <h3 className="title">회원가입</h3>
                    <div>
                        {/* 아이디 영역 */}
                        <IdComponent />

                        {/* 패스워드 영역 */}
                        <PwComponent />

                        <div className="flex">
                            {/* 성명 영역 */}
                            <NameComponent />
                        </div>
                        <div className="flex end">
                            <MobileComponent />
                            {/* <div>
                                <div className="flex mb15">
                                    <h5 className="m0">
                                        휴대전화 <span className="red">*</span>
                                    </h5>
                                    <div id="phone_check_after_btn">
                                        <a
                                            href="javascript:void(0);"
                                            className="font-12 mr10 ml10"
                                            onClick="phoneCheck(3);"
                                        >
                                            인증번호가 오지 않았나요?
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="font-12"
                                            onClick="phoneCheck(4);"
                                        >
                                            휴대전화 재입력
                                        </a>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div id="phone_num" className="m0">
                                        <input
                                            type="tel"
                                            className="input w120"
                                            id="phone_num1"
                                        />
                                        <input
                                            type="tel"
                                            className="input w140"
                                            id="phone_num2"
                                        />
                                        <input
                                            type="tel"
                                            className="input w140"
                                            id="phone_num3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="phone_check_before">
                                <a
                                    href="javascript:void(0);"
                                    className="subbtn on m0"
                                    onClick="phoneCheck(1);"
                                >
                                    인증 번호
                                </a>
                            </div>
                            <div id="phone_check_after">
                                <h5>
                                    인증번호 <span className="red">*</span>
                                </h5>
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="input w180"
                                        id="phone_d_num"
                                    />
                                    <a
                                        href="javascript:void(0);"
                                        className="subbtn on"
                                        onClick="phoneCheck(2);"
                                        id="phoneCheck"
                                    >
                                        인증 확인
                                    </a>
                                </div>
                            </div>
                            <p className="mark" id="mark_tel">
                                휴대폰 인증을 진행해주세요.
                            </p> */}
                        </div>
                        <div>
                            <h5>면허번호</h5>
                            <input type="text" className="input w370" />
                        </div>
                        <div className="flex">
                            <div>
                                <h5>소속 기관</h5>
                                <input type="text" className="input w280" />
                            </div>
                            <div>
                                <h5>전공과</h5>
                                <input type="text" className="input w280" />
                            </div>
                            <div>
                                <h5>전공분야</h5>
                                <input type="text" className="input w280" />
                            </div>
                        </div>
                        <div className="term_wrap">
                            <div className="term_top flex start between">
                                <div className="flex start ">
                                    <h5>
                                        약관에 동의하겠습니까?{" "}
                                        <span className="red">*</span>
                                    </h5>
                                    <p className="mark red" id="mark_tel">
                                        이용약관을 확인해주세요
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    id="agree_all"
                                    className="hide"
                                />
                                <label for="agree_all" className="checkbox">
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
                            <div className="linebox">
                                <div className="flex between">
                                    <h6>
                                        이용약관{" "}
                                        <a
                                            href="javascript:void(0);"
                                            className="font-12"
                                            onClick="modal_open(term);"
                                        >
                                            전문보기
                                        </a>
                                    </h6>
                                    <input
                                        type="checkbox"
                                        id="agree_term"
                                        className="hide"
                                    />
                                    <label
                                        for="agree_term"
                                        className="checkbox"
                                    >
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
                                <div className="flex between">
                                    <h6>
                                        개인정보처리동의{" "}
                                        <a
                                            href="javascript:void(0);"
                                            className="font-12"
                                            onClick="modal_open(privacy);"
                                        >
                                            전문보기
                                        </a>
                                    </h6>
                                    <input
                                        type="checkbox"
                                        id="agree_privacy"
                                        className="hide"
                                    />
                                    <label
                                        for="agree_privacy"
                                        className="checkbox"
                                    >
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
                                <div className="flex between">
                                    <div>
                                        <h6>
                                            마케팅 수신 동의 (선택){" "}
                                            <a
                                                href="privacy.html"
                                                className="font-12"
                                            >
                                                전문보기
                                            </a>
                                        </h6>
                                        <div className="flex marketing">
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id="marketing_sms"
                                                    className="hide"
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
                                                    className="hide"
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
                                                    className="hide"
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
                                    <input
                                        type="checkbox"
                                        id="agree_marketing"
                                        className="hide"
                                    />
                                    <label
                                        for="agree_marketing"
                                        className="checkbox"
                                    >
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
                            <div className="btn_box">
                                <a
                                    href="sign_ok.html"
                                    className="mainbtn btn01"
                                >
                                    가입하기
                                </a>
                                <a
                                    href="javascript:void();"
                                    className="mainbtn btn02"
                                >
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
