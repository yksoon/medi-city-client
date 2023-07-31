import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { useDispatch, useSelector } from "react-redux";
import { RestServer } from "common/js/Rest";
import { set_cert_info } from "redux/actions/certAction";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

import IdComponent from "./signupComponents/IdComponent";
import PwComponent from "./signupComponents/PwComponent";
import NameComponent from "./signupComponents/NameComponent";
import MobileComponent from "./signupComponents/MobileComponent";
import LicenseComponent from "./signupComponents/LicenseComponent";
import DepartmentComponent from "./signupComponents/DepartmentComponent";
import TermsComponent from "./signupComponents/TermsComponent";
import { CommonConsole, CommonNotify, CommonSpinner } from "common/js/Common";
import { set_spinner } from "redux/actions/commonAction";
import useAlert from "hook/useAlert";

function SignUpMain() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { alert } = useAlert();

    const signupRefs = {
        accountType: useRef(null),
        inputId: useRef(null),
        inputPw: useRef(null),
        userNameFirstKo: useRef(null),
        userNameLastKo: useRef(null),
        userNameFirstEn: useRef(null),
        userNameLastEn: useRef(null),
        mdLicensesNumber: useRef(null),
        organizationNameKo: useRef(null),
        departmentNameKo: useRef(null),
        specializedNameKo: useRef(null),
        interPhoneNumber: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
        termsChk: useRef(null),
        privacyChk: useRef(null),
        marketingChk: useRef(null),
        marketingSms: useRef(null),
        marketingMail: useRef(null),
    };

    // 사용 가능한 아이디 확인
    const [chkId, setChkId] = useState(false);
    const [chkPw, setChkPw] = useState(false);
    const [chkMobile, setChkMobile] = useState(false);
    const [terms, setTerms] = useState("");
    const [privacy, setPrivacy] = useState("");
    const [marketing, setMarketing] = useState("");
    const certInfo = useSelector((state) => state.certInfo.certInfo);

    const certificationIdx = localStorage.getItem("certificationIdx");

    const sendSignupForm = () => {
        if (validation()) {
            dispatch(
                set_spinner({
                    isLoading: true,
                })
            );

            let birth_yyyy = certInfo.birth_date.slice(0, 4);
            let birth_mm = certInfo.birth_date.slice(4, 6);
            let birth_dd = certInfo.birth_date.slice(-2);
            let gender;
            let certificationTool;

            // nice = 0: 여자, 1: 남자
            if (certInfo.gender === "1") {
                gender = "0";
            } else if (certInfo.gender === "0") {
                gender = "1";
            }

            // auth_type
            // M	휴대폰인증
            // C	카드본인확인
            // X	공동인증서
            // F	금융인증서
            // S	PASS인증서

            // 인증 도구 = 000 : 휴대폰, 100 : 인증서, 200 : 이메일, 900 : 기타등등
            if (certInfo.auth_type === "M") {
                certificationTool = "000";
            } else if (
                certInfo.auth_type === "X" ||
                certInfo.auth_type === "F"
            ) {
                certificationTool = "100";
            } else if (
                certInfo.auth_type === "C" ||
                certInfo.auth_type === "S"
            ) {
                certificationTool = "900";
            }

            let mobileAgency;
            // 통신사
            switch (certInfo.mobileCo) {
                // SK Telecom
                case "1":
                    mobileAgency = "000";
                    break;

                // KT
                case "2":
                    mobileAgency = "100";
                    break;

                // LGU+
                case "3":
                    mobileAgency = "200";
                    break;

                // SK Telecom 알뜰폰
                case "5":
                    mobileAgency = "300";
                    break;

                // KT 알뜰폰
                case "6":
                    mobileAgency = "400";
                    break;

                // LGU+ 알뜰폰
                case "7":
                    mobileAgency = "500";
                    break;

                // 기타
                default:
                    mobileAgency = "900";
                    break;
            }

            let data = {
                userId: signupRefs.inputID.current.value,
                userPwd: signupRefs.inputPW.current.value,
                userNameFirstKo: signupRefs.userNameFirstKo.current.value,
                userNameLastKo: signupRefs.userNameLastKo.current.value,
                userNameFirstEn: signupRefs.userNameFirstEn.current.value,
                userNameLastEn: signupRefs.userNameLastEn.current.value,
                mdLicensesNumber: signupRefs.mdLicensesNumber.current.value,
                authCode: certificationIdx,
                interPhoneNumber: signupRefs.interPhoneNumber.current.value,
                mobile1: signupRefs.inputMobile1.current.value,
                mobile2: signupRefs.inputMobile2.current.value,
                mobile3: signupRefs.inputMobile3.current.value,
                signupType: signupRefs.accountType.current.value,
                organizationNameKo: signupRefs.organizationNameKo.current.value,
                specializedNameKo: signupRefs.specializedNameKo.current.value,
                departmentNameKo: signupRefs.departmentNameKo.current.value,
                smsYn: signupRefs.marketingSms.current.checked ? "Y" : "N",
                emailYn: signupRefs.marketingMail.current.checked ? "Y" : "N",
                certificationIdx: certificationIdx,
                birthYyyy: birth_yyyy,
                birthMm: birth_mm,
                birthDd: birth_dd,
                gender: gender,
                userCi: certInfo.ci,
                userDi: certInfo.di,
                certificationTool: certificationTool,
                certificationType: "000",
                termsIdx: termsIdxFunc(),
                mobileAgency: mobileAgency,
            };

            let url = apiPath.api_user;

            RestServer("post", url, data)
                .then((response) => {
                    // response

                    let resultcode = response.headers.resultcode;

                    if (resultcode === "0000") {
                        localStorage.removeItem("certificationIdx");
                        dispatch(set_cert_info(null));

                        // Spinner
                        dispatch(
                            set_spinner({
                                isLoading: false,
                            })
                        );

                        navigate(routerPath.signup_ok_url);
                    } else {
                        CommonConsole("log", response);

                        // alert
                        CommonNotify({
                            type: "alert",
                            hook: alert,
                            message: response.headers.resultmessageko,
                        });

                        // Spinner
                        dispatch(
                            set_spinner({
                                isLoading: false,
                            })
                        );
                    }
                })
                .catch((error) => {
                    // 오류발생시 실행
                    CommonConsole("log", error);
                    CommonConsole("decLog", error);
                    // CommonConsole("alertMsg", error);

                    // alert
                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "잠시 후에 다시 시도해주세요.",
                    });

                    // Spinner
                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );
                });
        }
    };

    const termsIdxFunc = () => {
        let termsIdx = String(terms) + String(privacy) + String(marketing);
        let arr = [...termsIdx];
        let terms_idx = arr.join();

        if (terms_idx.slice(-1) === ",") {
            terms_idx = terms_idx.slice(0, -1);
        }

        return terms_idx;
    };

    const idStatus = (status) => {
        setChkId(status);
    };
    const pwStatus = (status) => {
        setChkPw(status);
    };
    const mobileStatus = (status) => {
        setChkMobile(status);
    };

    const termChkMain = (status) => {
        setTerms(status);
    };
    const privacyChkMain = (status) => {
        setPrivacy(status);
    };
    const marketingChkMain = (status) => {
        setMarketing(status);
    };

    const validation = () => {
        if (!chkId) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "아이디를 확인해주세요",
            });

            signupRefs.inputID.current.focus();

            return false;
        }
        if (!chkPw) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "비밀번호를 확인해주세요",
            });

            signupRefs.inputPW.current.focus();

            return false;
        }
        if (
            signupRefs.userNameFirstKo.current.value === "" ||
            signupRefs.userNameLastKo.current.value === "" ||
            signupRefs.userNameFirstEn.current.value === "" ||
            signupRefs.userNameLastEn.current.value === ""
        ) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "성명을 입력해주세요",
            });

            signupRefs.userNameFirstKo.current.focus();

            return false;
        }
        if (!chkMobile) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "휴대폰 인증을 완료해주세요",
            });

            signupRefs.inputMobile2.current.focus();

            return false;
        }
        if (
            signupRefs.userNameFirstKo.current.value +
                signupRefs.userNameLastKo.current.value !==
            certInfo.name
        ) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "성명이 일치하지 않습니다",
            });

            signupRefs.userNameFirstKo.current.focus();

            return false;
        }
        if (
            !signupRefs.termsChk.current.checked ||
            !signupRefs.privacyChk.current.checked
        ) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "약관에 동의해주세요",
            });

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
                            <TermsComponent
                                ref={signupRefs}
                                termChkMain={termChkMain}
                                privacyChkMain={privacyChkMain}
                                marketingChkMain={marketingChkMain}
                                // props = {[termChk, privacyChk, marketingChk]}
                            />
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
