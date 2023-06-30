import React, { useState, useRef, forwardRef } from "react";
import { pwPattern } from "common/js/Pattern";

const PwComponent = forwardRef((props, ref) => {
    const [pwChk, setPwChk] = useState("normal");
    const [patternChk, setPatternChk] = useState(false);

    const { inputPW } = ref;
    const inputPWChk = useRef();

    const pwStatus = props.pwStatus;

    // /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/
    const pwPatternCheck = (e) => {
        let pw = e.target.value;

        setPatternChk(pwPattern.test(pw));
        // console.log(pwPattern.test(pw));
    };

    const chkPW = () => {
        if (inputPW.current.value !== inputPWChk.current.value) {
            setPwChk("notSame");
            pwStatus(false);
        } else {
            if (patternChk) {
                setPwChk("same");
                pwStatus(true);
            } else {
                pwStatus(false);
            }
        }

        if (inputPW.current.value === "") {
            setPwChk("normal");
            pwStatus(false);
        }
    };
    return (
        <>
            <div className="flex">
                <div>
                    <h5>
                        비밀번호 <span className="red">*</span>
                    </h5>
                    <input
                        type="password"
                        className="input w370"
                        onKeyUp={(e) => pwPatternCheck(e)}
                        ref={inputPW}
                    />
                </div>
                <div>
                    <h5>
                        비밀번호 확인 <span className="red">*</span>
                    </h5>
                    <input
                        type="password"
                        className="input w370"
                        ref={inputPWChk}
                        onBlur={chkPW}
                    />
                </div>
                <div>
                    <h5>&nbsp;</h5>
                    {pwChk === "normal" ? (
                        !patternChk ? (
                            <p className="mark red" id="mark_pw">
                                비밀번호는 6-16자리로 입력해주세요
                            </p>
                        ) : (
                            <></>
                        )
                    ) : pwChk === "notSame" ? (
                        <p className="mark red" id="mark_pw">
                            비밀번호가 일치하지 않습니다
                        </p>
                    ) : pwChk === "same" ? (
                        <p className="mark green" id="mark_pw">
                            비밀번호가 일치합니다
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
});

export default PwComponent;
