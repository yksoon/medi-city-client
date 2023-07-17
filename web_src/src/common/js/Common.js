import { React, useEffect, useRef } from "react";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

// Alert (props)
// isOpen = state 상태값
// title = 제목
// content = 내용
// btn = 확인버튼
// closeModal = 닫기 (state를 변경할 수 있는 handler)
const CommonModal = ({ isOpen, title, content, btn, handleModalClose }) => {
    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal_wrap" id="modal_wrap">
                    <div className="modal w1000" id="modal">
                        <div className="modal_close" onClick={handleModalClose}>
                            <img src="/img/common/modal_close.png" alt="" />
                        </div>
                        <div className="term" id="term">
                            <h3 className="title">{title}</h3>
                            <div className="linebox bd50">{content}</div>
                        </div>
                        {/* <div className="btn_box">
                            <Link
                                className="mainbtn btn01"
                                onClick={handleModalClose}
                            >
                                확인
                            </Link>
                        </div> */}
                    </div>
                </div>
            </Modal>
        </>
    );
};

const CommonAlert = (props) => {
    let option = props.option;

    let isAlertOpen = option.isAlertOpen;
    let title = option.alertTitle;
    let content = option.alertContent;

    const handleAlertClose = props.handleAlertClose;

    return (
        <>
            <Modal
                open={isAlertOpen}
                onClose={handleAlertClose}
                // onClose={handleAlert(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal_wrap block">
                    <div className="modal noti_modal ">
                        <div>
                            <span className="noti_icon">
                                <img src="img/common/alert.png" alt="" />
                            </span>
                            <h3>
                                {title
                                    ? decodeURI(title).replace("%20", " ")
                                    : ""}
                            </h3>
                            <p>
                                {content
                                    ? decodeURI(content).replace("%20", " ")
                                    : ""}
                            </p>
                        </div>
                        <div className="btn_box">
                            <Link
                                className="backbtn"
                                onClick={handleAlertClose}
                            >
                                확인{" "}
                                <span>
                                    <img src="img/common/arrow.png" alt="" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

// 디버깅용 콘솔
const CommonConsole = (type, responseData) => {
    let response;

    let result_message_ko;
    let result_message_en;
    let result_code;
    let message;

    if (!responseData.response) {
        response = responseData;
    } else {
        response = responseData.response;
    }

    if (response.headers) {
        result_message_ko = response.headers.result_message_ko;
        result_message_en = response.headers.result_message_en;
        result_code = response.headers.result_code;
        message = response.headers.message;
    } else {
        response = responseData;
    }

    switch (type) {
        case "log":
            return console.log(responseData);

        case "decLog":
            return console.log(
                decodeURI(result_message_ko),
                decodeURI(result_message_en),
                decodeURI(result_code),
                decodeURI(message)
            );

        case "alertMsg":
            return alert(decodeURI(result_message_ko).replace("%20", " "));

        case "alert":
            return alert(responseData);

        default:
            break;
    }
};

// 스피너
const CommonSpinner = (props) => {
    const spinner = useRef();

    console.log(props);
    const isLoading = props.option.isLoading;
    const alertMsg = props.option.alert ? props.option.alert : "";
    const error = props.option.error ? props.option.error : "";

    useEffect(() => {
        if (error === "Y") {
            if (!alertMsg) {
                let spnin = spinner.current.childNodes[0];
                spnin.classList.add("error");
            } else {
                alert(decodeURI(alertMsg).replace("%20", " "));
            }
        }
    }, [props]);

    return (
        <>
            {isLoading && (
                <div className="spinner" ref={spinner}>
                    <CircularProgress />
                </div>
            )}
        </>
    );
};

export { CommonModal, CommonConsole, CommonSpinner, CommonAlert };
