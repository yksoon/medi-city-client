import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { Instance } from "common/js/Instance";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

import IdComponent from "./signupComponents/IdComponent";
import PwComponent from "./signupComponents/PwComponent";
import NameComponent from "./signupComponents/NameComponent";
import MobileComponent from "./signupComponents/MobileComponent";
import LicenseComponent from "./signupComponents/LicenseComponent";
import DepartmentComponent from "./signupComponents/DepartmentComponent";
import TermsComponent from "./signupComponents/TermsComponent";
import { useSelector } from "react-redux";
import { RestServer } from "common/js/Rest";

function SignUpMain() {
    // const codes = useSelector((state) => state.codes.codes);
    // const resultCodes = useSelector((state) => state.codes.resultCode);
    // const countryBank = useSelector((state) => state.codes.countryBank);

    // console.log(codes);
    // console.log(resultCodes);
    // console.log(countryBank);

    const navigate = useNavigate();

    const signupRefs = {
        accountType: useRef(null),
        inputID: useRef(null),
        inputPW: useRef(null),
        user_name_first_ko: useRef(null),
        user_name_last_ko: useRef(null),
        user_name_first_en: useRef(null),
        user_name_last_en: useRef(null),
        md_licenses_number: useRef(null),
        organization_name_ko: useRef(null),
        department_name_ko: useRef(null),
        specialized_name_ko: useRef(null),
        inter_phone_number: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
        termsChk: useRef(null),
        privacyChk: useRef(null),
        marketingChk: useRef(null),
        marketing_sms: useRef(null),
        marketing_mail: useRef(null),
        auth_code: useRef(null),
    };
    // const inputID = useRef(null);

    // 사용 가능한 아이디 확인
    const [chkId, setChkId] = useState(false);
    const [chkPw, setChkPw] = useState(false);
    const [chkMobile, setChkMobile] = useState(false);
    const certInfo = useSelector((state) => state.certInfo.certInfo);

    const certification_idx = localStorage.getItem("certification_idx");

    const sendSignupForm = () => {
        if (validation()) {
            // alert("통과");
            console.log(signupRefs);

            let birth_yyyy = certInfo.birth_date.slice(0, 4);
            let birth_mm = certInfo.birth_date.slice(4, 6);
            let birth_dd = certInfo.birth_date.slice(-2);
            let gender;
            let certification_tool;

            if (certInfo.gender === "1") {
                gender = "0";
            } else if (certInfo.gender === "0") {
                gender = "1";
            }

            if (certInfo.auth_type === "M") {
                certification_tool = "000";
            }

            let data = {
                user_id: signupRefs.inputID.current.value,
                user_pwd: signupRefs.inputPW.current.value,
                user_name_first_ko: signupRefs.user_name_first_ko.current.value,
                user_name_last_ko: signupRefs.user_name_last_ko.current.value,
                user_name_first_en: signupRefs.user_name_first_en.current.value,
                user_name_last_en: signupRefs.user_name_last_en.current.value,
                md_licenses_number: signupRefs.md_licenses_number.current.value,
                auth_code: certification_idx,
                inter_phone_number: signupRefs.inter_phone_number.current.value,
                mobile1: signupRefs.inputMobile1.current.value,
                mobile2: signupRefs.inputMobile2.current.value,
                mobile3: signupRefs.inputMobile3.current.value,
                signup_type: signupRefs.accountType.current.value,
                organization_name_ko:
                    signupRefs.organization_name_ko.current.value,
                specialized_name_ko:
                    signupRefs.specialized_name_ko.current.value,
                department_name_ko: signupRefs.department_name_ko.current.value,
                sms_yn: signupRefs.marketing_sms.current.checked ? "Y" : "N",
                email_yn: signupRefs.marketing_mail.current.checked ? "Y" : "N",
                certification_idx: certification_idx,
                birth_yyyy: birth_yyyy,
                birth_mm: birth_mm,
                birth_dd: birth_dd,
                gender: gender,
                user_ci: certInfo.ci,
                user_di: certInfo.di,
                certification_tool: certification_tool,
                certification_type: "000",
            };

            let url = apiPath.api_user;

            RestServer("post", url, data)
                .then((response) => {
                    // response
                    let res = response;
                    console.log(res);

                    navigate(routerPath.signup_ok_url);
                })
                .catch((error) => {
                    // 오류발생시 실행
                    console.log(error);
                    console.log(error.response.headers.result_message_ko);
                    alert(error.response.headers.result_message_ko);
                });
        }
        // console.log(signupRefs.inputID.current.value);
        // console.log(signupRefs.inputPW.current.value);
        // console.log(signupRefs.user_name_first_ko.current.value);

        // console.log(signupRefs.marketing_sms.current.checked);
        // console.log("chkId", chkId);
        // console.log("chkPw", chkPw);
    };

    // ref 여러개 전달
    // https://velog.io/@youngcheon/forwardRef%EC%97%90-%EC%97%AC%EB%9F%AC%EA%B0%9C%EC%9D%98-Ref-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0
    //     부모 컴포넌트
    // const refs = {
    //     localVideoRef: useRef(null),
    //     socketRef: useRef(null),
    //     pcRef: useRef(null),
    //     remoteVideoRef: useRef(null),
    //   };
    // 자식 컴포넌트
    // const Socket = forwardRef((props, ref) => {
    //   const { localVideoRef, socketRef, pcRef, remoteVideoRef } = ref;
    //   ...
    // };

    const idStatus = (status) => {
        setChkId(status);
    };
    const pwStatus = (status) => {
        setChkPw(status);
    };
    const mobileStatus = (status) => {
        setChkMobile(status);
    };

    const validation = () => {
        if (!chkId) {
            alert("아이디를 확인해주세요");
            signupRefs.inputID.current.focus();

            return false;
        }
        if (!chkPw) {
            alert("비밀번호를 확인해주세요");
            signupRefs.inputPW.current.focus();

            return false;
        }
        if (!chkMobile) {
            alert("휴대폰 인증을 완료해주세요");
            signupRefs.inputMobile2.current.focus();

            return false;
        }
        if (
            signupRefs.user_name_first_ko.current.value === "" ||
            signupRefs.user_name_last_ko.current.value === "" ||
            signupRefs.user_name_first_en.current.value === "" ||
            signupRefs.user_name_last_en.current.value === ""
        ) {
            alert("성명을 입력해주세요");
            signupRefs.user_name_first_ko.current.focus();

            return false;
        }
        if (
            signupRefs.user_name_first_ko.current.value +
                signupRefs.user_name_last_ko.current.value !==
            certInfo.name
        ) {
            alert("성명이 일치하지 않습니다.");
            signupRefs.user_name_first_ko.current.focus();

            return false;
        }
        if (
            !signupRefs.termsChk.current.checked ||
            !signupRefs.privacyChk.current.checked
        ) {
            alert("약관에 동의해주세요");
            signupRefs.termsChk.current.focus();

            return false;
        }
        return true;
    };

    return (
        <>
            <Header />
            <div id="con_area">
                <div className="form sign" id="sign_form">
                    <h3 className="title">회원가입</h3>
                    <div>
                        {/* 아이디 영역 */}
                        <IdComponent ref={signupRefs} idStatus={idStatus} />

                        {/* 패스워드 영역 */}
                        <PwComponent ref={signupRefs} pwStatus={pwStatus} />

                        <div className="flex">
                            {/* 성명 영역 */}
                            <NameComponent ref={signupRefs} />
                        </div>
                        <div className="flex end">
                            {/* 휴대폰 인증 영역 */}
                            <MobileComponent
                                ref={signupRefs}
                                mobileStatus={mobileStatus}
                            />
                        </div>
                        <div>
                            {/* 면허번호 영역 */}
                            <LicenseComponent ref={signupRefs} />
                        </div>
                        <div className="flex">
                            {/* 소속기관, 전공과, 전공분야 영역 */}
                            <DepartmentComponent ref={signupRefs} />
                        </div>
                        <div className="term_wrap">
                            {/* 약관 영역 */}
                            <TermsComponent ref={signupRefs} />
                            <div className="btn_box">
                                <Link
                                    className="mainbtn btn01"
                                    onClick={sendSignupForm}
                                >
                                    가입하기
                                </Link>
                                <Link to="/" className="mainbtn btn02">
                                    뒤로가기
                                </Link>
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
