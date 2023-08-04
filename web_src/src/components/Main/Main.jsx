import { React, useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { routerPath } from "webPath";
import { CommonAlert, CommonConfirm } from "common/js/Common";

import Header from "components/common/Header";
import Footer from "components/common/Footer";

import MainCarousel from "./crousel/MainCarousel";
import MainMenu from "./content/MainMenu";
import MainHotel from "./content/MainHotel";
import MainBanner from "./content/MainBanner";
import MainNews from "./content/MainNews";
import MainBoard from "./content/MainBoard";

// import Login from "common/js/Login";
import styles from "common/css/style/Main/Main.module.css";

function Main() {
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
