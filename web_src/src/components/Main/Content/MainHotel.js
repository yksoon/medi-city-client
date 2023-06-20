import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainHotel(props) {
  const items = props.items;
  const Arrow = ({ onClick, className, icon, reverse }) => (
    <button className={className} onClick={onClick}>
      <img src={icon} style={reverse ? { transform: "rotate(180deg)" } : {}} />
    </button>
  );

  const option = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    centerMode: true,
    prevArrow: (
      <Arrow
        className="slick-prev"
        icon="/img/common/arrow.png"
        reverse={true}
      />
    ),
    nextArrow: <Arrow className="slick-next" icon="/img/common/arrow.png" />,
  };

  return (
    <div className="hotel-wrapper">
      <div class="title hotel-title">
        <h3>메디씨티와 함께하는 시원한 여름나기 호캉스!</h3>
        <p>추천 HOTEL</p>
      </div>
      <div className="hotel-carousel-wrapper">
        <Slider {...option}>
          {items.map((item, idx) => (
            <div className="hotel-img-wrap" key={idx}>
              {item.event === "Y" ? (
                <div
                  className="hotel-event"
                  style={{ background: "url(/img/common/label_event.png)" }}
                ></div>
              ) : (
                <></>
              )}
              <img
                src={item.imgUrl}
                alt={item.title}
                style={{ width: "95%", height: "100%", objectFit: "cover" }}
              />
              <h4 class="font-24 hotel-name">{item.title}</h4>
              <p class="font-21 gray-8">{item.subtitle}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MainHotel;
