import React, { useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import Instance from "common/js/Instance";
import { apiPath } from "webPath";

const MobileComponent = forwardRef((props, ref) => {
    const { inputMobile1, inputMobile2, inputMobile3, inter_phone_number } =
        ref;
    // const inputMobile1 = useRef();
    // const inputMobile2 = useRef();
    // const inputMobile3 = useRef();
    const certInput = useRef();

    // 인증 idx
    let certNumIdxFromServer;

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
            alert("전화번호를 입력 해주세요");
            inputMobile1.current.focus();
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

        Instance.post(mk_cert_url, {
            inter_phone_number: inter_phone_number,
            mobile1: mobile1,
            mobile2: mobile2,
            mobile3: mobile3,
        })
            .then(function (response) {
                // response
                let res = response;

                let msg = "인증번호를 발송 하였습니다";
                alert(msg);

                // 인증 idx
                certNumIdxFromServer = res.data.result_info.certification_idx;
                console.log(res);
                // console.log(res.response);

                phoneDisplay("phone_check_before", "none");
                phoneDisplay("phone_check_after", "block");
                phoneDisplay("phone_check_after_btn", "block");
                phoneAction(true, "hold");
                phoneMark("인증번호를 입력해주세요", "red", null);
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
    };

    // 인증번호 확인
    const chkCert = () => {
        let certInputValue = certInput.current.value;

        if (!certInputValue) {
            alert("인증번호를 입력해주세요");
            certInput.current.focus();
        } else {
            socketChkCert(certNumIdxFromServer, certInputValue);
        }
    };

    // 인증번호 확인 통신
    const socketChkCert = (certNumIdxFromServer, certInputValue) => {
        let api_user_cert_chk = apiPath.api_user_cert_chk;

        Instance.put(api_user_cert_chk, {
            certification_idx: certNumIdxFromServer,
            auth_code: certInputValue,
        })
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
                            className="input w120"
                            id="phone_num1"
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
                        ref={certInput}
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
});

export default MobileComponent;
