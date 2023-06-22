import { React } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function MainCarousel() {
  const carouselItems = [
    {
      imgUrl: "/img/main/mainvisual01.png",
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      imgUrl: "/img/main/mainvisual02.png",
      title: "Slide 2",
      description: "This is the second slide.",
    },
  ];

  const Arrow = ({ onClick, className, icon, reverse }) => (
    <button className={className} onClick={onClick}>
      <img src={icon} style={reverse ? { transform: "rotate(180deg)" } : {}} />
    </button>
  );

  const option = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    // prevArrow: (
    //   <Arrow
    //     className="slick-prev"
    //     icon="/img/common/arrow.png"
    //     reverse={true}
    //   />
    // ),
    // nextArrow: <Arrow className="slick-next" icon="/img/common/arrow.png" />,
  };
  return (
    <div id="mainvisual">
      <div className="mainvisual">
        <Slider {...option}>
          {carouselItems.map((item, idx) => (
            <div key={idx}>
              <img
                src={item.imgUrl}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MainCarousel;
