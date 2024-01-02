import React, { useEffect, useState } from "react";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import {
    CommonConsole,
    CommonErrModule,
    CommonNotify,
    CommonRest,
} from "common/js/Common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSpinnerAtom, userTokenAtom } from "recoils/atoms";
import { useNavigate } from "react-router";
import { apiPath, routerPath } from "webPath";
import { successCode } from "common/js/resultCode";
import { useParams } from "react-router";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import { Link } from "react-router-dom";
import $ from "jquery";

const HotelDetailMain = (props) => {
    const { confirm } = useConfirm();
    const { alert } = useAlert();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    // navigate
    const navigate = useNavigate();

    // token
    const userToken = useRecoilValue(userTokenAtom);

    // url params
    const params = useParams();
    const hotelIdx = params ? params.hotelIdx : "";

    // states
    const [hotelInfo, setHotelInfo] = useState({});
    const [hotelFileInfo, setHotelFileInfo] = useState([]);

    useEffect(() => {
        // 상단 썸네일
        $(".small_thumb_img").click(function () {
            const imgSrc = $(this).children("img").attr("src");
            // console.log(imgSrc);
            $(".big_thumb").children("img").attr("src", imgSrc);
        });

        // 추가정보 텍스트 드롭다운
        $(".additional_info").hide();
        $(".additional_info_btn").click(function () {
            $(this).toggleClass("open");
            if ($(this).hasClass("open") == true) {
                $(this).siblings(".additional_info").stop().slideDown();
                $(this).text("추가정보 닫기");
            } else {
                $(this).siblings(".additional_info").stop().slideUp();
                $(this).text("추가정보 보기");
            }
        });
    }, []);

    useEffect(() => {
        !userToken
            ? CommonNotify({
                  type: "alert",
                  hook: alert,
                  message: "로그인이 필요한 서비스입니다.",
                  callback: () => navigate(routerPath.main_url),
              })
            : getHotelDetail();
    }, [userToken]);

    const getHotelDetail = () => {
        setIsSpinner(true);

        const url = apiPath.api_hotel_detail + hotelIdx;
        const data = {};

        // 파라미터
        const restParams = {
            method: "get",
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

                setHotelInfo(result_info);

                if (result_info.attachment_file_info.length !== 0) {
                    setHotelFileInfo(result_info.attachment_file_info);
                }

                setIsSpinner(false);
            } else {
                // 에러
                CommonConsole("log", res);

                setIsSpinner(false);
            }
        };
    };
    return (
        <>
            {/* Header S */}
            <Header />
            {/* Header E */}

            {/* Content S */}
            <div id="con_area">
                {Object.keys(hotelInfo).length !== 0 && (
                    <>
                        <h2 className="subtitle">HOTEL</h2>
                        <div className="hotel_view">
                            <div className="hotel_info">
                                {hotelFileInfo.length !== 0 && (
                                    <>
                                        <div className="hotel_list_thumb">
                                            <span className="big_thumb">
                                                <img
                                                    src={`${apiPath.api_img_path}${hotelFileInfo[0].file_path_enc}`}
                                                    alt=""
                                                />
                                            </span>
                                            <div className="small_thumb">
                                                {hotelFileInfo.map(
                                                    (item, idx) => (
                                                        <span
                                                            className="small_thumb_img"
                                                            key={`file_${idx}`}
                                                        >
                                                            <img
                                                                src={`${apiPath.api_img_path}${item.file_path_enc}`}
                                                                alt=""
                                                            />
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="hotel_list_txt">
                                    <div className="event">
                                        <img
                                            src="img/common/label_event.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info_link">
                                        <h3>{hotelInfo.name_ko}</h3>
                                        <Link
                                            to="https://kko.to/GChYcJbzYW"
                                            target="_blank"
                                            className="img_btn"
                                        >
                                            <img
                                                src="img/sub/hotel_map.png"
                                                alt=""
                                            />
                                        </Link>
                                        {hotelInfo.home_page_show_yn ===
                                            "Y" && (
                                            <Link
                                                to={hotelInfo.home_page}
                                                target="_blank"
                                                className="img_btn"
                                            >
                                                <img
                                                    src="img/sub/hotel_homepage.png"
                                                    alt=""
                                                />
                                            </Link>
                                        )}
                                        <Link to="">호텔정책</Link>
                                        <Link to="">시설&서비스</Link>
                                    </div>
                                    <h5>{hotelInfo.name_en}</h5>
                                    <div className="hotel_venue">
                                        <p>
                                            <span>
                                                <img
                                                    src="img/sub/hotel_venue.png"
                                                    alt=""
                                                />
                                            </span>
                                            {`${hotelInfo.addr1_ko} ${hotelInfo.addr2_ko}`}
                                        </p>
                                        <p>
                                            <span>
                                                <img
                                                    src="img/sub/hotel_tel.png"
                                                    alt=""
                                                />
                                            </span>
                                            {`(+${hotelInfo.inter_phone_number})${hotelInfo.phone1}-${hotelInfo.phone2}-${hotelInfo.phone3}`}
                                        </p>
                                    </div>
                                    <div className="hotel_intro">
                                        <p className="hotel_intro_text">
                                            {hotelInfo.info_ko}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {/* Content E */}

            {/* Footer S */}
            <Footer />
            {/* Footer E */}
        </>
    );
};

export default HotelDetailMain;
