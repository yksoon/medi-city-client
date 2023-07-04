import { RestServer } from "common/js/Rest";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { CircularProgress } from "@mui/material";

let resultCode;
function FindIDMain() {
    const [finded, setFinded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile1, setMobile1] = useState("");
    const [mobile2, setMobile2] = useState("");
    const [mobile3, setMobile3] = useState("");
    const [findList, setFindList] = useState([]);

    const inputMobile1 = useRef(null);
    const inputMobile2 = useRef(null);
    const inputMobile3 = useRef(null);

    useEffect(() => {
        setFinded(false);
        resultCode = JSON.parse(localStorage.getItem("result_code"));
    }, []);

    const handleInput = (ref, e) => {
        let mobile1 = /^[0-9]{1,3}$/;
        let mobile2 = /^[0-9]{1,4}$/;
        let mobile3 = /^[0-9]{1,4}$/;

        switch (ref) {
            case "firstName":
                // console.log(e.currentTarget.value);
                setFirstName(e.currentTarget.value);
                break;

            case "lastName":
                // console.log(e.currentTarget.value);
                setLastName(e.currentTarget.value);
                break;
            case "mobile1":
                // console.log(e.currentTarget.value);
                if (!mobile1.test(e.currentTarget.value)) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                }
                if (e.currentTarget.value.length >= 3) {
                    inputMobile2.current.focus();
                }
                setMobile1(e.currentTarget.value);
                break;
            case "mobile2":
                // console.log(e.currentTarget.value);
                if (!mobile2.test(e.currentTarget.value)) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                }
                if (e.currentTarget.value.length >= 4) {
                    inputMobile3.current.focus();
                }
                setMobile2(e.currentTarget.value);
                break;
            case "mobile3":
                // console.log(e.currentTarget.value);
                if (!mobile3.test(e.currentTarget.value)) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                }
                setMobile3(e.currentTarget.value);
                break;

            default:
                break;
        }
    };

    const sendFindId = () => {
        setIsLoading(true);
        let url = apiPath.api_user_find_id;
        let data = {
            user_name_first_ko: firstName,
            user_name_last_ko: lastName,
            inter_phone_number: "82",
            mobile1: mobile1,
            mobile2: mobile2,
            mobile3: mobile3,
        };

        RestServer("post", url, data)
            .then(function (response) {
                // response

                console.log(response);
                let result_info;

                let result_code = response.headers.result_code;

                if (result_code === "0000") {
                    result_info = response.data.result_info;

                    console.log(result_info);

                    setFindList(result_info);
                    setIsLoading(false);
                    setFinded(true);
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);

                let err = error.response.headers.result_code;
                // console.log(err);

                for (let i = 0; i < resultCode.length; i++) {
                    if (resultCode[i].result_code === err) {
                        let msg = resultCode[i].result_message_ko;
                        console.log(msg);
                        alert(msg);
                    }
                }

                setIsLoading(false);
            });
    };

    return (
        <>
            <Header />

            {!finded ? (
                <div id="con_area">
                    <div className="form sign" id="sign_form">
                        <h3 className="title">아이디 찾기</h3>
                        <div className="find">
                            <div className="flex">
                                <div>
                                    <h5>성명</h5>
                                    <input
                                        type="name"
                                        className="input w180"
                                        placeholder="성"
                                        onChange={(e) =>
                                            handleInput("firstName", e)
                                        }
                                    />
                                    <input
                                        type="name"
                                        className="input w180"
                                        placeholder="이름"
                                        onChange={(e) =>
                                            handleInput("lastName", e)
                                        }
                                    />
                                </div>
                                <div>
                                    <h5>휴대전화</h5>
                                    <div id="phone_num" className="m0">
                                        <input
                                            type="tel"
                                            className="input w120"
                                            id="phone_num1"
                                            onChange={(e) =>
                                                handleInput("mobile1", e)
                                            }
                                            ref={inputMobile1}
                                        />
                                        <input
                                            type="tel"
                                            className="input w140"
                                            id="phone_num2"
                                            onChange={(e) =>
                                                handleInput("mobile2", e)
                                            }
                                            ref={inputMobile2}
                                        />
                                        <input
                                            type="tel"
                                            className="input w140"
                                            id="phone_num3"
                                            onChange={(e) =>
                                                handleInput("mobile3", e)
                                            }
                                            ref={inputMobile3}
                                        />
                                    </div>
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
                            <Link
                                className="mainbtn btn01"
                                onClick={sendFindId}
                            >
                                아이디 찾기
                            </Link>
                        )}
                        <Link
                            to={routerPath.main_url}
                            className="mainbtn btn02"
                        >
                            뒤로가기
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="con_area">
                    <div className="ok">
                        <span>
                            <img src="/img/common/id_find.png" alt="" />
                        </span>
                        <h3>회원님의 아이디는 다음과 같습니다.</h3>
                        {findList ? (
                            findList.map((item, index) => (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    key={`user_id_${index}`}
                                >
                                    <h3 style={{ marginRight: "70px" }}>
                                        {item.user_id}
                                    </h3>
                                    <h3>{item.reg_dttm.split(" ")[0]}</h3>
                                </div>
                            ))
                        ) : (
                            <></>
                        )}
                        <Link to={routerPath.findPw_url} className="font-12">
                            비밀번호가 기억나지 않으신가요?
                        </Link>
                        <div className="btn_box">
                            <Link to={routerPath.main_url} className="backbtn">
                                메인화면 바로가기{" "}
                                <span>
                                    <img src="/img/common/arrow.png" alt="" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default FindIDMain;