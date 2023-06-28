import React, { useState, useRef, forwardRef } from "react";

const PwComponent = forwardRef((props, ref) => {
    const [pwChk, setPwChk] = useState("normal");

    const { inputPW } = ref;
    const inputPWChk = useRef();

    const pwStatus = props.pwStatus;

    const chkPW = () => {
        if (inputPW.current.value !== inputPWChk.current.value) {
            setPwChk("notSame");
            pwStatus(false);
        } else {
            setPwChk("same");
            pwStatus(true);
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
                        <p className="mark" id="mark_pw">
                            비밀번호는 4-16자리로 입력해주세요
                        </p>
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
