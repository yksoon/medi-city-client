import React, { useEffect } from "react";
import Slider from "react-slick";

import $ from "jquery";

function MainHotel(props) {
  const hotelItems = [
    {
      imgUrl: "/img/main/hotel01.png",
      title: "세인트존스호텔 강릉",
      subtitle: "St.JOHN’S HOTEL",
      event: "Y",
    },
    {
      imgUrl: "/img/main/hotel02.png",
      title: "킨텍스 바이 케이트리 호텔",
      subtitle: "KINTEX by K-TREEL",
    },
    {
      imgUrl: "/img/main/hotel03.png",
      title: "호텔 뮬리아 자카르타",
      subtitle: "HOTEL MULIA & THE SUIT ...",
    },
    {
      imgUrl: "/img/main/hotel04.png",
      title: "웨스틴호텔 자카르타",
      subtitle: "The Westin Jakarta",
    },
    {
      imgUrl: "/img/main/hotel05.png",
      title: "노보텔  보고 골프 리조트 & 컨벤션 센터 자카르타",
      subtitle: "NOVOTEL BOGOR GOLF RESORT & CONVENTION CENTER",
    },
  ];
  // const Arrow = ({ onClick, className, icon, reverse }) => (
  //   <button className={className} onClick={onClick}>
  //     <img src={icon} style={reverse ? { transform: "rotate(180deg)" } : {}} />
  //   </button>
  // );

  const option = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: false,
    draggable: true,
    centerPadding: "40px",
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
    // dotsClass: "slick-dots slick-thumb",
  };

  useEffect(() => {
    let slick_length = $(".slick-dots li").length;
    $(".slick-dots button").text("");
    $(".slick-dots li").css("width", "calc(100% /" + slick_length + " )");
    $(".slick-dots").css("display", "flex");
    $(".slick-dots").css("position", "unset");
  }, []);

  return (
    <div className="main_hotel">
      <div className="title">
        <h3>메디씨티와 함께하는 시원한 여름나기 호캉스!</h3>
        <p>추천 HOTEL</p>
      </div>
      <ul className="hotel_slider">
        <Slider {...option}>
          {hotelItems.map((item, idx) => (
            <li
              className={item.event === "Y" ? "event" : ""}
              key={`hotel_${idx}`}
            >
              <a href="">
                <span className="hotel_thumb">
                  <img src={item.imgUrl} alt="" />
                </span>
                <h4 className="font-24">{item.title}</h4>
                <p className="font-21 gray-8">{item.subtitle}</p>
              </a>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
}

export default MainHotel;
