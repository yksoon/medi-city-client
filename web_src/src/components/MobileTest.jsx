import { RestServer } from "common/js/Rest";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_cert_info } from "redux/actions/certAction";
import { apiPath } from "webPath";

let popup;

const MobileTest = () => {
    const form_url = useRef(null);
    const enc_data = useRef(null);
    const integrity_value = useRef(null);
    const m = useRef(null);
    const token_version_id = useRef(null);

    //컴포넌트는 useState 훅을 사용하여 min, sec 두 개의 상태 변수 정의
    const [sec, setSec] = useState(300);
    const timerId = useRef(null); // 간격 타이머의 Id 저장
    const [timerStatus, setTimerStatus] = useState(false);

    // 타이머 시작
    // - 의존성 배열이 비어있으므로 한 번만 실행됨
    // - setInterval 1초마다 실행
    // - 나중에 사용하기 위해 timerId.current ref에 저장되는 Id를 반환
    // - 간격 함수 내에서 남은 시간을 분과 초를 반환하여 min,sec 상태 변수 업데이트
    useEffect(() => {
        if (timerStatus) {
            timerId.current = setInterval(() => {
                setSec((sec) => sec - 5);

                chkCert();
            }, 5000);

            return () => clearInterval(timerId.current); // 컴포넌트가 마운트 해제될 때 간격을 지우기 위해 clearInterval 함수 반환
        } else {
            clearInterval(timerId.current);
        }
    }, [timerStatus]);

    // 시간이 0에 도달했을 때 확인
    // sec 상태 변수가 변경될 때마다 실행
    useEffect(() => {
        console.log(sec);
        if (sec <= 0) {
            console.log("time out");
            clearInterval(timerId.current); // 간격지우고 콘솔에 메시지 기록

            stopTimer();

            alert("시간초과. 인증을 다시 진행해주세요.");
        }
    }, [sec]);

    // setInterval()를 멈추기 위한 clearInterval() 호출
    const stopTimer = () => {
        setSec(0);
        setTimerStatus(false);
    };

    // 타이머 재시작
    const restartTimer = () => {
        setSec(300);
        setTimerStatus(true);
    };

    const confirmAuth = () => {
        if (window.confirm("인증번호를 발송하시겠습니까?")) {
            setTimerStatus(true);
            sendAuth();
        } else {
            return;
        }
    };

    const sendAuth = () => {
        const url =
            "http://dev-api.medi-city.co.kr:60000/account/v1/user/_cert";

        let data = {
            certification_tool: "000",
            certification_type: "000",
        };

        RestServer("post", url, data)
            .then((response) => {
                // console.log("authTest", response);

                let resData = response.data.result_info;

                localStorage.setItem(
                    "certification_idx",
                    resData.certification_idx
                );

                insertFormData(resData);
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
            });
    };

    const insertFormData = (resData) => {
        console.log(resData);

        token_version_id.current.value = resData.token_version_id;
        enc_data.current.value = resData.enc_data;
        integrity_value.current.value = resData.integrity_value;
        m.current.value = resData.m;

        sendForm(resData.form_url);
    };

    const sendForm = (form_url) => {
        let form = document.getElementById("form");

        // 5초마다 타이머 시작
        setTimerStatus(true);

        popup = window.open(
            "",
            "auth",
            "width=200,height=200,resizeable,scrollbars"
        );

        console.log("popup", popup);

        form.action = form_url;
        form.mothod = "POST";
        form.target = "auth";

        form.submit();
    };

    // 인증번호 확인
    const chkCert = () => {
        const certification_idx = localStorage.getItem("certification_idx");
        const url = apiPath.api_user_cert_result + `/${certification_idx}`;

        if (certification_idx) {
            RestServer("get", url, {})
                .then((response) => {
                    // console.log("authTest", response);

                    // let resData = response.data.result_info;
                    alert("오나전 성공일까?");

                    console.log("ok======>", response);
                })
                .catch((error) => {
                    // 오류발생시 실행
                    console.log(error);
                });
        }
    };

    return (
        <>
            <div
                style={{
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <form name="form" id="form" ref={form_url}>
                    <input type="hidden" id="m" name="m" value="" ref={m} />
                    <input
                        type="hidden"
                        id="token_version_id"
                        name="token_version_id"
                        value=""
                        ref={token_version_id}
                    />
                    <input
                        type="hidden"
                        id="enc_data"
                        name="enc_data"
                        ref={enc_data}
                    />
                    <input
                        type="hidden"
                        id="integrity_value"
                        name="integrity_value"
                        ref={integrity_value}
                    />
                </form>

                <button onClick={confirmAuth}>인증번호 발송</button>
            </div>
        </>
    );
};

export default MobileTest;
