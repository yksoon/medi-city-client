import React, { useRef, forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Instance } from "common/js/Instance";
import { RestServer } from "common/js/Rest";
import { CommonAlert } from "common/js/Common";
import { apiPath } from "webPath";

// 인증 idx
let certNumIdxFromServer;

const MobileComponent = forwardRef((props, ref) => {
    const {
        inputMobile1,
        inputMobile2,
        inputMobile3,
        inter_phone_number,
        auth_code,
    } = ref;
    // const certInput = useRef();

    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState([]);

    const changeCertIdx = props.changeCertIdx;

    //컴포넌트는 useState 훅을 사용하여 min, sec 두 개의 상태 변수 정의
    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const time = useRef(180); // useRef hook time 변수 생성, 초 단위로 5분
    const timerId = useRef(null); // 간격 타이머의 Id 저장
    const timerSpan = useRef(null);
    const [timerStatus, setTimerStatus] = useState(false);

    const mobileStatus = props.mobileStatus;

    // 타이머 시작
    // - 의존성 배열이 비어있으므로 한 번만 실행됨
    // - setInterval 1초마다 실행
    // - 나중에 사용하기 위해 timerId.current ref에 저장되는 Id를 반환
    // - 간격 함수 내에서 남은 시간을 분과 초를 반환하여 min,sec 상태 변수 업데이트
    useEffect(() => {
        if (timerStatus) {
            timerId.current = setInterval(() => {
                setMin(parseInt(time.current / 60));
                setSec(time.current % 60);
                time.current -= 1; // 남은 시간을 추적하기 위해 1씩 감소
            }, 1000);

            return () => clearInterval(timerId.current); // 컴포넌트가 마운트 해제될 때 간격을 지우기 위해 clearInterval 함수 반환
        } else {
            clearInterval(timerId.current);
        }
    }, [timerStatus]);

    // 시간이 0에 도달했을 때 확인
    // sec 상태 변수가 변경될 때마다 실행
    useEffect(() => {
        if (time.current <= 0) {
            console.log("time out");
            clearInterval(timerId.current); // 간격지우고 콘솔에 메시지 기록

            // 타임 아웃을 처리하기 위해 이벤트를 dispatch
            stopTimer();
        }
    }, [sec]);

    // setInterval()를 멈추기 위한 clearInterval() 호출
    const stopTimer = () => {
        setMin(0);
        setSec(0);
        timerSpan.current.style.setProperty("display", "none");
        // clearInterval(timerId.current);
        setTimerStatus(false);
    };

    // 타이머 재시작
    const restartTimer = () => {
        setMin(3);
        setSec(0);
        time.current = 180;
        // clearInterval(timerId.current);
        setTimerStatus(true);
    };

    const handleModalOpen = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setModalTitle("");
        setModalContent([]);
    };

    // 04. 휴대폰 인증
    function phoneCheck(checkNum) {
        // let before_msg = "인증번호를 ";
        // let div_msg = "";
        // let after_msg = " 하였습니다.";
        // let last_msg = "";
        // let clickAction = true;

        switch (checkNum) {
            case 1:
                // 인증번호 발송
                sendCert();
                break;
            case 2:
                // 인증 확인
                chkCert();
                break;
            case 3:
                // 재발송
                sendCert();
                break;

            case 4:
                // 번호 재입력
                stopTimer();
                phoneAction(false, "hold");
                phoneDisplay("phone_check_before", "block");
                phoneDisplay("phone_check_after", "none");
                phoneDisplay("phone_check_after_btn", "none");
                phoneMark("휴대폰 인증을 진행해주세요", null, "green");
                break;

            default:
                break;
        }

        // last_msg = before_msg + div_msg + after_msg;
        // if (checkNum != 4 && clickAction) {
        //     alert(last_msg);
        // }
    }

    function phoneAction(readOnlyYn, cssName) {
        let phone_num = "phone_num";
        let phone_num_name = "";
        // let result = true;
        for (let i = 1; i <= 3; i++) {
            phone_num_name = phone_num + i;
            document.getElementById(phone_num_name).readOnly = readOnlyYn;
            if (readOnlyYn) {
                document.getElementById(phone_num_name).classList.add(cssName);
            } else {
                document
                    .getElementById(phone_num_name)
                    .classList.remove(cssName);
            }
        }
    }

    function phoneDisplay(idName, displayType) {
        document.getElementById(idName).style.display = displayType;
    }

    function phoneMark(innterTextChange, addClass, removeClass) {
        document.getElementById("mark_tel").innerText = innterTextChange;

        if (addClass != null) {
            document.getElementById("mark_tel").classList.add(addClass);
        }

        if (removeClass != null) {
            document.getElementById("mark_tel").classList.remove(removeClass);
        }
    }

    // 휴대전화 숫자만
    const onlyNum = (e) => {
        // 패턴
        let mobile1 = /^[0-9]{1,3}$/;
        let mobile2 = /^[0-9]{1,4}$/;
        let mobile3 = /^[0-9]{1,4}$/;

        if (e.target === inputMobile1.current) {
            if (!mobile1.test(e.target.value)) {
                e.target.value = e.target.value.slice(0, -1);
            }
            // 다음칸으로 이동
            if (e.target.value.length >= 3) {
                inputMobile2.current.focus();
            }
        }
        if (e.target === inputMobile2.current) {
            if (!mobile2.test(e.target.value)) {
                e.target.value = e.target.value.slice(0, -1);
            }
            if (e.target.value.length >= 4) {
                inputMobile3.current.focus();
            }
        }
        if (e.target === inputMobile3.current) {
            if (!mobile3.test(e.target.value)) {
                e.target.value = e.target.value.slice(0, -1);
            }
        }
    };

    // 인증번호 발송
    const sendCert = () => {
        if (
            !inputMobile1.current.value ||
            !inputMobile2.current.value ||
            !inputMobile3.current.value
        ) {
            handleModalOpen("알림", "전화번호를 입력해주세요");
            // alert("전화번호를 입력 해주세요");
            inputMobile2.current.focus();
            return;
        } else {
            socketMkCert(
                inter_phone_number.current.value, //TODO : 추후 공통 코드로 받을것.
                inputMobile1.current.value,
                inputMobile2.current.value,
                inputMobile3.current.value
            );
        }
    };

    // 인증번호 발송 통신
    const socketMkCert = (inter_phone_number, mobile1, mobile2, mobile3) => {
        let mk_cert_url = apiPath.api_user_cert;

        let data = {
            inter_phone_number: inter_phone_number,
            mobile1: mobile1,
            mobile2: mobile2,
            mobile3: mobile3,
        };
        RestServer("post", mk_cert_url, data)
            .then(function (response) {
                // response
                let res = response;

                let msg = "인증번호를 발송 하였습니다";
                alert(msg);

                // 인증 idx
                certNumIdxFromServer = String(
                    res.data.result_info.certification_idx
                );

                changeCertIdx(res.data.result_info.certification_idx);
                // console.log(res.response);

                phoneDisplay("phone_check_before", "none");
                phoneDisplay("phone_check_after", "block");
                phoneDisplay("phone_check_after_btn", "block");
                phoneAction(true, "hold");
                phoneMark("인증번호를 입력해주세요", "red", null);

                // 인증번호 타이머 3분 시작
                // setTimerStatus(true);
                restartTimer();
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
    };

    // 인증번호 확인
    const chkCert = () => {
        let certInputValue = auth_code.current.value;

        if (!certInputValue) {
            alert("인증번호를 입력해주세요");
            auth_code.current.focus();
        } else {
            socketChkCert(certNumIdxFromServer, certInputValue);
        }
    };

    // 인증번호 확인 통신
    const socketChkCert = (certNumIdxFromServer, certInputValue) => {
        let api_user_cert_chk = apiPath.api_user_cert_chk;

        let data = {
            certification_idx: certNumIdxFromServer,
            auth_code: certInputValue,
            certification_tool: "000",
            certification_type: "000",
        };

        RestServer("put", api_user_cert_chk, data)
            .then(function (response) {
                // response
                let res = response.data.result_info;

                console.log(res);

                if (res) {
                    document.getElementById("phoneCheck").classList.add("hold");
                    document
                        .getElementById("phoneCheck")
                        .removeAttribute("onclick");
                    document
                        .getElementById("phone_d_num")
                        .classList.add("hold");
                    document.getElementById("phone_d_num").readOnly = true;
                    phoneMark("인증이 완료되었습니다.", "green", "red");

                    // 인증 완료후 상태 변경
                    mobileStatus(true);

                    // 타이머 종료
                    stopTimer(false);

                    phoneDisplay("phone_check_after_btn", "none");
                } else {
                    alert("인증번호를 확인 해주세요");
                }
                // console.log(ret.response);
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
    };

    return (
        <>
            <div>
                <div className="flex mb15">
                    <h5 className="m0">
                        휴대전화 <span className="red">*</span>
                    </h5>
                    <div id="phone_check_after_btn">
                        <Link
                            className="font-12 mr10 ml10"
                            onClick={(e) => {
                                phoneCheck(3);
                            }}
                        >
                            인증번호가 오지 않았나요?
                        </Link>
                        <Link
                            className="font-12"
                            onClick={(e) => {
                                phoneCheck(4);
                            }}
                        >
                            휴대전화 재입력
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <div id="phone_num" className="m0">
                        <input
                            type="hidden"
                            ref={inter_phone_number}
                            value="82"
                        />
                        <input
                            type="tel"
                            className="input w120 hold"
                            id="phone_num1"
                            ref={inputMobile1}
                            onKeyUp={(e) => {
                                onlyNum(e);
                            }}
                            value="010"
                            readOnly
                        />
                        <input
                            type="tel"
                            className="input w140"
                            id="phone_num2"
                            ref={inputMobile2}
                            onKeyUp={(e) => {
                                onlyNum(e);
                            }}
                        />
                        <input
                            type="tel"
                            className="input w140"
                            id="phone_num3"
                            ref={inputMobile3}
                            onKeyUp={(e) => {
                                onlyNum(e);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div id="phone_check_before">
                <Link
                    className="subbtn on m0"
                    onClick={(e) => {
                        phoneCheck(1);
                    }}
                >
                    인증 번호
                </Link>
            </div>
            <div id="phone_check_after">
                <h5>
                    인증번호 <span className="red">*</span>
                    <span id="mobileCount" ref={timerSpan}>{`${
                        "0" + String(min)
                    } : ${
                        String(sec).length === 2
                            ? String(sec)
                            : "0" + String(sec)
                    }`}</span>
                </h5>

                <div className="flex">
                    <input
                        type="text"
                        className="input w180"
                        id="phone_d_num"
                        ref={auth_code}
                    />
                    <Link
                        className="subbtn on"
                        id="phoneCheck"
                        onClick={(e) => {
                            phoneCheck(2);
                        }}
                    >
                        인증 확인
                    </Link>
                </div>
            </div>
            <p className="mark" id="mark_tel">
                휴대폰 인증을 진행해주세요.
            </p>
            <CommonAlert
                isOpen={isOpen}
                handleModalClose={handleModalClose}
                btn={true}
                content={modalContent}
                title={modalTitle}
            />
        </>
    );
});

export default MobileComponent;
