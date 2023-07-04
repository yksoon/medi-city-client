import React from "react";
import { Link } from "react-router-dom";

function MainNews() {
    return (
        <>
            <div class="main_news">
                <div class="title">
                    <h3>학회소식</h3>
                    <p>의료관련 학회소식</p>
                </div>
                <ul class="block_3">
                    <li class="comming">
                        <a href="">
                            <h4 class="font-24">IANR 2023</h4>
                            <p class="font-18 gray-6">2023. 11. 03 ~ 04</p>
                            <p class="font-18 gray-6">세종컨벤션</p>
                        </a>
                        <a
                            href="https://ianr2023korea.org/"
                            target="_blank"
                            class="home_btn"
                        >
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="font-24">한국원자력협의회 심포지움</h4>
                            <p class="font-18 gray-6">2023. 08. 17 ~ 18</p>
                            <p class="font-18 gray-6">강릉세인트존스호텔</p>
                        </a>
                        <a href="" class="home_btn">
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="font-24">Conference</h4>
                            <p class="font-18 gray-6">2000.00.00 ~ 00.00</p>
                            <p class="font-18 gray-6">Venue</p>
                        </a>
                        <a href="" class="home_btn">
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                </ul>
                <ul class="block_4">
                    <li>
                        <a href="">
                            <h4 class="font-24">Conference</h4>
                            <p class="font-18 gray-6">2000.00.00 ~ 00.00</p>
                            <p class="font-18 gray-6">Venue</p>
                        </a>
                        <a href="" class="home_btn">
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="font-24">Conference</h4>
                            <p class="font-18 gray-6">2000.00.00 ~ 00.00</p>
                            <p class="font-18 gray-6">Venue</p>
                        </a>
                        <a href="" class="home_btn">
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="font-24">Conference</h4>
                            <p class="font-18 gray-6">2000.00.00 ~ 00.00</p>
                            <p class="font-18 gray-6">Venue</p>
                        </a>
                        <a href="" class="home_btn">
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="font-24">Conference</h4>
                            <p class="font-18 gray-6">2000.00.00 ~ 00.00</p>
                            <p class="font-18 gray-6">Venue</p>
                        </a>
                        <a href="" class="home_btn">
                            <img src="/img/common/home.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MainNews;
