import { RestServer } from "common/js/Rest";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import ResetPW from "./ResetPW";
import ResetPWComplete from "./ResetPWComplete";

function FindPWMain() {
    const [isFind, setIsFind] = useState("1");
    const [userID, setUserID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [certificationTool, setCertificationTool] = useState("000");
    const [certificationType, setCertificationType] = useState("200");
    const [interPhoneNumber, setInterPhoneNumber] = useState("82");
    const [mobile1, setMobile1] = useState("");
    const [mobile2, setMobile2] = useState("");
    const [mobile3, setMobile3] = useState("");

    const [certNumIdxFromServer, setCertNumIdxFromServer] = useState("");
    const [inputCertNum, setInputCertNum] = useState("");

    // 1 : 인증번호 발송 전
    // 2 : 인증번호 발송 후
    // 3 : 인증 완료
    const [certBtnStatus, setCertBtnStatus] = useState("1");

    const [resetPWStatus, setResetPWStatus] = useState(false);

    //컴포넌트는 useState 훅을 사용하여 min, sec 두 개의 상태 변수 정의
    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const time = useRef(180); // useRef hook time 변수 생성, 초 단위로 5분
    const timerId = useRef(null); // 간격 타이머의 Id 저장
    const timerSpan = useRef(null);
    const [timerStatus, setTimerStatus] = useState(false);

    const inputUserID = useRef(null);
    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);
    const inputMobile1 = useRef(null);
    const inputMobile2 = useRef(null);
    const inputMobile3 = useRef(null);

    const certSection = useRef(null);
    const cert_num = useRef(null);
    const certBtn = useRef(null);

    let certToolList = [];
    let countryList = [];

    useEffect(() => {
        // let codes = JSON.parse(localStorage.getItem("codes"));
        // codes.map((item) => {
        //     if (item.code_type === "CERTIFICATION_TOOL") {
        //         certToolList.push(item);
        //         console.log(certToolList);
        //     }
        // });
        // let codesCountryBank = JSON.parse(
        //     localStorage.getItem("codesCountryBank")
        // );
        // codesCountryBank.map((item) => {
        //     if (item.code_type === "COUNTRY_TYPE") {
        //         countryList.push(item);
        //         console.log(countryList);
        //     }
        // });
    }, []);

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
            certSection.current.style = "display: none";
            setCertBtnStatus("1");
            stopTimer();

            alert("시간초과. 인증번호를 다시 발송해주세요.");
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

    const handleInput = (ref, e) => {
        let mobile1 = /^[0-9]{1,3}$/;
        let mobile2 = /^[0-9]{1,4}$/;
        let mobile3 = /^[0-9]{1,4}$/;

        switch (ref) {
            case "userID":
                // console.log(e.currentTarget.value);
                setUserID(e.currentTarget.value);
                break;

            case "firstName":
                // console.log(e.currentTarget.value);
                setFirstName(e.currentTarget.value);
                break;

            case "lastName":
                // console.log(e.currentTarget.value);
                setLastName(e.currentTarget.value);
                break;
            case "mobile1":
                // console.log(e.currentTarget.value);
                if (!mobile1.test(e.currentTarget.value)) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                }
                if (e.currentTarget.value.length >= 3) {
                    inputMobile2.current.focus();
                }
                setMobile1(e.currentTarget.value);
                break;
            case "mobile2":
                // console.log(e.currentTarget.value);
                if (!mobile2.test(e.currentTarget.value)) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                }
                if (e.currentTarget.value.length >= 4) {
                    inputMobile3.current.focus();
                }
                setMobile2(e.currentTarget.value);
                break;
            case "mobile3":
                // console.log(e.currentTarget.value);
                if (!mobile3.test(e.currentTarget.value)) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                }
                setMobile3(e.currentTarget.value);
                break;

            case "certNum":
                setInputCertNum(e.currentTarget.value);
                break;

            default:
                break;
        }
    };

    // 인증번호 발송
    const sendCert = () => {
        if (!userID) {
            alert("아이디를 입력해주세요");
            inputUserID.current.focus();
            return;
        } else if (!firstName || !lastName) {
            alert("성명을 입력해주세요");
            inputFirstName.current.focus();
            return;
        } else if (!mobile1 || !mobile2 || !mobile3) {
            // handleModalOpen("알림", "전화번호를 입력 해주세요");
            alert("전화번호를 입력해주세요");
            inputMobile1.current.focus();
            return;
        } else {
            // console.log("asdas");
            restMkCert();
        }
    };

    // 인증번호 발송 통신
    const restMkCert = () => {
        let mk_cert_url = apiPath.api_user_find_pw;
        let data = {
            inter_phone_number: interPhoneNumber,
            mobile1: mobile1,
            mobile2: mobile2,
            mobile3: mobile3,
            certification_tool: certificationTool,
            certification_type: certificationType,
            user_id: userID,
            user_name_first_ko: firstName,
            user_name_last_ko: lastName,
        };

        console.log(data);
        RestServer("post", mk_cert_url, data)
            .then(function (response) {
                // response
                let res = response;
                let msg = "인증번호를 발송 하였습니다";

                // 인증 idx
                setCertNumIdxFromServer(
                    String(res.data.result_info.certification_idx)
                );

                // 인증번호 타이머 3분 시작
                // setTimerStatus(true);
                restartTimer();

                setCertBtnStatus("2");
                certSection.current.style = "display: flex";
                alert(msg);
                console.log(res);
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
    };

    // 인증번호 확인
    const chkCert = () => {
        let certInputValue = inputCertNum;

        if (!certInputValue) {
            alert("인증번호를 입력해주세요");
            cert_num.current.focus();
        } else {
            socketChkCert();
        }
    };

    // 인증번호 확인 통신
    const socketChkCert = () => {
        let api_user_cert_chk = apiPath.api_user_cert_chk;

        let data = {
            certification_idx: certNumIdxFromServer,
            auth_code: inputCertNum,
            certification_tool: certificationTool,
            certification_type: certificationType,
        };

        RestServer("put", api_user_cert_chk, data)
            .then(function (response) {
                // response
                let res = response.data.result_info;

                console.log(res);

                if (res) {
                    document.getElementById("cert_num").classList.add("hold");
                    document.getElementById("cert_num").readOnly = true;

                    // 인증 완료후 상태 변경
                    // mobileStatus(true);

                    // 타이머 종료
                    stopTimer(false);

                    setCertBtnStatus("3");
                    setResetPWStatus(true);
                    alert("인증 완료되었습니다");

                    setIsFind("2");
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

    // const resetPw = () => {
    //     if (!resetPWStatus) {
    //         alert("휴대폰 인증을 완료해주세요");
    //     } else {
    //         // console.log("aaaaa");
    //         setIsFind("2");
    //     }
    // };

    const changeIsFind = (status) => {
        setIsFind(status);
    };

    return (
        <>
            <Header />

            {isFind === "1" ? (
                <div id="con_area">
                    <div className="form sign" id="sign_form">
                        <h3 className="title">비밀번호 찾기</h3>
                        <div className="find pwfind">
                            <div>
                                <h5>아이디</h5>
                                <div>
                                    <input
                                        type="email"
                                        className="input w460"
                                        onChange={(e) =>
                                            handleInput("userID", e)
                                        }
                                        ref={inputUserID}
                                    />
                                </div>
                            </div>
                            <div>
                                <h5>성명</h5>
                                <input
                                    type="name"
                                    className="input w230"
                                    placeholder="성"
                                    onChange={(e) =>
                                        handleInput("firstName", e)
                                    }
                                    ref={inputFirstName}
                                />
                                <input
                                    type="name"
                                    className="input w230"
                                    placeholder="이름"
                                    onChange={(e) => handleInput("lastName", e)}
                                    ref={inputLastName}
                                />
                            </div>
                            <div>
                                <h5>휴대전화</h5>
                                <div
                                    className="flex"
                                    style={{ justifyContent: "flex-start" }}
                                >
                                    {/* <select
                                name=""
                                id="phone"
                                className="w100 mr10"
                            >
                                <option value="">+82</option>
                            </select> */}
                                    <div id="phone_num" className="m0">
                                        <input
                                            type="tel"
                                            className="input w120"
                                            id="phone_num1"
                                            ref={inputMobile1}
                                            onChange={(e) =>
                                                handleInput("mobile1", e)
                                            }
                                        />
                                        <input
                                            type="tel"
                                            className="input w140"
                                            id="phone_num2"
                                            ref={inputMobile2}
                                            onChange={(e) =>
                                                handleInput("mobile2", e)
                                            }
                                        />
                                        <input
                                            type="tel"
                                            className="input w180"
                                            id="phone_num3"
                                            ref={inputMobile3}
                                            onChange={(e) =>
                                                handleInput("mobile3", e)
                                            }
                                        />
                                    </div>
                                </div>
                                <div
                                    id="phone_check_before"
                                    style={{
                                        marginTop: "10px",
                                        justifyContent: "space-between",
                                        display: "flex",
                                        marginRight: "10px",
                                    }}
                                >
                                    <div
                                        style={{ display: "none" }}
                                        ref={certSection}
                                    >
                                        <input
                                            type="tel"
                                            className="input w180"
                                            id="cert_num"
                                            onChange={(e) =>
                                                handleInput("certNum", e)
                                            }
                                            placeholder="인증번호"
                                            ref={cert_num}
                                        />
                                        <div
                                            style={{
                                                marginLeft: "10px",
                                                display: "flex",
                                                alignItems: "end",
                                            }}
                                        >
                                            <h5>
                                                <span
                                                    id="mobileCount"
                                                    ref={timerSpan}
                                                >{`${"0" + String(min)} : ${
                                                    String(sec).length === 2
                                                        ? String(sec)
                                                        : "0" + String(sec)
                                                }`}</span>
                                            </h5>
                                        </div>
                                    </div>
                                    {certBtnStatus === "1" ? (
                                        <Link
                                            className="subbtn on m0"
                                            ref={certBtn}
                                            onClick={sendCert}
                                        >
                                            인증번호 발송
                                        </Link>
                                    ) : certBtnStatus === "2" ? (
                                        <Link
                                            className="subbtn on m0"
                                            ref={certBtn}
                                            onClick={chkCert}
                                        >
                                            인증 확인
                                        </Link>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_box">
                        {/* <Link className="mainbtn btn01" onClick={resetPw}>
                            비밀번호 찾기
                        </Link> */}
                        <Link
                            to={routerPath.main_url}
                            className="mainbtn btn02"
                        >
                            뒤로가기
                        </Link>
                    </div>
                </div>
            ) : isFind === "2" ? (
                <ResetPW userID={userID} changeIsFind={changeIsFind} />
            ) : isFind === "3" ? (
                <ResetPWComplete />
            ) : (
                <></>
            )}

            <Footer />
        </>
    );
}

export default FindPWMain;
