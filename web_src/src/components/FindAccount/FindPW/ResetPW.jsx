import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { pwPattern } from "common/js/Pattern";
import { CircularProgress } from "@mui/material";
import { RestServer } from "common/js/Rest";
import { apiPath } from "webPath";
import { CommonConsole } from "common/js/Common";

function ResetPW({ userID, changeIsFind }) {
    let user_id = userID;
    const [patternChk1, setPatternChk1] = useState(false);
    const [patternChk2, setPatternChk2] = useState(false);

    const [inputPW1, setInputPW1] = useState("");
    const [inputPW2, setInputPW2] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const spinner = useRef(null);

    // 1 : 비번 서로 X, 패턴 X
    // 2 : 비번 서로 X, 패턴 O
    // 3 : 비번 서로 O, 패턴 X
    // 4 : 비번 서로 O, 패턴 O
    const [pwChk, setPwChk] = useState("1");

    const inputPW = useRef();
    const inputPWChk = useRef();

    const [pwStatus, setPwStatus] = useState(false);

    // /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/
    const pwPatternCheck1 = (e) => {
        let pw = e.target.value;

        setPatternChk1(pwPattern.test(pw));
        setInputPW1(pw);
    };

    const pwPatternCheck2 = (e) => {
        let pw = e.target.value;

        setPatternChk2(pwPattern.test(pw));
        setInputPW2(pw);
    };

    const checkPw = () => {
        // CommonConsole("log", inputPW1);
        // CommonConsole("log", inputPW2);
        // if (inputPW1 === inputPW2) {
        if (inputPW.current.value === inputPWChk.current.value) {
            if (!patternChk1 || !patternChk2) {
                setPwChk("3");
                setPwStatus(false);
            } else {
                setPwChk("4");
                setPwStatus(true);
            }
        } else {
            if (!patternChk1 || !patternChk2) {
                setPwChk("1");
                setPwStatus(false);
            } else {
                setPwChk("2");
                setPwStatus(false);
            }
        }
    };

    const notice = (pwChk) => {
        switch (pwChk) {
            case "1":
                return (
                    <p className="mark" id="mark_pw">
                        비밀번호는 특수문자, 문자, 숫자 포함 형태의 6~16자리로
                        입력해주세요
                    </p>
                );
            case "2":
                return (
                    <p className="mark red" id="mark_pw">
                        비밀번호를 확인해주세요
                    </p>
                );
            case "3":
                return (
                    <p className="mark" id="mark_pw">
                        비밀번호는 특수문자, 문자, 숫자 포함 형태의 6~16자리로
                        입력해주세요
                    </p>
                );
            case "4":
                return (
                    <p className="mark green" id="mark_pw">
                        사용 가능한 비밀번호 입니다
                    </p>
                );
            default:
                return (
                    <p className="mark" id="mark_pw">
                        비밀번호는 특수문자, 문자, 숫자 포함 형태의 6~16자리로
                        입력해주세요
                    </p>
                );
        }
    };

    const changePW = () => {
        setIsLoading(true);

        CommonConsole("log", pwStatus);

        if (!pwStatus) {
            CommonConsole("alert", "비밀번호를 확인 해주세요");
            setIsLoading(false);
            return;
        } else {
            restChangePw();
        }
    };

    const restChangePw = () => {
        let url = apiPath.api_user_reset_pw;
        let data = {
            user_id: user_id,
            user_pwd: inputPW1,
        };

        RestServer("put", url, data)
            .then(function (response) {
                // response
                let res = response;
                let result_info = res.data.result_info;

                CommonConsole("log", response);

                if (res.headers.result_code === "0000") {
                    setIsLoading(false);
                    changeIsFind("3");
                } else {
                    let spnin = spinner.current.childNodes[0];
                    spnin.classList.add("error");
                    CommonConsole(
                        "alert",
                        "오류가 발생했습니다. 다시 시도해주세요."
                    );

                    // setIsLoading(false);
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                CommonConsole("log", error);

                let spnin = spinner.current.childNodes[0];
                spnin.classList.add("error");

                CommonConsole(
                    "alert",
                    "오류가 발생했습니다. 다시 시도해주세요."
                );
                // setIsLoading(false);
            });
    };

    return (
        <div id="con_area">
            <div className="form sign" id="sign_form">
                <h3 className="title">비밀번호 재설정</h3>
                <div className="find pwfind">
                    <div className="flex">
                        <div>
                            <h5>새로운 비밀번호</h5>
                            <div>
                                <input
                                    type="password"
                                    className="input w370"
                                    onKeyUp={(e) => {
                                        pwPatternCheck1(e);
                                        checkPw();
                                    }}
                                    ref={inputPW}
                                    // onBlur={checkPw}
                                />
                            </div>
                        </div>
                        <div>
                            <h5>새로운 비밀번호 확인</h5>
                            <div>
                                <input
                                    type="password"
                                    className="input w370"
                                    onKeyUp={(e) => {
                                        pwPatternCheck2(e);
                                        checkPw();
                                    }}
                                    ref={inputPWChk}
                                    // onBlur={checkPw}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <p className="mark pw_find_mark" id="mark_pw">
                            비밀번호는 특수문자, 문자, 숫자 포함 형태의
                            6~16자리로 입력해주세요
                        </p> */}
                        {notice(pwChk)}
                    </div>
                </div>
            </div>
            <div className="btn_box">
                <Link className="mainbtn btn01" onClick={changePW}>
                    확인
                </Link>
            </div>
            {isLoading && (
                <div className="spinner" ref={spinner}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
}

export default ResetPW;
