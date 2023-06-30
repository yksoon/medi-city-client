import { React, useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { routerPath } from "webPath";
import { CommonAlert, CommonConfirm } from "common/js/Common";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

import MainCarousel from "./Crousel/MainCarousel";
import MainMenu from "./Content/MainMenu";
import MainHotel from "./Content/MainHotel";
import MainBanner from "./Content/MainBanner";
import MainNews from "./Content/MainNews";
import MainBoard from "./Content/MainBoard";

// import Login from "common/js/Login";
import styles from "common/css/style/Main/Main.module.css";

function Main({ userInfo }) {
    //   const handleModalOpen = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const [modalTitle, setModalTitle] = useState("");
    //     const [modalContent, setModalContent] = useState([]);

    //     setIsOpen(true);
    // };
    return (
        <>
            <Header />

            <MainCarousel />

            <div className={`content ${styles.mainContent}`}>
                <MainMenu />

                <MainHotel />

                <MainBanner />

                <MainNews />

                <MainBoard />
            </div>

            {/* <CommonAlert
                isOpen={isOpen}
                handleModalClose={handleModalClose}
                content={modalContent}
                title={modalTitle}
            /> */}
            <Footer />
        </>
    );
}

export default Main;
