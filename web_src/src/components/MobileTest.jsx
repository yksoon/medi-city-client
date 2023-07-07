import { RestServer } from "common/js/Rest";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_cert_info } from "redux/actions/certAction";

let certInfo2;
let popup;

const MobileTest = ({ isOpenHandler, isOpen }) => {
    const form_url = useRef(null);
    const enc_data = useRef(null);
    const integrity_value = useRef(null);
    const m = useRef(null);
    const token_version_id = useRef(null);
    const [isInter, setIsInter] = useState(false);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!isOpen) {
    //         dispatch(set_cert_info(null));
    //     }
    // }, []);

    certInfo2 = useSelector((state) => state.certInfo.certInfo);

    const confirmAuth = () => {
        if (window.confirm("인증번호를 발송하시겠습니까?")) {
            sendAuth();
        } else {
            return;
        }
    };

    useEffect(() => {
        if (isInter) {
            setInterval(() => {
                console.log(certInfo2);
            }, 500);

            return () => clearInterval(); // 컴포넌트가 마운트 해제될 때 간격을 지우기 위해 clearInterval 함수 반환
        }
    }, [isInter]);

    const sendAuth = () => {
        setIsInter(true);
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

        popup = window.open(
            "",
            "auth",
            "width=200,height=200,resizeable,scrollbars"
        );

        isOpenHandler(true);
        console.log("popup", popup);

        form.action = form_url;
        form.mothod = "POST";
        form.target = "auth";

        form.submit();
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

                <input
                    type="text"
                    id="oh_test"
                    name="oh_test"
                    value={certInfo2}
                />

                <button onClick={confirmAuth}>인증번호 발송</button>
                {console.log(certInfo2)}
            </div>
        </>
    );
};

export default MobileTest;
