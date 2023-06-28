import React, { useState, useEffect, forwardRef } from "react";
import { apiPath } from "webPath";
import { Instance } from "common/js/Instance";
import { RestServer } from "common/js/Rest";

// const user_chk_url = apiPath.api_user_check;

const IdComponent = forwardRef((props, ref) => {
    // const accountType = useRef();
    // const inputID = useRef();

    const { accountType, inputID } = ref;
    const idStatus = props.idStatus;

    // 0000 = 성공
    // 9997 = 중복
    // 400 = 형식 안맞음
    const [idchkCode, setIdchkCode] = useState("0");

    useEffect(() => {
        if (inputID.current) {
            // 할당한 DOM 요소가 불러지면 (마운트 되면)
            inputID.current.focus(); // focus 할당!
        }
    });

    const idDuplicateCheck = (e) => {
        // console.log(inputID.current.value);

        // console.log(accountType.current.value);

        // Instance.post(user_chk_url, {
        //     user_type: `${accountType.current.value}`,
        //     user_id: `${inputID.current.value}`,
        // })
        //     .then(function (response) {
        //         // response
        //         let res = response;
        //         // console.log(ret);
        //         // console.log(ret.response);

        //         if (res.headers.result_code === "0000") {
        //             setIdchkCode("0000");
        //             idStatus(true);
        //         } else {
        //             setIdchkCode("9997");
        //             idStatus(false);
        //         }
        //     })
        //     .catch(function (error) {
        //         // 오류발생시 실행
        //         console.log(error);
        //         setIdchkCode("400");
        //         idStatus(false);
        //     });

        const user_chk_url = apiPath.api_user_check;
        let data = {
            user_type: `${accountType.current.value}`,
            user_id: `${inputID.current.value}`,
        };

        let res = RestServer("post", user_chk_url, data);

        console.log(res);
        // RestServer("post", user_chk_url, data)
    };

    return (
        <>
            <h5>
                아이디 <span className="red">*</span>
            </h5>
            <div className="flex">
                <div>
                    <input type="hidden" ref={accountType} value="000" />
                    <input
                        type="email"
                        className="input w600"
                        onKeyUp={idDuplicateCheck}
                        ref={inputID}
                    />
                </div>
                {idchkCode === "0000" ? (
                    <p className="mark green" id="mark_id">
                        사용 가능한 아이디 입니다
                    </p>
                ) : idchkCode === "400" ? (
                    <p className="mark red" id="mark_id">
                        아이디는 이메일 형식으로 입력하세요
                    </p>
                ) : idchkCode === "9997" ? (
                    <p className="mark red" id="mark_id">
                        이미 사용중인 아이디입니다
                    </p>
                ) : (
                    <p className="mark red" id="mark_id">
                        아이디는 이메일 형식으로 입력하세요
                    </p>
                )}
            </div>
        </>
    );
});

export default IdComponent;
