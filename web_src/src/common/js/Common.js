import { React } from "react";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

// Alert (props)
// isOpen = state 상태값
// title = 제목
// content = 내용
// btn = 확인버튼
// closeModal = 닫기 (state를 변경할 수 있는 handler)
const CommonAlert = ({ isOpen, title, content, btn, handleModalClose }) => {
    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal_wrap" id="modal_wrap">
                    <div className="modal w1000" id="modal">
                        <div className="modal_close" onClick={handleModalClose}>
                            <img src="/img/common/modal_close.png" alt="" />
                        </div>
                        <div className="term" id="term">
                            <h3 className="title">{title}</h3>
                            <div className="linebox bd50">{content}</div>
                        </div>
                        {/* <div className="btn_box">
                            <Link
                                className="mainbtn btn01"
                                onClick={handleModalClose}
                            >
                                확인
                            </Link>
                        </div> */}
                    </div>
                </div>
            </Modal>
            <></>
        </>
    );
};
export { CommonAlert };
