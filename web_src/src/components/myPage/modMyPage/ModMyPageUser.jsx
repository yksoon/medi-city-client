import React, { useEffect, useRef, useState } from "react";
import useAlert from "hook/useAlert";
import useConfirm from "hook/useConfirm";
import { useRecoilValue } from "recoil";
import { isModUserAtom, userInfoAtom, userTokenAtom } from "recoils/atoms";
import { useNavigate } from "react-router";
import Footer from "components/common/Footer";
import IDComponent from "src/components/myPage/modMyPage/modMyPageUserComponents/IDComponent";
import Header from "components/common/Header";
import { CommonErrModule } from "common/js/Common";
import PWComponent from "components/myPage/modMyPage/modMyPageUserComponents/PWComponent";
import NameComponent from "components/myPage/modMyPage/modMyPageUserComponents/NameComponent";
import { routerPath } from "webPath";
import MobileComponent from "components/myPage/modMyPage/modMyPageUserComponents/MobileComponent";
import DepartmentLicenseComponent from "components/myPage/modMyPage/modMyPageUserComponents/DepartmentLicenseComponent";

const ModMyPageUser = () => {
    const { alert } = useAlert();
    const { confirm } = useConfirm();
    const err = CommonErrModule();

    const isModUser = useRecoilValue(isModUserAtom);
    const userInfo = useRecoilValue(userInfoAtom);
    const userToken = useRecoilValue(userTokenAtom);

    const navigate = useNavigate();

    const refs = {
        userId: useRef(null),
        userPwd: useRef(null),
        userPwdCheck: useRef(null),
        userNameFirstKo: useRef(null),
        userNameLastKo: useRef(null),
        userNameFirstEn: useRef(null),
        userNameLastEn: useRef(null),
        interPhoneNumber: useRef(null),
        mobile1: useRef(null),
        mobile2: useRef(null),
        mobile3: useRef(null),
    };

    const [chkPw, setChkPw] = useState(false);

    useEffect(() => {
        // 비밀번호 인증 안했을경우 다시 페이지 이동
        if (!isModUser && !userToken) {
            navigate(routerPath.mod_mypage);
        }
    }, []);

    // 비밀번호 상태 확인
    const pwStatus = (status) => {
        setChkPw(status);
    };

    return (
        <>
            <Header />

            <div id="con_area">
                <div className="form sign" id="sign_form">
                    <h3 className="title">회원정보수정</h3>
                    <div>
                        {/*아이디*/}
                        <IDComponent userInfo={userInfo} ref={refs} />

                        <PWComponent
                            userInfo={userInfo}
                            ref={refs}
                            pwStatus={pwStatus}
                        />

                        <NameComponent userInfo={userInfo} ref={refs} />

                        <MobileComponent userInfo={userInfo} ref={refs} />

                        <DepartmentLicenseComponent
                            userInfo={userInfo}
                            ref={refs}
                        />

                        <div className="term_wrap">
                            <div className="flex between">
                                <div>
                                    <div className="flex">
                                        <h6>
                                            마케팅 수신 동의 (선택){" "}
                                            <a
                                                href="javascript:void(0);"
                                                className="font-12"
                                                onClick="modal_on();"
                                            >
                                                전문보기
                                            </a>
                                        </h6>
                                        {/*<input type="checkbox" id="agree_marketing" class="hide">*/}
                                        {/*<label for="agree_marketing" class="checkbox">*/}
                                        {/*    <svg width="9.772" height="7.181" viewBox="0 0 9.772 7.181" fill="#bdbdbd">*/}
                                        {/*        <path d="M0,6.181a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414L4.474-.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L.707,5.888A1,1,0,0,1,0,6.181Z" transform="translate(3.591 1)"/>*/}
                                        {/*        <path d="M2.591,3.591A1,1,0,0,1,1.883,3.3L-.707.707a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.3,1.883a1,1,0,0,1-.707,1.707Z" transform="translate(1 3.591)" />*/}
                                        {/*    </svg>*/}
                                        {/*</label>*/}
                                    </div>
                                    <div className="flex marketing">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="marketing_sms"
                                                className="hide"
                                            />
                                            <label htmlFor="marketing_sms">
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
                                            <label htmlFor="marketing_mail">
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
                                            <label htmlFor="marketing_web">
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
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <div className="flex mb15">*/}
                        {/*        <h5 className="m0">프로필사진</h5>*/}
                        {/*        <div*/}
                        {/*            id="phone_check_after_btn"*/}
                        {/*            style={{ display: "block" }}*/}
                        {/*        >*/}
                        {/*            <a*/}
                        {/*                href="javascript:void(0);"*/}
                        {/*                className="font-12"*/}
                        {/*                onClick=""*/}
                        {/*            >*/}
                        {/*                변경*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="flex change_profile_wrap">*/}
                        {/*        <div*/}
                        {/*            id="change_profile_select"*/}
                        {/*            className="change_profile_thumb"*/}
                        {/*        >*/}
                        {/*            <img*/}
                        {/*                src="img/common/profile01.png"*/}
                        {/*                alt=""*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <div*/}
                        {/*                className="flex imglist"*/}
                        {/*                id="change_profile_img"*/}
                        {/*            >*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile13.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile14.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile02.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile03.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile04.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile05.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile06.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile07.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile08.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile09.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile10.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile11.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                    src="img/common/profile12.png"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <input type="text" className="input" />*/}
                        {/*                <label*/}
                        {/*                    htmlFor="file_btn"*/}
                        {/*                    className="file_btn"*/}
                        {/*                >*/}
                        {/*                    파일찾기*/}
                        {/*                </label>*/}
                        {/*                <input*/}
                        {/*                    type="file"*/}
                        {/*                    className="file"*/}
                        {/*                    id="file_btn"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="btn_box">
                        <a
                            href="mypage_modify_step3.html"
                            className="mainbtn btn01"
                        >
                            수정하기
                        </a>
                        <a href="index.html" className="mainbtn btn02">
                            뒤로가기
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ModMyPageUser;
