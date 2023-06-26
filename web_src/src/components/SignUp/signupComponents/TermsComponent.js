import React from "react";

function TermsComponent() {
    return (
        <>
            <div className="term_top flex start between">
                <div className="flex start ">
                    <h5>
                        약관에 동의하겠습니까? <span className="red">*</span>
                    </h5>
                    <p className="mark red" id="mark_tel">
                        이용약관을 확인해주세요
                    </p>
                </div>
                <input type="checkbox" id="agree_all" className="hide" />
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
                    <input type="checkbox" id="agree_term" className="hide" />
                    <label for="agree_term" className="checkbox">
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
                    <label for="agree_privacy" className="checkbox">
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
                            <a href="privacy.html" className="font-12">
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
                    <label for="agree_marketing" className="checkbox">
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
        </>
    );
}

export default TermsComponent;
