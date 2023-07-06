import { RestServer } from "common/js/Rest";
import React, { useRef } from "react";

const MobileTest = () => {
    const form_url = useRef(null);
    const enc_data = useRef(null);
    const integrity_value = useRef(null);
    const m = useRef(null);
    const token_version_id = useRef(null);

    const confirmAuth = () => {
        if (window.confirm("인증번호를 발송하시겠습니까?")) {
            sendAuth();
        } else {
            return;
        }
    };

    const sendAuth = () => {
        const url =
            "http://dev-api.medi-city.co.kr:60000/account/v1/user/_cert";

        let data = {
            inter_phone_number: "82",
            mobile1: "010",
            mobile2: "5090",
            mobile3: "7526",
            certification_tool: "000",
            certification_type: "000",
        };

        RestServer("post", url, data)
            .then((response) => {
                // console.log("authTest", response);

                let resData = response.data.result_info;

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

        window.open("", "auth", "width=200,height=200,resizeable,scrollbars");

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
                <button onClick={confirmAuth}>인증번호 발송</button>
            </div>
        </>
    );
};

export default MobileTest;
