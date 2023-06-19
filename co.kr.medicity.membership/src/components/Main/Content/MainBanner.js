import React from "react";

function MainBanner() {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-items">
          <div className="banner">
            <img className="banner-img" src="img/main/banner01.png" alt="" />
            <img
              className="banner-icon"
              src="img/main/banner01_icon.png"
              alt=""
            />
          </div>
          <div className="banner">
            <img className="banner-img" src="img/main/banner02.png" alt="" />
            <img
              className="banner-icon"
              src="img/main/banner02_icon.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
