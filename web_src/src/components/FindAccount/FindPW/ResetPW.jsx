import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { pwPattern } from "common/js/Pattern";
import { CircularProgress } from "@mui/material";
import { RestServer } from "common/js/Rest";
import { apiPath } from "webPath";

function ResetPW({ userID, changeIsFind }) {
    let user_id = userID;
    const [password, setPassword] = useState("");
    const [passwordChk, setPasswordChk] = useState("");
    const [patternChk, setPatternChk] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (ref, e) => {
        switch (ref) {
            case "pwd":
                setPassword(e.currentTarget.value);
                setPatternChk(pwPattern.test(e.currentTarget.value));
                break;

            case "pwdChk":
                setPasswordChk(e.currentTarget.value);
                break;

            default:
                break;
        }
    };

    const changePW = () => {
        setIsLoading(true);

        if (!patternChk) {
            alert("비밀번호는 6-16자리로 입력해주세요");
            setIsLoading(false);
            return;
        } else {
            setIsLoading(false);
            if (password === passwordChk) {
                // todo 비번 변경 로직

                restChangePw();
            } else {
                alert("비밀번호를 확인해주세요.");
            }
        }
    };

    const restChangePw = () => {
        let url = apiPath.api_user_reset_pw;
        let data = {
            user_id: user_id,
            user_pwd: password,
        };

        RestServer("put", url, data)
            .then(function (response) {
                // response
                let res = response.data.result_info;

                console.log(res);

                if (res) {
                    setIsLoading(false);
                    changeIsFind("3");
                } else {
                    console.log(res);
                    alert("오류가 발생했습니다. 다시 시도해주세요.");
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(decodeURI(error));
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
    };

    return (
        <div id="con_area">
            <div className="form sign" id="sign_form">
                <h3 className="title">비밀번호 재설정</h3>
                <div className="find pwfind">
                    <div>
                        <h5>새로운 비밀번호</h5>
                        <div>
                            <input
                                type="password"
                                className="input w460"
                                onChange={(e) => handleInput("pwd", e)}
                            />
                        </div>
                    </div>
                    <div>
                        <h5>새로운 비밀번호 확인</h5>
                        <div>
                            <input
                                type="password"
                                className="input w460"
                                onChange={(e) => handleInput("pwdChk", e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn_box">
                {isLoading ? (
                    <Link className="mainbtn btn01">
                        <CircularProgress color="inherit" />
                    </Link>
                ) : (
                    <Link className="mainbtn btn01" onClick={changePW}>
                        확인
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ResetPW;
