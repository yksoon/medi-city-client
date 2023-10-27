import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import $ from "jquery";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../../recoils/atoms";

function MyPageMain() {
    const userInfo = useRecoilValue(userInfoAtom);

    useEffect(() => {
        scrollAct();
    }, []);

    // 좌측 메뉴 위치 고정
    const scrollAct = () => {
        let fixedMenu = document.querySelector(".fixed_menu");
        const position = fixedMenu.offsetTop; // fixed 메뉴 위치

        window.addEventListener("scroll", function () {
            const scrollTop = window.pageYOffset; // 현재 스크롤 위치
            const footer = document.querySelector("footer");
            const footerH = footer.offsetHeight + 150; // footer 높이
            const wrap = document.querySelector(".wrap");
            const wrapH = wrap.offsetHeight; // 모든 컨텐츠 높이
            const conH = wrapH - footerH - fixedMenu.offsetHeight - position; // footer 까지 스크롤 도달 위치 계산

            if (scrollTop + 15 > position) {
                if (conH + position - 30 > scrollTop) {
                    fixedMenu.style.position = "fixed";
                    fixedMenu.style.top = "0";
                } else {
                    fixedMenu.style.position = "absolute";
                    fixedMenu.style.top = conH + "px";
                }
            } else {
                fixedMenu.style.position = "absolute";
                fixedMenu.style.top = "0";
            }
        });
    };

    return (
        <>
            <div className="wrap">
                <Header />

                <div id="con_area">
                    <div className="mypage clear">
                        <div className="my_fix_wrap">
                            <div className="fixed_menu">
                                <div className="my_quick">
                                    <div className="info">
                                        <div className="name">
                                            <h3>{userInfo.user_name_ko} 님</h3>
                                            <p className="point">
                                                <span>
                                                    <img
                                                        src="img/mypage/point.png"
                                                        alt=""
                                                    />
                                                </span>
                                                1,480,960,000
                                            </p>
                                        </div>
                                        <div className="my_list">
                                            <ul>
                                                <li>
                                                    <Link href="mypage_modify_step1.html">
                                                        회원정보 수정
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="flex">
                                                <ul>
                                                    <li>
                                                        <Link href="">
                                                            전체 예약{" "}
                                                            <span>0건</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="mypage_qna_list.html">
                                                            전체 Q&A{" "}
                                                            <span>0건</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">
                                                            전체 동영상{" "}
                                                            <span>0건</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href="">
                                                            포인트 정산 내역
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">
                                                            구독자 현황
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="add_banner">
                                    <li>
                                        <Link href="">
                                            <img
                                                src="img/mypage/banner_230614.png"
                                                alt=""
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <img
                                                src="img/mypage/banner_230615.png"
                                                alt=""
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="my_history">
                            <ul>
                                <li className="my_hotel">
                                    <div className="flex">
                                        <span className="h_thumb">
                                            <img
                                                src="img/main/hotel01.png"
                                                alt=""
                                            />
                                        </span>
                                        <div>
                                            <p className="date">23. 05. 24</p>
                                            <div className="m_title">
                                                <h5>세인트존스호텔 강릉</h5>
                                            </div>
                                            <Link
                                                href="mypage_hotel.html"
                                                className="font-12"
                                            >
                                                예약 상세보기
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="h_status">
                                        <ul className="flex">
                                            <li className="end">
                                                <p>결제완료</p>
                                                <div className="flex">
                                                    <div className="line"></div>
                                                    <span className="circle"></span>
                                                    <div className="line"></div>
                                                </div>
                                            </li>
                                            <li className="end ing">
                                                <p>예약대기</p>
                                                <div className="flex">
                                                    <div className="line"></div>
                                                    <span className="circle"></span>
                                                    <div className="line"></div>
                                                </div>
                                            </li>
                                            <li>
                                                <p>예약확정</p>
                                                <div className="flex">
                                                    <div className="line"></div>
                                                    <span className="circle"></span>
                                                    <div className="line"></div>
                                                </div>
                                            </li>
                                            <li>
                                                <p>방문완료</p>
                                                <div className="flex">
                                                    <div className="line"></div>
                                                    <span className="circle"></span>
                                                    <div className="line"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="my_inq">
                                    <div>
                                        <p className="date">23. 05. 24</p>
                                        <div className="m_title">
                                            <h5>문의하기 제목</h5>
                                            <span className="i_status end">
                                                답변완료
                                            </span>
                                        </div>
                                        <Link href="" className="font-12">
                                            예약 상세보기
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex">
                                        <span className="h_thumb">
                                            <img
                                                src="img/mypage/kmedi_noimg.png"
                                                alt=""
                                            />
                                        </span>
                                        <div>
                                            <p className="date">23. 05. 24</p>
                                            <div className="m_title">
                                                <h5>동영상제목</h5>
                                            </div>
                                            <Link href="" className="font-12">
                                                상세보기
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="my_inq">
                                    <div>
                                        <p className="date">23. 05. 24</p>
                                        <div className="m_title">
                                            <h5>문의하기 제목</h5>
                                            <span className="i_status">
                                                답변대기
                                            </span>
                                        </div>
                                        <Link href="" className="font-12">
                                            예약 상세보기
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex">
                                        <span className="h_thumb">
                                            <img
                                                src="img/mypage/kmedi_noimg.png"
                                                alt=""
                                            />
                                        </span>
                                        <div>
                                            <p className="date">23. 05. 24</p>
                                            <div className="m_title">
                                                <h5>동영상제목</h5>
                                            </div>
                                            <Link href="" className="font-12">
                                                상세보기
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="my_inq">
                                    <div>
                                        <p className="date">23. 05. 24</p>
                                        <div className="m_title">
                                            <h5>문의하기 제목</h5>
                                            <span className="i_status end">
                                                답변완료
                                            </span>
                                        </div>
                                        <Link href="" className="font-12">
                                            예약 상세보기
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex">
                                        <span className="h_thumb">
                                            <img
                                                src="img/mypage/kmedi_noimg.png"
                                                alt=""
                                            />
                                        </span>
                                        <div>
                                            <p className="date">23. 05. 24</p>
                                            <div className="m_title">
                                                <h5>동영상제목</h5>
                                            </div>
                                            <Link href="" className="font-12">
                                                상세보기
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="my_inq">
                                    <div>
                                        <p className="date">23. 05. 24</p>
                                        <div className="m_title">
                                            <h5>문의하기 제목</h5>
                                            <span className="i_status end">
                                                답변완료
                                            </span>
                                        </div>
                                        <Link href="" className="font-12">
                                            예약 상세보기
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex">
                                        <span className="h_thumb">
                                            <img
                                                src="img/mypage/kmedi_noimg.png"
                                                alt=""
                                            />
                                        </span>
                                        <div>
                                            <p className="date">23. 05. 24</p>
                                            <div className="m_title">
                                                <h5>동영상제목</h5>
                                            </div>
                                            <Link href="" className="font-12">
                                                상세보기
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default MyPageMain;
