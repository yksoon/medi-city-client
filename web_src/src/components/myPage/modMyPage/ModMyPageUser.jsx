import React, { useEffect } from "react";
import useAlert from "hook/useAlert";
import useConfirm from "hook/useConfirm";
import { useRecoilValue } from "recoil";
import { isModUserAtom } from "recoils/atoms";
import { useNavigate } from "react-router";
import Footer from "components/common/Footer";
import IdComponent from "./modMyPageUserComponents/IdComponent";
import Header from "components/common/Header";
import { CommonErrModule } from "common/js/Common";

const ModMyPageUser = () => {
    const { alert } = useAlert();
    const { confirm } = useConfirm();
    const err = CommonErrModule();

    const isModUser = useRecoilValue(isModUserAtom);

    const navigate = useNavigate();

    const refs = {

    }
    useEffect(() => {
        // 비밀번호 인증 안했을경우 다시 페이지 이동
        // if (!isModUser) {
        //     navigate(routerPath.mod_mypage);
        // }
    }, []);

    return (
        <>
            <Header />

            <div id="con_area">
                <div className="form sign" id="sign_form">
                    <h3 className="title">회원정보수정</h3>
                    <div>
                        {/*아이디*/}
                        <IdComponent />

                        <div className="flex">
                            <div>
                                <h5>비밀번호</h5>
                                <input type="password" className="input w370" />
                            </div>
                            <div>
                                <h5>비밀번호 확인</h5>
                                <input type="password" className="input w370" />
                            </div>
                            <div>
                                <h5>&nbsp;</h5>
                                <p className="mark" id="mark_pw">
                                    비밀번호는 4-10자리로 입력해주세요
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <div className="flex mb15">
                                    <h5 className="m0">성명 (국문)</h5>
                                    <div
                                        id="phone_check_after_btn"
                                        style={{ display: "block" }}
                                    >
                                        <a
                                            href="javascript:void(0);"
                                            className="font-12"
                                            onClick=""
                                        >
                                            이름을 변경할까요?
                                        </a>
                                    </div>
                                </div>
                                <input
                                    type="name"
                                    className="input w180 hold"
                                    placeholder="성"
                                    value="홍"
                                    readOnly
                                />
                                <input
                                    type="name"
                                    className="input w180 hold"
                                    placeholder="이름"
                                    value="길동"
                                    readOnly
                                />
                            </div>
                            <div>
                                <h5>성명 (영문)</h5>
                                <input
                                    type="name"
                                    className="input w180"
                                    placeholder="First name"
                                />
                                <input
                                    type="name"
                                    className="input w180"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                        <div className="end">
                            <div>
                                <div className="flex mb15">
                                    <h5 className="m0">휴대전화</h5>
                                    <div
                                        id="phone_check_after_btn"
                                        style={{ display: "block" }}
                                    >
                                        <a
                                            href="javascript:void(0);"
                                            className="font-12"
                                            onClick=""
                                        >
                                            휴대폰번호가 변경되셨나요?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="phone_num" className="m0">
                                    <input
                                        type="tel"
                                        className="input w100 hold"
                                        id="phone_num0"
                                        value="+82"
                                        readOnly
                                    />
                                    <input
                                        type="tel"
                                        className="input w100 hold"
                                        id="phone_num1"
                                        value="010"
                                        readOnly
                                    />
                                    <input
                                        type="tel"
                                        className="input w120 hold"
                                        id="phone_num2"
                                        value="1111"
                                        readOnly
                                    />
                                    <input
                                        type="tel"
                                        className="input w120 hold"
                                        id="phone_num3"
                                        value="2222"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>면허번호</h5>
                            <input
                                type="text"
                                className="input w370 hold"
                                value="0000000"
                                readOnly
                            />
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
