import { React } from "react";
import Modal from "@mui/material/Modal";

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
                    </div>
                </div>
            </Modal>
            <></>
        </>
    );
};
export { CommonAlert };

// Confirm (props)
// isOpen = state 상태값
// title = 제목
// content = 내용
// btn = 확인버튼
// closeModal = 닫기 (state를 변경할 수 있는 handler)
// const CommonConfirm = ({ isOpen, title, content, btn, closeModal }) => {
//     let confirmBtn;
//     if (!btn) {
//         confirmBtn = "확인";
//     } else {
//         confirmBtn = btn;
//     }

//     return (
//         <Modal show={isOpen} onHide={closeModal}>
//             <Modal.Header closeButton>
//                 <Modal.Title>{title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>{content}</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={closeModal}>
//                     취소
//                 </Button>
//                 <Button variant="primary">{confirmBtn}</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };
// export { CommonConfirm };
