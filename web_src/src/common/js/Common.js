import { React } from "react";
import { Button, Modal } from "react-bootstrap";

// Alert (props)
// isOpen = state 상태값
// title = 제목
// content = 내용
// btn = 확인버튼
// closeModal = 닫기 (state를 변경할 수 있는 handler)
const CommonAlert = ({ isOpen, title, content, btn, closeModal }) => {
  let confirmBtn;
  if (!btn) {
    confirmBtn = "확인";
  } else {
    confirmBtn = btn;
  }

  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeModal}>
          {confirmBtn}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export { CommonAlert };

// Confirm (props)
// isOpen = state 상태값
// title = 제목
// content = 내용
// btn = 확인버튼
// closeModal = 닫기 (state를 변경할 수 있는 handler)
const CommonConfirm = ({ isOpen, title, content, btn, closeModal }) => {
  let confirmBtn;
  if (!btn) {
    confirmBtn = "확인";
  } else {
    confirmBtn = btn;
  }

  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          취소
        </Button>
        <Button variant="primary">{confirmBtn}</Button>
      </Modal.Footer>
    </Modal>
  );
};
export { CommonConfirm };
