import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";
import { CircularProgress } from "@mui/material";
// import { menu_show } from "./nav";
// import $ from "jquery";
import "common/css/header.css";
// import Login from "common/js/Login";

let resultCode;
function Header({ props }) {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    let loginInfo;
    (() => {
        loginInfo = JSON.parse(localStorage.getItem("userInfo"));
    })();

    useEffect(() => {
        resultCode = JSON.parse(localStorage.getItem("result_code"));
    }, []);

    // console.log(JSON.parse(localStorage.getItem("result_code")));

    const menu_show = () => {
        const nav = document.getElementById("menu");
        const sitemap = document.getElementById("sitemap");
        if (nav.classList.contains("nav_on")) {
            sitemap.style.left = "-200vh";
            nav.classList.remove("nav_on");
        } else {
            sitemap.style.left = 0;
            nav.classList.add("nav_on");
        }
    };

    const onEmailHandler = (event) => {
        setUserId(event.currentTarget.value);
        // setUserId("ksyong1990@naver.com");
    };
    const onPasswordHandler = (event) => {
        setUserPwd(event.currentTarget.value);
        // setUserPwd("Fhrhkd1490!");
    };

    const signIn = () => {
        setIsLoading(true);

        const url = apiPath.api_login;
        let data = {
            signup_type: "000",
            user_id: userId,
            user_pwd: userPwd,
        };

        RestServer("post", url, data)
            .then(function (response) {
                // response
                let user_info;

                let result_code = response.headers.result_code;

                if (result_code === "0000") {
                    user_info = response.data.result_info;

                    localStorage.removeItem("userInfo");
                    localStorage.setItem("userInfo", JSON.stringify(user_info));

                    setIsLoading(false);

                    window.location.replace(routerPath.main_url);
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);

                let err = error.response.headers.result_code;
                // console.log(err);

                for (let i = 0; i < resultCode.length; i++) {
                    if (resultCode[i].result_code === err) {
                        console.log(resultCode[i].result_message_ko);
                    }
                }

                setIsLoading(false);
            });
    };

    const signout = () => {
        const url = apiPath.api_signout;
        let data = {};

        RestServer("post", url, data)
            .then(function (response) {
                // response
                let result_code = response.headers.result_code;

                if (result_code === "0000") {
                    localStorage.removeItem("userInfo");

                    setUserId("");
                    setUserPwd("");

                    window.location.replace(routerPath.main_url);
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log(error);

                let err = error.response.headers.result_code;
                // console.log(err);

                for (let i = 0; i < resultCode.length; i++) {
                    if (resultCode[i].result_code === err) {
                        console.log(resultCode[i].result_message_ko);
                    }
                }
            });
    };

    return (
        <>
            <header>
                <div className="header_content">
                    <h1 className="logo">
                        <Link to={routerPath.main_url}>
                            <img src="/img/common/logo.png" alt="" />
                        </Link>
                    </h1>
                    <div className="flex">
                        <div className="login">
                            {!loginInfo ? (
                                <>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            placeholder="ID"
                                            className="login"
                                            onChange={(e) => onEmailHandler(e)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="PASSWORD"
                                            className="login"
                                            onChange={(e) =>
                                                onPasswordHandler(e)
                                            }
                                        />
                                        {isLoading ? (
                                            <Link
                                                className="login"
                                                id="header_login"
                                                // onClick={signIn}
                                            >
                                                <CircularProgress
                                                    color="inherit"
                                                    style={{
                                                        padding: "10px",
                                                    }}
                                                />
                                            </Link>
                                        ) : (
                                            <Link
                                                className="login"
                                                id="header_login"
                                                onClick={signIn}
                                            >
                                                LOGIN
                                            </Link>
                                        )}

                                        <Link
                                            to={routerPath.signup_url}
                                            className="login"
                                        >
                                            SIGN UP
                                        </Link>
                                    </div>
                                    <a
                                        href="id_find_step1.html"
                                        className="font-12"
                                    >
                                        로그인에 문제가 발생하였나요?
                                    </a>
                                </>
                            ) : (
                                <>
                                    <div className="flex profile">
                                        <div>
                                            <h5>
                                                환영합니다{" "}
                                                {`${loginInfo.user_name_first_ko}${loginInfo.user_name_last_ko}`}
                                                님
                                            </h5>
                                            <Link
                                                className="font-12"
                                                id="header_logout"
                                                onClick={signout}
                                            >
                                                로그아웃
                                            </Link>
                                            <a
                                                href="mypage_modify_step1.html"
                                                className="font-12"
                                            >
                                                회원정보수정
                                            </a>
                                        </div>
                                        <a
                                            href="mypage.html"
                                            className="profile_img_wrap"
                                        >
                                            <span className="profile_img">
                                                <img
                                                    src="img/common/profile01.png"
                                                    alt=""
                                                />
                                            </span>
                                            <div
                                                id="gradeLabel"
                                                className="grade"
                                                name="gold"
                                            >
                                                <img
                                                    src="img/common/grade_gold.png"
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>

                        <nav id="menu" onClick={menu_show}>
                            <div className="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                        <div id="sitemap">
                            <div>
                                <div>
                                    <h3 className="font-38">SERVICE</h3>
                                    <ul>
                                        <li>
                                            <a href="sitemap.html">
                                                <span>
                                                    <img
                                                        src="/img/main/quick09.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>전체 서비스</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/main/quick03.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>호텔 특가</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/main/quick04.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>MEDI ART</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/main/quick05.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>세무/회계 컨설팅</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/main/quick06.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>MICE/PCO</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex">
                                    <div>
                                        <h3 className="font-38">COMMUNITY</h3>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/main/quick10.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>학회소식</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/main/quick11.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>EVENT</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-38">MEMBERSHIP</h3>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/main/quick02.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>MEDI POINT</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/main/quick07.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>K-MEDI CREATOR</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/main/quick08.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>MYPAGE</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={routerPath.main_url} className="home">
                            <img src="/img/common/header_home.png" alt="" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
