import { CommonAlert } from "common/js/Common";
import React, { useState, forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { termsContent, privacyContent } from "common/js/terms";

const TermsComponent = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState([]);

    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [sms, setSms] = useState(false);
    const [mail, setMail] = useState(false);

    const {
        termsChk,
        privacyChk,
        marketingChk,
        marketing_sms,
        marketing_mail,
    } = ref;
    // const chkRef = useRef([]);

    useEffect(() => {
        //
    }, []);

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setModalTitle("");
        setModalContent([]);
    };

    const termsOpen = () => {
        setModalTitle("이용약관");
        setModalContent(termsContent);
        handleModalOpen();
    };

    const privacyOpen = () => {
        setModalTitle("개인정보처리방침");
        setModalContent(privacyContent);
        handleModalOpen();
    };

    const marketingOpen = () => {
        setModalTitle("마케팅 수신 동의");
        setModalContent(termsContent);
        handleModalOpen();
    };

    const handleChk = (e) => {
        switch (e.target.id) {
            case "agree_term":
                setTerms(e.target.checked);
                break;

            case "agree_privacy":
                setPrivacy(e.target.checked);
                break;

            case "agree_marketing":
                setMarketing(e.target.checked);
                setSms(e.target.checked);
                setMail(e.target.checked);
                break;

            case "marketing_sms":
                setMarketing(e.target.checked);
                setSms(e.target.checked);
                break;

            case "marketing_mail":
                setMarketing(e.target.checked);
                setMail(e.target.checked);
                break;

            case "agree_all":
                if (e.target.checked) {
                    setTerms(true);
                    setPrivacy(true);
                    setMarketing(true);
                    setSms(true);
                    setMail(true);
                } else {
                    setTerms(false);
                    setPrivacy(false);
                    setMarketing(false);
                    setSms(false);
                    setMail(false);
                }

                break;

            default:
                break;
        }
    };

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
                <input
                    type="checkbox"
                    id="agree_all"
                    className="hide"
                    onChange={(e) => handleChk(e)}
                />
                <label htmlFor="agree_all" className="checkbox">
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
                        <Link
                            className="font-12"
                            onClick={(e) => {
                                termsOpen();
                            }}
                        >
                            전문보기
                        </Link>
                    </h6>
                    <input
                        type="checkbox"
                        id="agree_term"
                        className="hide"
                        ref={termsChk}
                        checked={terms}
                        onChange={(e) => handleChk(e)}
                    />
                    <label htmlFor="agree_term" className="checkbox">
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
                        <Link
                            className="font-12"
                            onClick={(e) => {
                                privacyOpen();
                            }}
                        >
                            전문보기
                        </Link>
                    </h6>
                    <input
                        type="checkbox"
                        id="agree_privacy"
                        className="hide"
                        ref={privacyChk}
                        checked={privacy}
                        onChange={(e) => handleChk(e)}
                    />
                    <label htmlFor="agree_privacy" className="checkbox">
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
                            <Link
                                className="font-12"
                                onClick={(e) => {
                                    marketingOpen();
                                }}
                            >
                                전문보기
                            </Link>
                        </h6>
                        <div className="flex marketing">
                            <div>
                                <input
                                    type="checkbox"
                                    id="marketing_sms"
                                    className="hide"
                                    checked={sms}
                                    ref={marketing_sms}
                                    onChange={(e) => handleChk(e)}
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
                                    checked={mail}
                                    ref={marketing_mail}
                                    onChange={(e) => handleChk(e)}
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
                            {/* <div>
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
                            </div> */}
                        </div>
                    </div>
                    <input
                        type="checkbox"
                        id="agree_marketing"
                        className="hide"
                        ref={marketingChk}
                        checked={marketing}
                        onChange={(e) => handleChk(e)}
                    />
                    <label htmlFor="agree_marketing" className="checkbox">
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
            <CommonAlert
                isOpen={isOpen}
                handleModalClose={handleModalClose}
                content={modalContent}
                title={modalTitle}
            />
        </>
    );
});

export default TermsComponent;
