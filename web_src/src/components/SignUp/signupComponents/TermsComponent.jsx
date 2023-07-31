import { CommonModal, CommonConsole, CommonNotify } from "common/js/Common";
import React, { useState, forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { RestServer } from "common/js/Rest";
import { apiPath } from "webPath";
import { useDispatch } from "react-redux";
import { set_spinner } from "redux/actions/commonAction";
import useAlert from "hook/useAlert";

const TermsComponent = forwardRef((props, ref) => {
    const termChkMain = props.termChkMain;
    const privacyChkMain = props.privacyChkMain;
    const marketingChkMain = props.marketingChkMain;

    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState([]);

    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [sms, setSms] = useState(false);
    const [mail, setMail] = useState(false);

    const [isTermsOpened, setIsTermsOpened] = useState(false);
    const [isPrivacyOpened, setIsPrivacyOpened] = useState(false);

    const [termItem, setTermItem] = useState({});
    const [privacyItem, setPrivacyItem] = useState({});
    const [marketingItem, setMarketingItem] = useState({});

    const dispatch = useDispatch();
    const { alert } = useAlert();

    // let termItem = {};
    // let privacyItem = {};
    // let marketingItem = {};

    const { termsChk, privacyChk, marketingChk, marketingSms, marketingMail } =
        ref;
    // const chkRef = useRef([]);

    useEffect(() => {
        initTerms();
    }, []);

    const initTerms = () => {
        // setIsLoading(true);
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        const url = apiPath.api_terms_list;
        const data = {
            pageNum: 1,
            pageSize: 3,
        };
        RestServer("post", url, data)
            .then((response) => {
                // CommonConsole("log", response);

                let termsContent = [];

                if (response.headers.resultcode === "0000") {
                    termsContent = [...response.data.resultInfo];

                    for (let i = 0; i < termsContent.length; i++) {
                        let typeCd = termsContent[i].termsTypeCd;
                        let title = termsContent[i].termsType;
                        let content = termsContent[i].conditions;
                        let termsIdx = termsContent[i].termsIdx;

                        switch (typeCd) {
                            case "100":
                                let arr1 = {};
                                arr1["title"] = title;
                                arr1["content"] = content;
                                arr1["termsIdx"] = termsIdx;
                                setTermItem(arr1);
                                break;

                            case "000":
                                let arr2 = {};
                                arr2["title"] = title;
                                arr2["content"] = content;
                                arr2["termsIdx"] = termsIdx;
                                setPrivacyItem(arr2);
                                break;

                            case "400":
                                let arr3 = {};
                                arr3["title"] = termsContent[i].termsType;
                                arr3["content"] = content;
                                arr3["termsIdx"] = termsIdx;
                                setMarketingItem(arr3);
                                break;

                            default:
                                break;
                        }
                    }
                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );
                } else {
                    dispatch(
                        set_spinner({
                            isLoading: true,
                            error: "Y",
                        })
                    );

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "잠시 후 다시 시도해주세요",
                    });
                }
            })
            .catch((error) => {
                // 오류발생시 실행

                CommonConsole("log", error);
                CommonConsole("decLog", error);
                // CommonConsole("alertMsg", error);

                dispatch(
                    set_spinner({
                        isLoading: true,
                        error: "Y",
                    })
                );

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: "잠시 후 다시 시도해주세요",
                });
            });
    };

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setModalTitle("");
        setModalContent([]);
    };

    const termsOpen = () => {
        // setModalTitle("이용약관");
        // setModalContent(termsContent);
        setIsTermsOpened(true);
        if (termItem) {
            setModalTitle(termItem.title);
            setModalContent(termItem.content);
            handleModalOpen();
        }
    };

    const privacyOpen = () => {
        // setModalTitle("개인정보처리방침");
        // setModalContent(privacyContent);

        setIsPrivacyOpened(true);
        if (privacyItem) {
            setModalTitle(privacyItem.title);
            setModalContent(privacyItem.content);
            handleModalOpen();
        }
    };

    const marketingOpen = () => {
        // setModalTitle("마케팅 수신 동의");
        // setModalContent(termsContent);
        if (marketingItem) {
            setModalTitle(marketingItem.title);
            setModalContent(marketingItem.content);
            handleModalOpen();
        }
    };

    const handleChk = (e) => {
        switch (e.target.id) {
            case "agree_term":
                if (!isTermsOpened) {
                    CommonConsole("alert", "이용약관을 확인해주세요");
                    return false;
                } else {
                    setTerms(e.target.checked);
                    if (e.target.checked) {
                        termChkMain(termItem.termsIdx);
                    } else {
                        termChkMain("");
                    }
                }
                break;

            case "agree_privacy":
                if (!isPrivacyOpened) {
                    CommonConsole("alert", "개인정보처리방침을 확인해주세요");
                    return false;
                } else {
                    setPrivacy(e.target.checked);
                    if (e.target.checked) {
                        privacyChkMain(privacyItem.termsIdx);
                    } else {
                        privacyChkMain("");
                    }
                }
                break;

            case "agree_marketing":
                setMarketing(e.target.checked);
                setSms(e.target.checked);
                setMail(e.target.checked);
                if (e.target.checked) {
                    marketingChkMain(marketingItem.termsIdx);
                } else {
                    marketingChkMain("");
                }
                break;

            case "marketing_sms":
                setMarketing(e.target.checked);
                setSms(e.target.checked);
                if (!e.target.checked) {
                    if (!mail) {
                        marketingChkMain("");
                    } else {
                        marketingChkMain(marketingItem.termsIdx);
                    }
                } else {
                    marketingChkMain(marketingItem.termsIdx);
                }
                break;

            case "marketing_mail":
                setMarketing(e.target.checked);
                setMail(e.target.checked);
                if (!e.target.checked) {
                    if (!sms) {
                        marketingChkMain("");
                    } else {
                        marketingChkMain(marketingItem.termsIdx);
                    }
                } else {
                    marketingChkMain(marketingItem.termsIdx);
                }
                break;

            case "agree_all":
                if (!isTermsOpened || !isPrivacyOpened) {
                    CommonConsole(
                        "alert",
                        "이용약관, 개인정보처리방침을 확인해주세요"
                    );
                    e.target.checked = false;
                    return false;
                } else {
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
                                    ref={marketingSms}
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
                                    ref={marketingMail}
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
            <CommonModal
                isOpen={isOpen}
                handleModalClose={handleModalClose}
                content={modalContent}
                title={modalTitle}
            />
        </>
    );
});

export default TermsComponent;
