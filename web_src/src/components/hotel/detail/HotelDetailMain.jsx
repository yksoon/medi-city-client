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
                            <div className="hotel_list_thumb">
                                <span className="big_thumb">
                                    <img src="img/main/hotel01.png" alt="" />
                                </span>
                                <div className="small_thumb">
                                    <span className="small_thumb_img">
                                        <img
                                            src="img/main/hotel01.png"
                                            alt=""
                                        />
                                    </span>
                                    <span className="small_thumb_img">
                                        <img
                                            src="img/sub/hotel_sam01.jpg"
                                            alt=""
                                        />
                                    </span>
                                    <span className="small_thumb_img">
                                        <img
                                            src="img/sub/hotel_sam02.jpg"
                                            alt=""
                                        />
                                    </span>
                                    <span className="small_thumb_img">
                                        <img
                                            src="img/sub/hotel_sam03.jpg"
                                            alt=""
                                        />
                                    </span>
                                    <span className="small_thumb_img">
                                        <img
                                            src="img/sub/hotel_sam01.jpg"
                                            alt=""
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="hotel_list_txt">
                                <div className="event">
                                    <img
                                        src="img/common/label_event.png"
                                        alt=""
                                    />
                                </div>
                                <div className="info_link">
                                    <h3>세인트존스호텔 강릉</h3>
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
                                    <a
                                        href="https://new.stjohns.co.kr/"
                                        target="_blank"
                                        className="img_btn"
                                    >
                                        <img
                                            src="img/sub/hotel_homepage.png"
                                            alt=""
                                        />
                                    </a>
                                    <a href="javascript:void(0);">호텔정책</a>
                                    <a href="javascript:void(0);">
                                        시설&서비스
                                    </a>
                                </div>
                                <h5>St.JOHN’S HOTEL</h5>
                                <div className="hotel_venue">
                                    <p>
                                        <span>
                                            <img
                                                src="img/sub/hotel_venue.png"
                                                alt=""
                                            />
                                        </span>
                                        강원도 강릉 창해로 307(강문동 1-1번지)
                                    </p>
                                    <p>
                                        <span>
                                            <img
                                                src="img/sub/hotel_tel.png"
                                                alt=""
                                            />
                                        </span>
                                        033-660-9000
                                    </p>
                                </div>
                                <div className="hotel_intro">
                                    <p className="hotel_intro_text">
                                        강릉에 위치한 세인트존스 호텔은
                                        KTX강릉역에서 차로 약 10분 거리에
                                        있습니다. 초당순두부마을과 경포해변까지
                                        차로 약 5분, 강문해변까지는 도보로 약
                                        10분이면 가실 수 있습니다. 호텔의
                                        최상층에는 동해의 전망과 자연 채광을
                                        만끽할 수 있는 2개의 인피니티 풀이
                                        있습니다. 메인 건물인 오션 타워의
                                        인피니티 풀에서는 성인 전용 이용 시간이
                                        별도로 마련되어 있습니다. 파인 타워에는
                                        바디 슬라이드, 자쿠지 및 반려견 전용
                                        수영장 등이 구비되어 있어 다양한 체험을
                                        하실 수 있습니다. 이 외에 반려견 전용
                                        '도그 파크', 편의점, 코인 세탁실,
                                        노래방, 연회장 등의 부대시설도 이용하실
                                        수 있습니다. 총 1,091개의 객실을
                                        보유하고 있으며, 일반 객실 외에 반려견
                                        전용 펫 룸, 키즈룸 등의 스페셜 객실이
                                        있습니다. 객실 테라스에서는 산 또는
                                        바다의 전망을 감상하실 수 있습니다. 호텔
                                        내부에는 레스토랑 '더 그라운드', '경양식
                                        1982', 미국식 크랩 요리를 만날 수 있는
                                        '오 크랩', 디저트 카페 '앙빵' 등의
                                        다양한 다이닝 공간이 마련되어 있습니다.
                                    </p>
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
