import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { routerPath } from "webPath";
// import { menu_show } from "./nav";
import $ from "jquery";
import "common/css/header.css";
import Login from "common/js/Login";

function Header({ userInfo }) {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");

    let loginInfo;
    (() => {
        loginInfo = JSON.parse(localStorage.getItem("userInfo"));

        // console.log("여기는 전체", loginInfo);

        // console.log("여기는 전체 중에 아이디 : ", loginInfo.user_id);
    })();

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
        // setUserId("hery@medi-city.co.kr");
    };
    const onPasswordHandler = (event) => {
        setUserPwd(event.currentTarget.value);
        // setUserPwd("1234qwer!@");
    };

    const signIn = () => {
        let data = {
            user_id: userId,
            user_pwd: userPwd,
        };

        Login(data);
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
                            <div className="flex">
                                {loginInfo ? <p>{loginInfo.user_id}</p> : <></>}
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
                                    onChange={(e) => onPasswordHandler(e)}
                                />
                                <Link
                                    className="login"
                                    id="header_login"
                                    onClick={signIn}
                                >
                                    LOGIN
                                </Link>
                                <Link
                                    to={routerPath.signup_url}
                                    className="login"
                                >
                                    SIGN UP
                                </Link>
                            </div>
                            {/* <a href="id_find_step1.html" className="font-12">
                                로그인에 문제가 발생하였나요?
                            </a>
                            <div class="flex profile">
                                <div>
                                    <h5>홍길동님</h5>
                                    <a
                                        href="javascript:void(0)"
                                        class="font-12"
                                        id="header_logout"
                                    >
                                        로그아웃
                                    </a>
                                </div>
                                <div class="profile_img_wrap">
                                    <span class="profile_img">
                                        <img
                                            src="img/common/profile01.png"
                                            alt=""
                                        />
                                    </span>
                                    <div
                                        id="gradeLabel"
                                        class="grade"
                                        name="gold"
                                    >
                                        <img
                                            src="img/common/grade_gold.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div> */}
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
