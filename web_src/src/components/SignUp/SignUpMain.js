import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { apiPath, routerPath } from "webPath";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

import IdComponent from "./signupComponents/IdComponent";
import PwComponent from "./signupComponents/PwComponent";
import NameComponent from "./signupComponents/NameComponent";
import MobileComponent from "./signupComponents/MobileComponent";
import LicenseComponent from "./signupComponents/LicenseComponent";
import DepartmentComponent from "./signupComponents/DepartmentComponent";
import TermsComponent from "./signupComponents/TermsComponent";

function SignUpMain() {
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
    };
    // const inputID = useRef(null);

    const sendSignupForm = () => {
        console.log(signupRefs.inputID.current.value);
        console.log(signupRefs.inputPW.current.value);
        console.log(signupRefs.user_name_first_ko.current.value);
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
    return (
        <>
            <Header />
            <div id="con_area">
                <div className="form sign" id="sign_form">
                    <h3 className="title">회원가입</h3>
                    <div>
                        {/* 아이디 영역 */}
                        <IdComponent ref={signupRefs} />

                        {/* 패스워드 영역 */}
                        <PwComponent ref={signupRefs} />

                        <div className="flex">
                            {/* 성명 영역 */}
                            <NameComponent ref={signupRefs} />
                        </div>
                        <div className="flex end">
                            {/* 휴대폰 인증 영역 */}
                            <MobileComponent ref={signupRefs} />
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
                            <TermsComponent />
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
