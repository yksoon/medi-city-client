import React, { useEffect, useMemo, useRef, useState } from "react";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSpinnerAtom, userInfoAtom, userTokenAtom } from "recoils/atoms";
import { useNavigate } from "react-router";
import { Pagination } from "@mui/material";
import {
    CommonConsole,
    CommonErrModule,
    CommonNotify,
    CommonRest,
} from "common/js/Common";
import { apiPath, routerPath } from "webPath";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import $ from "jquery";
import { successCode } from "common/js/resultCode";
import { Link } from "react-router-dom";

const HotelList = () => {
    const { confirm } = useConfirm();
    const { alert } = useAlert();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const userInfo = useRecoilValue(userInfoAtom);
    const userToken = useRecoilValue(userTokenAtom);

    const navigate = useNavigate();

    const [hotelList, setHotelList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        !userToken
            ? CommonNotify({
                  type: "alert",
                  hook: alert,
                  message: "로그인이 필요한 서비스입니다.",
                  callback: () => navigate(routerPath.main_url),
              })
            : getHotelList(page, 10, "");
    }, [userToken]);

    useEffect(() => {
        $(function () {
            $(".hotel_intro").each(function () {
                let content = $(this).children(".hotel_intro_text");
                let content_txt = content.text();
                let content_txt_short = content_txt.substring(0, 265) + "...";
                let btn_more = $(
                    '<a href="javascript:void(0)" class="more">더보기</a>',
                );

                $(this).append(btn_more);

                if (content_txt.length > 260) {
                    content.html(content_txt_short);
                } else {
                    btn_more.hide();
                }

                btn_more.click(toggle_content);
                // 아래 bind가 안 되는 이유는??
                // btn_more.bind('click',toggle_content);

                function toggle_content() {
                    if ($(this).hasClass("short")) {
                        // 접기 상태
                        $(this).html("더보기");
                        content.html(content_txt_short);
                        $(this).removeClass("short");
                    } else {
                        // 더보기 상태
                        $(this).html("접기");
                        content.html(content_txt);
                        $(this).addClass("short");
                    }
                }
            });
        });
    }, []);

    const getHotelList = (pageNum, pageSize, searchKeyword) => {
        setIsSpinner(true);

        const url = apiPath.api_hotel_list;
        const data = {
            page_num: pageNum,
            page_size: pageSize,
            search_keyword: searchKeyword,
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            const result_code = res.headers.result_code;

            // 성공
            if (
                result_code === successCode.success ||
                result_code === successCode.noData
            ) {
                const result_info = res.data.result_info;
                const page_info = res.data.page_info;

                setHotelList(result_info);
                setPageInfo(page_info);

                setIsSpinner(false);
            } else {
                // 에러
                CommonConsole("log", res);

                setIsSpinner(false);
            }
        };
    };

    // 페이지네이션 이동
    const handleChange = (e, value) => {
        getHotelList(value, 10, "");

        setPage(value);
    };

    return (
        <>
            {/* Header S */}
            <Header />
            {/* Header E */}

            {/* Content S */}
            <div id="con_area">
                <h2 className="subtitle">HOTEL</h2>
                <div className="hotel_list">
                    <ul>
                        {hotelList.length !== 0 &&
                            hotelList.map((item, idx) => (
                                <li key={`hotelList_${idx}`}>
                                    <span className="hotel_list_thumb">
                                        <img
                                            // src="img/main/hotel01.png"
                                            src={`${apiPath.api_img_path}${item.file_path_enc}`}
                                            alt=""
                                        />
                                    </span>
                                    <div className="hotel_list_txt">
                                        <div className="event">
                                            <img
                                                src="img/common/label_event.png"
                                                alt=""
                                            />
                                        </div>
                                        <h3>{item.name_ko}</h3>
                                        <h5>{item.name_en}</h5>
                                        <div className="hotel_venue">
                                            <p>
                                                <span>
                                                    <img
                                                        src="img/sub/hotel_venue.png"
                                                        alt=""
                                                    />
                                                </span>
                                                {`${item.addr1_ko} ${item.addr2_ko}`}
                                            </p>
                                            <p>
                                                <span>
                                                    <img
                                                        src="img/sub/hotel_tel.png"
                                                        alt=""
                                                    />
                                                </span>
                                                {`${item.phone1}-${item.phone2}-${item.phone3}`}
                                            </p>
                                        </div>
                                        <div className="hotel_intro">
                                            <p className="hotel_intro_text">
                                                {item.info_ko}
                                            </p>
                                        </div>
                                        <div className="hotel_btn">
                                            <a
                                                href="hotel_reservation_01.html"
                                                className="hotel_list_btn blue"
                                            >
                                                예약 바로가기{" "}
                                                <span>
                                                    <img
                                                        src="/img/sub/btn_arrow_color.png"
                                                        alt=""
                                                    />
                                                </span>
                                            </a>
                                            <Link
                                                to={`${routerPath.hotel_detail}${item.hotel_idx}`}
                                                className="hotel_list_btn"
                                            >
                                                호텔 상세보기{" "}
                                                <span>
                                                    <img
                                                        src="/img/sub/btn_arrow_gray.png"
                                                        alt=""
                                                    />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="pagenation">
                    <Pagination
                        count={pageInfo.pages}
                        onChange={handleChange}
                        shape="rounded"
                        color="primary"
                    />
                </div>
            </div>
            {/* Content E */}

            {/* Footer S */}
            <Footer />
            {/* Footer E */}
        </>
    );
};

export default HotelList;
