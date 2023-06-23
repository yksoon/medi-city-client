import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function MobileComponent() {
    const inputMobile1 = useRef();
    const inputMobile2 = useRef();
    const inputMobile3 = useRef();

    // 04. 휴대폰 인증
    function phoneCheck(checkNum) {
        let before_msg = "인증번호를 ";
        let div_msg = "";
        let after_msg = " 하였습니다.";
        let last_msg = "";
        let clickAction = true;

        switch (checkNum) {
            case 1:
                if (
                    !inputMobile1.current.value ||
                    !inputMobile2.current.value ||
                    !inputMobile3.current.value
                ) {
                    alert("전화번호를 입력 해주세요");
                    break;
                } else {
                    div_msg = "발송";
                    phoneDisplay("phone_check_before", "none");
                    phoneDisplay("phone_check_after", "block");
                    phoneDisplay("phone_check_after_btn", "block");
                    phoneAction(true, "hold");
                    phoneMark("인증번호를 입력해주세요", "red", null);

                    last_msg = before_msg + div_msg + after_msg;
                    if (checkNum !== 4 && clickAction) {
                        alert(last_msg);
                    }
                    break;
                }

            case 2:
                div_msg = "확인";
                document.getElementById("phoneCheck").classList.add("hold");
                document
                    .getElementById("phoneCheck")
                    .removeAttribute("onclick");
                document.getElementById("phone_d_num").classList.add("hold");
                document.getElementById("phone_d_num").readOnly = true;
                phoneMark("인증이 완료되었습니다.", "green", "red");
                break;

            case 3:
                div_msg = "재발송";
                break;

            case 4:
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
        let result = true;
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

    const onlyNum = (e) => {
        let check = /[^0-9]/g;
        console.log(check.test(e.target.value));
        console.log(e.target.value.length);
        if (check.test(e.target.value) && e.target.value.length >= 1) {
            e.target.value = "";
        }
        if (e.target === inputMobile1.current) {
            if (e.target.value.length >= 4) {
                e.target.value = e.target.value.slice(0, -1);
            }
        } else if (
            e.target === inputMobile2.current ||
            e.target === inputMobile3.current
        ) {
            if (e.target.value.length >= 5) {
                e.target.value = e.target.value.slice(0, -1);
            }
        }
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
                            type="tel"
                            className="input w120"
                            ref={inputMobile1}
                            onKeyUp={(e) => {
                                onlyNum(e);
                            }}
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
                </h5>
                <div className="flex">
                    <input
                        type="text"
                        className="input w180"
                        id="phone_d_num"
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
        </>
    );
}

export default MobileComponent;
